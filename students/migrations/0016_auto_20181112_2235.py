# Generated by Django 2.1 on 2018-11-12 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0015_student_telephone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='CI',
            field=models.BigIntegerField(default=0, primary_key=True, serialize=False),
        ),
    ]