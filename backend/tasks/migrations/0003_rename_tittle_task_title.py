# Generated by Django 5.1.6 on 2025-03-02 21:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_auto_20250303_0314'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='tittle',
            new_name='title',
        ),
    ]
