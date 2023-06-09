# Generated by Django 4.2.1 on 2023-05-23 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('establecimiento', '0005_docente_jubilado'),
    ]

    operations = [
        migrations.AddField(
            model_name='docente',
            name='bienios_cumplidos',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='docente',
            name='jubilado',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
