from django import forms
from ClassicUserAccounts.models import *
from django.contrib.auth.models import User
from ClassicUserAccounts import models
# from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.contrib.auth.models import Group
from django.conf import settings
import re


class RegistrationForm(forms.ModelForm):
	password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
	password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)
	email = forms.CharField(label='User name', required=True, max_length=60)
	
	class Meta:
		model = models.User
		# fields = ('title', 'first_name', 'last_name', 'email', 'mobile', 'is_active', 'is_admin', 'date_of_birth',
		#           'avatar')
		fields = ('first_name', 'last_name', 'mobile', 'website', 'email')
	
	def clean_password2(self):
		password1 = self.cleaned_data.get("password1")
		password2 = self.cleaned_data.get("password2")
		if password1 and password2 and password1 != password2:
			raise forms.ValidationError("Passwords don't match")
		return password2

	def clean_email(self):
		if hasattr(settings, 'CLASSIC_VALIDATE_EMAIL') and settings.CLASSIC_VALIDATE_EMAIL:
			if not self.valid_email(self.cleaned_data["email"]):
				raise forms.ValidationError("Please enter valid email")

		return self.cleaned_data["email"]

	def valid_email(self, email):
		if re.match(r"^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$", email) != None:
			return True
		return False
	
	def save(self, commit=True):
		# Save the provided password in hashed format
		user = super(RegistrationForm, self).save(commit=False)
		user.set_password(self.cleaned_data["password1"])
		user.business_email = user.email
		if commit:
			user.save()
		return user


class UserChangeForm(forms.ModelForm):
	"""A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's
    password hash display field.
    """
	email = forms.EmailField(disabled=True)
	# password = ReadOnlyPasswordHashField()
	groups = forms.ModelMultipleChoiceField(label='Roles', queryset=Role.objects.all(), required=False)
	
	class Meta:
		model = User
		# fields = ('email', 'first_name', 'last_name', 'is_active', 'title')
		fields = '__all__'
	
	# def clean_password(self):
	#     # Regardless of what the user provides, return the initial value.
	#     # This is done here, rather than on the field, because the
	#     # field does not have access to the initial value
	#     return self.initial["password"]
	def save(self, commit=True):
		user = super(UserChangeForm, self).save(commit=False)
		if user.business_email is None or user.business_email == '':
			user.business_email = user.email
			if commit:
				user.save()
		return user