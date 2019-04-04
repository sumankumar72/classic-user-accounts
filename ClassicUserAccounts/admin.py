from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as um
from .forms import UserChangeForm, RegistrationForm
from django.contrib.auth.admin import GroupAdmin
from django.contrib.auth.models import Group
from .models import User, Role


admin.site.unregister(Group)
admin.site.register(Role, GroupAdmin)


class UserAdmin(um):
    form = UserChangeForm
    add_form = RegistrationForm
    
    list_display = ('avatar_tag', 'get_full_name', 'email', 'mobile', 'website', 'is_admin')
    list_filter = ('email', 'first_name')
    filter_horizontal = ('groups', 'user_permissions',)
    fieldsets = (
        (None, {'fields': ('email', )}),
        ('Theme', {'fields': ('theme', )}),

        ('Personal Info', {'fields': ('avatar', 'title', 'first_name', 'last_name', 'date_of_birth', 'gender',
                                      'business_email', 'timezone')}),
        ('Contact info', {'fields': ('country', 'state', 'city', 'zip_code', 'address_line1', 'address_line2',
                                     'mobile', 'website')}),
        ('Social info', {'fields': ('skype_id', 'facebook_id', 'linkedin_id', 'twitter_id')}),
        ('Permissions', {'fields': ('is_active', 'is_superuser', 'is_admin', 'groups', 'user_permissions')}),
        ('Important Dates', {'fields': ('last_login',)}),
    )
    # readonly_fields = ('email',)
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    # add_fieldsets = (
    #     (None, {
    #         'classes': ('wide',),
    #         'fields': ('email', 'password1', 'password2')}
    #     ),
    # )
    add_fieldsets = (
        (None, {'fields': ('email', 'password1', 'password2')}),
        ('Personal Info', {'fields': ('avatar', 'title', 'first_name', 'last_name', 'date_of_birth')}),
        ('Contact info', {'fields': ('country', 'state', 'city', 'zip_code', 'address_line1', 'address_line2',
                                     'mobile', 'website')}),
        ('Social info', {'fields': ('skype_id', 'facebook_id', 'linkedin_id', 'twitter_id')}),
        ('Permissions', {'fields': ('is_active', 'is_superuser', 'is_admin', 'groups', 'user_permissions')}),
    )
    
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

admin.site.register(User, UserAdmin)