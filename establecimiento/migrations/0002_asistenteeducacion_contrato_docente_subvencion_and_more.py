# Generated by Django 4.2.1 on 2023-05-17 19:20

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('establecimiento', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AsistenteEducacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rol', models.CharField(choices=[('APOYO ADMINISTRATIVO', 'Apoyo Administrativo'), ('APOYO ADMINISTRATIVO UNIDAD PERSONAL', 'Apoyo Administrativo Unidad Personal'), ('APOYO DE SERVICIOS MENORES E HIGIENIZACION ESPACION ,DAEM.', 'Apoyo de Servicios Menores e Higienización Espación ,DAEM.'), ('APOYO PIE', 'Apoyo PIE'), ('APOYO TECNICO UTP', 'Apoyo Técnico UTP'), ('ASISTENTE DE AULA', 'Asistente de Aula'), ('ASISTENTE DIFERENCIAL', 'Asistente Diferencial'), ('ASISTENTE DE PARVULOS', 'Asistente de Párvulos'), ('ASISTENTE SOCIAL', 'Asistente Social'), ('ASISTENTE/TÉCNICO PÁRVULOS', 'Asistente/Técnico Párvulos'), ('ASISTENTE DE SERVICIOS MENORES', 'Auxiliar de Servicios Menores'), ('ASISTENTE DE SERVICIOS MENORES', 'Auxiliar Srvicios Menores'), ('ASISTENTE DE SERVICIOS MENORES', 'Auxiliar Servicios Menores'), ('AUXILIAR DE ASEO', 'Auxiliar de Aseo'), ('AUXILIAR DE SERVICIOS MENORES', 'Auxiliar de Servicios Menores'), ('AYUDANTE DE AULA', 'Ayudante de Aula'), ('BIBLIOTECARIO/A ENCARGADO/A CRA', 'Bibliotecario/a Encargado/a CRA'), ('BIBLIOTECARISA (REEMPLAZO)', 'Bibliotecarisa (Reemplazo)'), ('COORDINADOR TECNICO INTERCULTURAL DE LOS ESTABLECIMIENTOS EDUCACIONALES DE LA COMUNA', 'Coordinador Técnico Intercultural de los Establecimientos Educacionales de la Comuna'), ('CUIDADO DEL ESTABLECIMIENTO', 'Cuidado del Establecimiento'), ('DOCENTE TP', 'Docente TP'), ('EDUCADOR(A) TRADICIONAL', 'Educador(a) Tradicional'), ('ENCARGADO DE MANTENCIÓN', 'Encargado/a de Mantención'), ('ENCARGADO DE PROYECTO', 'Encargado de Proyecto'), ('FONOAUDIOLOGA', 'Fonoaudióloga'), ('FONOAUDIOLOGA (REEMPLAZANTE)', 'Fonoaudióloga (Reemplazante)'), ('FONOAUDIÓLOGO/A', 'Fonoaudiólogo/a'), ('INSPECTOR/A', 'Inspector/a'), ('INSPECTORA', 'Inspectora'), ('JEFE UAGR (s)', 'Jefe UAGR (s)'), ('MONITOR', 'Monitor'), ('MONITOR/A TALLER', 'Monitor/a Taller'), ('MONITORA BAILE', 'Monitora Baile'), ('MONITOR DE DEPORTES', 'Monitor de Deportes'), ('OTRA', 'Otra'), ('PROFESIONAL APOYO ALUMNOS PRIORITARIOS SEP', 'Profesional Apoyo Alumnos Prioritarios SEP'), ('PSICOLOGA PROGRAMA INTEGRACIÓN ESCOLAR', 'Psicóloga Programa Integración Escolar'), ('PSICOLOGO REEMPLAZO', 'Psicólogo Reemplazo'), ('PSICOLOGO/A', 'Psicólogo/a'), ('PSICOPEDAGOGO/A', 'Psicopedagogo/a'), ('SECRETARIO/A', 'Secretario/a'), ('SIN DATO / AGREGAR', 'Sin Dato / Agregar'), ('SOPORTE INFORMÁTICO', 'Soporte Informático'), ('TERAPIA OCUPACIONAL', 'Terapia Ocupacional'), ('TECNICO JUNJI', 'Técnico JUNJI'), ('AUXILIAR SERVICIOS MENORES', 'Auxiliar Servicios Menores')], max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Contrato',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(choices=[('TITULAR', 'Titular'), ('A CONTRATA', 'A Contrata')], max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Docente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rol', models.CharField(choices=[('daem (s)', 'DAEM (s)'), ('director daem', 'Director DAEM'), ('director(a)', 'Director(a)'), ('docencia directiva', 'Docencia directiva'), ('docente', 'Docente'), ('docente (reemplazo)', 'Docente (reemplazo)'), ('docente aula', 'Docente de aula'), ('docente aula (reemplazo)', 'Docente de aula (reemplazo)'), ('docente educación diferencial', 'Docente Educación Diferencial'), ('docente educación especial', 'Docente Educación Especial'), ('docente pie (reemplazo)', 'Docente PIE (reemplazo)'), ('docente proyecto pie', 'Docente Proyecto PIE'), ('educador(a) tradicional', 'Educador(a) tradicional'), ('educador tradicional lengua indigena', 'Educador tradicional lengua indígena'), ('educadora de parvulos (reemplazo)', 'Educadora de párvulos (reemplazo)'), ('educadora tradicional lengua indigena', 'Educadora tradicional lengua indígena'), ('encargado estadistica', 'Encargado Estadística'), ('encargado extraescolar', 'Encargado extraescolar'), ('encargado transporte', 'Encargado transporte'), ('inspector general', 'Inspector general'), ('jefe unidad técnico-pedagógica', 'Jefe unidad técnico-pedagógica'), ('otra en el establecimiento', 'Otra en el establecimiento'), ('otra fuera del establecimiento', 'Otra fuera del establecimiento'), ('orientador', 'Orientador'), ('planta directiva', 'Planta directiva'), ('profesor(a) encargado(a) del establecimiento', 'Profesor(a) encargado(a) del establecimiento'), ('reemplazante', 'Reemplazante'), ('técnico-pedagógica', 'Técnico-pedagógica'), ('UTP comunal', 'UTP comunal')], max_length=100)),
                ('hora_subvencion', models.IntegerField(blank=True, null=True)),
                ('hora_contrato', models.IntegerField(blank=True, null=True)),
                ('fecha_inicio', models.DateField()),
                ('jubilado', models.BooleanField()),
                ('bienios_cumplidos', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(15)])),
                ('renuncia_presentada', models.BooleanField()),
                ('fecha_salida', models.DateField(blank=True, null=True)),
                ('contrato', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='establecimiento.contrato')),
            ],
        ),
        migrations.CreateModel(
            name='Subvencion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(choices=[('SN', 'Subvención Normal'), ('SEP', 'Subvención Escolar Preferencial'), ('PIE', 'Programa Integración Escolar')], max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='persona',
            name='correo_electronico',
        ),
        migrations.RemoveField(
            model_name='persona',
            name='establecimiento',
        ),
        migrations.RemoveField(
            model_name='persona',
            name='rol',
        ),
        migrations.AddField(
            model_name='establecimiento',
            name='dv',
            field=models.CharField(default=django.utils.timezone.now, max_length=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='persona',
            name='apellido_materno',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='persona',
            name='apellido_paterno',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='persona',
            name='correo',
            field=models.EmailField(blank=True, max_length=45, null=True),
        ),
        migrations.AddField(
            model_name='persona',
            name='direccion',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='persona',
            name='rut',
            field=models.CharField(default=django.utils.timezone.now, max_length=12, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='persona',
            name='telefono',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='establecimiento',
            name='encargado',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='establecimiento.persona'),
        ),
        migrations.AlterField(
            model_name='establecimiento',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='establecimiento',
            name='rbd',
            field=models.IntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='persona',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
        migrations.DeleteModel(
            name='Rol',
        ),
        migrations.AddField(
            model_name='docente',
            name='establecimientos',
            field=models.ManyToManyField(related_name='docentes', to='establecimiento.establecimiento'),
        ),
        migrations.AddField(
            model_name='docente',
            name='persona',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='establecimiento.persona'),
        ),
        migrations.AddField(
            model_name='docente',
            name='reemplazando',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='establecimiento.docente'),
        ),
        migrations.AddField(
            model_name='docente',
            name='subvencion',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='establecimiento.subvencion'),
        ),
        migrations.AddField(
            model_name='asistenteeducacion',
            name='establecimientos',
            field=models.ManyToManyField(related_name='asistentes', to='establecimiento.establecimiento'),
        ),
        migrations.AddField(
            model_name='asistenteeducacion',
            name='persona',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='establecimiento.persona'),
        ),
    ]
