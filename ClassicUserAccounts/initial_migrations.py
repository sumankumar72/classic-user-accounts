from ClassicUserAccounts.models import TimeZone, Country, User, Address
import csv
import os


def insert_timezone(apps, schema_editor):
    file_path = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(file_path, 'miscellaneous', 'timezone.csv')
    with open(file_path) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            timezone = TimeZone(offset=row[0], abbr=row[1], zone_text=row[2], value=row[3], utc=row[4])
            timezone.save()


def insert_country(apps, schema_editor):
    file_path = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(file_path, 'miscellaneous', 'country.csv')
    with open(file_path) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            country = Country(country_code=row[0], country_name=row[1])
            country.save()


def check_address(user):
    flag = False
    if user.country:
        flag = True
    elif user.state:
        flag = True
    elif user.city:
        flag = True
    elif user.address_line2:
        flag = True
    elif user.address_line2:
        flag = True
    elif user.zip_code:
        flag = True
    return flag


def populate_address(apps, schema_editor):
    users = User.objects.all()
    for user in users:
        if check_address(user):
            address = Address(
                city=user.city,
                state=user.state,
                zip_code=user.zip_code,
                country=user.country,
                address_line1=user.address_line1,
                address_line2=user.address_line2
            )
            address.save()
            user.permanent_address = address
            user.save()