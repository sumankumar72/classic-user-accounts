from ClassicUserAccounts.models import TimeZone, Country
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