# Generated by Django 2.1.4 on 2019-02-06 01:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0019_auto_20181201_0408'),
    ]

    operations = [
        migrations.CreateModel(
            name='AssignTurn',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('secretary', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='students.Secretary', verbose_name='secretaria')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='students.Student', verbose_name='estudiante')),
            ],
            options={
                'verbose_name': 'Turno Asignado',
                'verbose_name_plural': 'Turnos Asignados',
            },
        ),
        migrations.RemoveField(
            model_name='turn',
            name='assign',
        ),
        migrations.AddField(
            model_name='assignturn',
            name='turn',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='students.Turn', verbose_name='turno'),
        ),
    ]
