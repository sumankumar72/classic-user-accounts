from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth import login, authenticate
# from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import PasswordChangeForm, PasswordResetForm
from django.shortcuts import render, redirect
from .forms import RegistrationForm
from django.conf import settings

def signup(request):
	if request.method == 'POST':
		form = RegistrationForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data.get('email')
			raw_password = form.cleaned_data.get('password1')
			user = authenticate(username=username, password=raw_password)
			login(request, user)
			if hasattr(settings, 'SIGNUP_REDIRECT_URL'):
				return redirect(settings.SIGNUP_REDIRECT_URL)
			else:
				return redirect('/')
	else:
		form = RegistrationForm()
	return render(request, request.THEME_NAME+'registration/signup.html', {'form': form})


def change_password(request):
	if request.method == 'POST':
		form = PasswordChangeForm(request.user, request.POST)
		if form.is_valid():
			user = form.save()
			update_session_auth_hash(request, user)  # Important!
			messages.success(request, 'Your password was successfully updated!')
			return redirect('change_password')
		else:
			messages.error(request, 'Please correct the error below.')
	else:
		form = PasswordChangeForm(request.user)
	return render(request, request.THEME_NAME+'registration/password_change.html', {
	    'form': form
	})


def password_reset(request):
	if request.method == 'POST':
		form = PasswordResetForm(request.POST)
		if form.is_valid():
			user = form.save()
			update_session_auth_hash(request, user)  # Important!
			messages.success(request, 'Your password was successfully updated!')
			return redirect('change_reset_done')
		else:
			messages.error(request, 'Please correct the error below.')
	else:
		form = PasswordChangeForm(request.user)
	return render(request, request.THEME_NAME+'registration/password_reset_form.html', {
	    'form': form
	})



def dashboard(request):
	return render(request, request.THEME_NAME+'dashboard.html')