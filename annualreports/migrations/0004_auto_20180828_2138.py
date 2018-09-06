# Generated by Django 2.1 on 2018-08-28 16:08

import annualreports.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('annualreports', '0003_auto_20180826_1249'),
    ]

    operations = [
        migrations.AddField(
            model_name='annualreport',
            name='report5',
            field=models.FileField(blank=True, upload_to='', validators=[annualreports.models.validate_file_extension]),
        ),
        migrations.AddField(
            model_name='annualreport',
            name='reporttitle5',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
