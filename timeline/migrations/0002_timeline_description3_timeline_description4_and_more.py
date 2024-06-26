# Generated by Django 5.0.2 on 2024-04-02 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timeline', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='timeline',
            name='Description3',
            field=models.CharField(blank=True, max_length=1500, null=True),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Description4',
            field=models.CharField(blank=True, max_length=1500, null=True),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Description5',
            field=models.CharField(blank=True, max_length=1500, null=True),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Description6',
            field=models.CharField(blank=True, max_length=1500, null=True),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Headline3',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Headline4',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Headline5',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Headline6',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Picture3',
            field=models.ImageField(blank=True, help_text='Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Picture4',
            field=models.ImageField(blank=True, help_text='Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Picture5',
            field=models.ImageField(blank=True, help_text='Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='timeline',
            name='Picture6',
            field=models.ImageField(blank=True, help_text='Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation', null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='timeline',
            name='Description2',
            field=models.CharField(blank=True, max_length=1500, null=True),
        ),
        migrations.AlterField(
            model_name='timeline',
            name='Headline2',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='timeline',
            name='Picture2',
            field=models.ImageField(blank=True, help_text='Please Remember to Remove Exif data before uploading, otherwise images might be of incorrect orientation', null=True, upload_to=''),
        ),
    ]
