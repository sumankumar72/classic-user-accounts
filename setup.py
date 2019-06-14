import os
from setuptools import find_packages, setup

with open(os.path.join(os.path.dirname(__file__), 'README.md')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='django-classic-user-accounts',
    version='1.0.33',
    packages=find_packages(),
    include_package_data=True,
    license='BSD License',  # example license
    description='A extended user profile for Django.',
    long_description=README,
    long_description_content_type='text/markdown',
    url='http://sumanshandilya.com',
    author='Suman Kumar',
    author_email='sumankumar72@gmail.com',
    install_requires=[
        'Pillow',
        'sorl-thumbnail',
    ],
    keywords = ['django theme', 'Extend Django User Model', 'User Model',
                'theme', 'django theme', 'interface', 'Django Startup Setup'],
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Framework :: Django :: 2.1',  # replace "X.Y" as appropriate
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',  # example license
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
)
