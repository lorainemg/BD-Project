# Generated by Django 2.1.4 on 2019-02-06 04:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0021_auto_20190206_0426'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='color',
            field=models.CharField(choices=[('1', 'Negro'), ('2', 'Blanco'), ('3', 'Mestizo')], default='2', max_length=1, verbose_name='color de piel'),
        ),
    ]
