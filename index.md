# Django Classic User Accounts

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fec9ff41aee44257ac2f4da4b7f8b9db)](https://app.codacy.com/app/sumankumar72/django-classic-user-account?utm_source=github.com&utm_medium=referral&utm_content=sumankumar72/django-classic-user-account&utm_campaign=Badge_Grade_Dashboard)
[![GitHub forks](https://img.shields.io/github/forks/sumankumar72/django-classic-user-account.svg)](https://github.com/sumankumar72/django-classic-user-account/network) [![GitHub issues](https://img.shields.io/github/issues/sumankumar72/django-classic-user-account.svg)](https://github.com/sumankumar72/django-classic-user-account/issues) [![GitHub stars](https://img.shields.io/github/stars/sumankumar72/django-classic-user-account.svg)](https://github.com/sumankumar72/django-classic-user-account/stargazers) [![GitHub license](https://img.shields.io/github/license/sumankumar72/django-classic-user-account.svg)](https://github.com/sumankumar72/django-classic-user-account) [![GitHub license](https://img.shields.io/badge/This%20month%20downloads-5089%2B-brightgreen.svg)](https://github.com/sumankumar72/django-classic-user-account) [![GitHub license](https://img.shields.io/badge/Total%20downloads-101%2B-brightgreen.svg)](https://github.com/sumankumar72/django-classic-user-account)
[![GitHub license](https://img.shields.io/badge/Slack-%20-%23e01563.svg)](https://sumanshandilya.slack.com)


#### Features
- Login
- Sing up
- Email confirmation
- Extended user model
- Profile picture
- Password reset
- Account management (update account settings and change password)
- Custom `User` model support

### Requirements
- Django 2.0 +
- Python 3.5, or 3.6

### Quick installation


`1. Add "ClassicUserAccounts" to your INSTALLED_APPS setting like this::`
```
    INSTALLED_APPS = [
        'django.contrib.contenttypes',
	    'django.contrib.sessions',
	    'django.contrib.messages',
	    'django.contrib.staticfiles',
	    'ClassicUserAccounts',
	    'sorl.thumbnail',
	    'django.contrib.admin',
	    'django.contrib.auth',
	    ...
    ]
```
`2. Add "AUTH_USER_MODEL" in your settings file like this::`
```
	AUTH_USER_MODEL = 'ClassicUserAccounts.User'
```

`3. Add "Middleware" to youe MIDDLEWARE settings like this::`
```
	MIDDLEWARE = [
	   ...
	   'ClassicUserAccounts.middleware.ClassicUserAccountsMiddleWare',
	]
```

`4. Add "SITE_NAME" in your settings file like this::`
```
    SITE_NAME = 'Your site name'
```

`5. Add url in your project.urls file::`
```
	urlpatterns = [
	    path('accounts/', include('ClassicUserAccounts.urls')),
		...
	]
```
`6. Change Skin ::`
```
    Avaliable Skins:: [
        'skin-blue',
        'skin-black',
        'skin-red',
        'skin-yellow',
        'skin-purple',
        'skin-green',
        'skin-blue-light',
        'skin-black-light',
        'skin-red-light',
        'skin-yellow-light',
        'skin-purple-light',
        'skin-green-light'
    ]

    You have to add "ROLE_BASED_SKIN" in your settings.py file like this::

    ROLE_BASED_SKIN = [
        {'role': 'Admin', 'skin_name': 'skin-red'},
        {'role': 'Subscriber', 'skin_name': 'skin-purple'}
    ]
```
`7. Multi theme feature added::`
```
    Add THEME_NAME in your settings file to change theme
    THEME_NAME = 'default-theme'  Required
    USER_BASED_THEME = False # Default False
    Available themes : default-theme, theme-1, theme-2, theme-3
```

`8. Run python manage.py migrate to extend django user model.`

`9. Start the development server and visit http://127.0.0.1:8000/admin/ to manage user profile.`

#### Base Template Setup
1. Create `site_base.html` file in your project templates directory. `site_base.html` have below content.
```
{% extends request.THEME_NAME|add:'classic_site_base.html' %}
{% load static %}

{% block side_menu %}
`Place your Side menu here `

<li>
    <a href="{% url 'logout' %}">
        <i class="fa fa-lock"></i> <span>Logout</span>
        <span class="pull-right-container"></span>
    </a>
</li>
{% endblock %}
```
2. `classic_site_base.html` have these blocks where you can place html content.
```
{% block title %} {% endblock %} Which is placed inside the title tag.

{% block extra_style_block %}{% endblock %} Placed in bottom of </head> tag.

{% block extra_nav_item %} {% endblock %} Placed on the top right header nav.

{% block side_menu %} {% endblock %} Side navigation menu.

{% block content %} {% endblock %} Content block which placed in body tag.

{% block extra_script_block %} {% endblock %} Placed in the bottom of </body> tag.
```
