=====
Django Classic User Accounts
=====


Detailed documentation is in the "docs" directory.

Quick 
-----------

1. Add "ClassicUserAccounts" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'django.contrib.contenttypes',
	    'django.contrib.sessions',
	    'django.contrib.messages',
	    'django.contrib.staticfiles',
	    'ClassicUserAccounts',
	    'django.contrib.admin',
	    'django.contrib.auth',
    ]

2. Add "AUTH_USER_MODEL" in your settings file like this::
	AUTH_USER_MODEL = 'ClassicUserAccounts.User'

3. Add "Middleware" to youe MIDDLEWARE settings like this::
	MIDDLEWARE = [
	   ...
	   'ClassicUserAccounts.middleware.ClassicUserAccountsMiddleWare',
	]

4. Add "SITE_NAME" in your settings file like this::
	SITE_NAME = 'Your site name'

5. Add url in your project.urls file::
	urlpatterns = [
		...
		path('accounts/', include('ClassicUserAccounts.urls')),
	]
6. Change Skin ::
    Avaliable Skins:: ['skin-blue', 'skin-black', 'skin-red', 'skin-yellow', 'skin-purple', 'skin-green', 'skin-blue-light',
    'skin-black-light', 'skin-red-light', 'skin-yellow-light', 'skin-purple-light', 'skin-green-light']
    You have add "ROLE_BASED_SKIN" in your settings file like this::
    ROLE_BASED_SKIN = [
        {'role': 'Admin', 'skin_name': 'skin-red'},
        {'role': 'Subscriber', 'skin_name': 'skin-purple'}
    ]
7. Multi theme feature added.::
    Add THEME_NAME in your settings file to change theme
    Available themes : default-theme, theme-1, theme-2, theme-3

8. Run `python manage.py migrate` to create the polls models.

9. Start the development server and visit http://127.0.0.1:8000/admin/
   to manage user profile (you'll need the Admin app enabled).
