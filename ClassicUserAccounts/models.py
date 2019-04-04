from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import Group
from django.utils.html import format_html
from .managers import UserManager


# from django.contrib.auth import get_user_model
# User = get_user_model()


class Role(Group):
    class Meta:
        proxy = True
        app_label = 'ClassicUserAccounts'
        verbose_name = _('Role')


class Country(models.Model):
    country_code = models.CharField(max_length=4)
    country_name = models.CharField(max_length=100)

    def __str__(self):
        return '{1} - ({0})'.format(self.country_name, self.country_code)


class TimeZone(models.Model):
    offset = models.CharField(max_length=50)
    abbr = models.CharField(max_length=50, null=True, blank=True)
    zone_text = models.CharField(max_length=200, unique=True, db_index=True)
    value = models.CharField(max_length=200, unique=True)
    utc = models.TextField(blank=True, null=True)

    def __str__(self):
        return u'%s' % self.zone_text

    class Meta(object):
        '''AppPreferences Meta Class'''
        verbose_name = 'Timezone'
        verbose_name_plural = 'Timezones'


THEMES = (('default Theme', 'Default Theme'), ('theme-1', 'Theme-1'), ('theme-2', 'Theme-2'), ('theme-3', 'Theme-3'))


class User(AbstractBaseUser, PermissionsMixin):
    GENDER = (('Male', 'Male'), ('Female', 'Female'))
    TITLE = (('1st Lt', 'First Lieutenant'), ('Adm', 'Admiral'),
             ('Atty', 'Attorney'), ('Capt', 'Captain '), ('Chief', 'Chief'),
             ('Cmdr', 'Commander'), ('Col', 'Colonel'), ('Dean', 'Dean'),
             ('Dr', 'Doctor'), ('Gen', 'General'), ('Gov', 'Governor'),
             ('Hon', 'Honorable'), ('Lt Col', 'Lieutenant Colonel'), ('Maj', 'Major'),
             ('MSgt', 'Major/Master Sergeant'), ('Mr', 'Mister'), ('Mrs', 'Married Woman'),
             ('Ms', 'Single or Married Woman'), ('Prince', 'Prince'),
             ('Prof', 'Professor (includes Assistant and Associate')
             )

    email = models.CharField(_('email address'), unique=True, max_length=100)
    title = models.CharField(_('title'), choices=TITLE, max_length=100, null=True, blank=True)
    first_name = models.CharField(_('first name'), max_length=50, blank=True)
    last_name = models.CharField(_('last name'), max_length=50, blank=True)
    mobile = models.CharField(max_length=20, null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    fax = models.CharField(max_length=20, null=True, blank=True)
    website = models.URLField(max_length=300, null=True, blank=True)
    is_active = models.BooleanField(_('active'), default=True)
    is_admin = models.BooleanField(_('admin'), default=False)
    date_of_birth = models.DateField(_("date of birth"), null=True, blank=True)
    date_joined = models.DateTimeField(auto_now=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    gender = models.CharField(choices=GENDER, max_length=6, null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, null=True, blank=True)
    state = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    address_line1 = models.TextField(null=True, blank=True)
    address_line2 = models.TextField(null=True, blank=True)
    zip_code = models.CharField(max_length=10, null=True, blank=True)
    skype_id = models.CharField(_('Skype ID'), max_length=100, null=True, blank=True)
    facebook_id = models.CharField(_('Facebook ID'), max_length=100, null=True, blank=True)
    twitter_id = models.CharField(_('LinkedIn ID'), max_length=100, null=True, blank=True)
    linkedin_id = models.CharField(_('Twitter ID'), max_length=100, null=True, blank=True)
    business_email = models.EmailField(max_length=250, null=True, blank=True,
                                       help_text='<b>Note:</b>This email will used for all communication purpose.')
    timezone = models.ForeignKey(TimeZone, null=True, blank=True, on_delete=models.SET_NULL)

    user_code = models.CharField(max_length=20, null=True, blank=True,
                                 help_text='This field store a unique user code. ie dealer code, employee code etc.')
    theme = models.CharField(choices=THEMES, max_length=30, default='default-theme')

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    # groups.short_description = 'Roles'

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
    # app_label = 'authentication'

    # def groups(self):
    # 	return self.groups
    # groups.short_description = 'Roles'

    def avatar_tag(self):
        style = 'box-shadow: 0px 0px 4px 1px #000;width: 50px;height: 50px;border-radius: 50%;'
        if self.avatar:
            return format_html('<img src="{}" style="{}" />'.format(self.avatar.url, style))
        else:
            if self.gender:
                if self.gender == 'Male':
                    return format_html('<img src="/static/avatar_m.png" style="{}" />'.format(style))
                else:
                    return format_html('<img src="/static/avatar_f.png" style="{}" />'.format(style))
            else:
                return format_html('<img src="/static/avatar_a.png" style="{}" />'.format(style))

    avatar_tag.short_description = 'Profile Picture'

    def email_user(self, subject, message, from_email=None, **kwargs):
        '''
        Sends an email to this User.
        '''
        # send_mail(subject, message, from_email, [self.email], **kwargs)
        pass

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    def get_is_active(self):
        return self.is_active

    def get_date_joined(self):
        return self.date_joined

    def get_title(self):
        return self.title

    def get_email(self):
        if self.communication_email:
            return self.communication_email
        else:
            return self.email

    def get_first_name(self):
        return self.first_name

    def get_last_name(self):
        return self.last_name

    def get_mobile(self):
        return self.mobile

    def get_website(self):
        return self.get_website

    def get_avatar(self):
        return self.avatar

    def get_theme(self):
        return self.theme

    def get_avatar_url(self):
        if self.avatar.name is not '':
            return self.avatar.url
        else:
            if self.gender:
                if self.gender == 'Male':
                    return '/static/avatar_m.png'
                else:
                    return '/static/avatar_f.png'
            return '/static/avatar_a.png'

    def get_full_name(self):
        m_title = ''
        if self.title:
            m_title = self.title
        return m_title + ' ' + self.first_name + ' ' + self.last_name

    get_full_name.short_description = 'Name'

    def get_short_name(self):
        # The user is identified by their email address
        return self.first_name

    def get_communication_email(self):
        return self.communication_email

    def __str__(self):  # __unicode__ on Python 2
        return self.email

    @property
    def is_staff(self):
        return self.is_admin


class SoftDeleteModel(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    created_by = models.IntegerField(default=-1)
    modified_on = models.DateTimeField(auto_now=True)
    modified_by = models.IntegerField(default=-1)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    deleted_on = models.DateTimeField(null=True, default=None, blank=True)

    class Meta:
        abstract = True
