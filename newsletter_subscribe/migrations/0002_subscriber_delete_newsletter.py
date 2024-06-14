# Generated by Django 5.0.2 on 2024-04-16 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter_subscribe', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscriber',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('newsletters', models.JSONField()),
            ],
        ),
        migrations.DeleteModel(
            name='Newsletter',
        ),
    ]