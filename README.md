# Django Classic User Accounts

[![GitHub forks](https://img.shields.io/github/forks/sumankumar72/classic-user-accounts.svg)](https://github.com/sumankumar72/classic-user-accounts/network) [![GitHub issues](https://img.shields.io/github/issues/sumankumar72/classic-user-accounts.svg)](https://github.com/sumankumar72/classic-user-accounts/issues) [![GitHub stars](https://img.shields.io/github/stars/sumankumar72/classic-user-accounts.svg)](https://github.com/sumankumar72/classic-user-accounts/stargazers) [![GitHub license](https://img.shields.io/github/license/sumankumar72/classic-user-accounts.svg)](https://github.com/sumankumar72/classic-user-accounts)[![PyPI - Downloads](https://img.shields.io/pypi/dw/django-classic-user-accounts?style=plastic)](https://github.com/sumankumar72/classic-user-accounts)[![GitHub license](https://img.shields.io/badge/Slack-%20-%23e01563.svg)](https://sumanshandilya.slack.com)

#### Latest Update
- Unique mobile number feature added (`Add CLASSIC_UNIQUE_MOBILE = True in your settings file`).
- New Matrix-Admin BT4 Theme added (`Add THEME_NAME = 'matrix-admin-v2' in your settings file`).

#### Features
- Login
- Sing up
- Email confirmation
- Extended user model
- Profile picture
- Password reset
- Account management (update account settings and change password)
- Custom `User` model support

#### Requirements
- Django 2.0 +
- Python 3.5, or 3.6

#### Quick installation


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
`8. Password Reset templates added.`

`9. Run python manage.py migrate to extend django user model.`

`10. Start the development server and visit http://127.0.0.1:8000/admin/ to manage user profile.`

`11. Available Themes.::`
```
    default-theme
    theme-1
    theme-2
    matrix-admin
    matrix-admin-v2
```

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

#### Photos

` Login Page `
![N|Solid](http://drive.google.com/uc?export=view&id=1kksCLiixQRSAixmk47-0cC1J5ZKh1BkQ)

`Signup Page`
![N|Solid](http://drive.google.com/uc?export=view&id=11v8weKPZzITR_IHeQCeBVD3XQiKRgcKv)

`Reset Password Page`
![N|Solid](http://drive.google.com/uc?export=view&id=1pdouy9cKSQ0vqx3FgMsrmue-Rf8yRtCW)

`Dashboard Page `
![N|Solid](http://drive.google.com/uc?export=view&id=1N74ZJConUqYz4tRBopYp9_FWextLmbD6)

`Django Admin Dashboard`
![N|Solid](http://drive.google.com/uc?export=view&id=1dsn4VxjHr8tQBW3KxPELjuHZx4R_y44R)

`User model table view`
![N|Solid](http://drive.google.com/uc?export=view&id=1OvG9q9siIOS7x30C4lOoOnUH_DcM7ilS)

`Django Model Edit View`
![N|Solid](http://drive.google.com/uc?export=view&id=1AyeeRYzAXISMccArxmVHweAEmqtwEJwn)

