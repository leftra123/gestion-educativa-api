from django.db import models
from .choices import *


class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellido_paterno = models.CharField(max_length=100)
    apellido_materno = models.CharField(max_length=100)
    rut = models.CharField(max_length=12, unique=True)
    fecha_nacimiento = models.DateField()
    direccion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=20)
    correo = models.EmailField(unique=True)


class Establecimiento(models.Model):
    rbd = models.IntegerField(unique=True)
    dv = models.CharField(max_length=1)
    nombre = models.CharField(max_length=100)
    encargado = models.ForeignKey(Persona, on_delete=models.SET_NULL, null=True)


class Subvencion(models.Model):
    tipo = models.CharField(max_length=100, choices=TIPO_SUBVENCION_CHOICES)


class Contrato(models.Model):
    tipo = models.CharField(max_length=100, choices=TIPO_CONTRATO_CHOICES)


class Docente(models.Model):
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
    rol = models.CharField(max_length=100, choices=NOMBRE_CARGO_CHOICES)
    subvencion = models.ForeignKey(Subvencion, on_delete=models.SET_NULL, null=True)
    contrato = models.ForeignKey(Contrato, on_delete=models.SET_NULL, null=True)
    fecha_inicio = models.DateField()
    reemplazando = models.ForeignKey(
        "self", on_delete=models.SET_NULL, null=True, blank=True
    )
    jubilado = models.BooleanField()
    bienios_cumplidos = models.IntegerField()
    renuncia_presentada = models.BooleanField()
    fecha_salida = models.DateField(null=True, blank=True)
    establecimientos = models.ManyToManyField(Establecimiento, related_name="docentes")


class AsistenteEducacion(models.Model):
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
    rol = models.CharField(max_length=100, choices=CARGOS_ASISTENTES_CHOICES)
    establecimientos = models.ManyToManyField(
        Establecimiento, related_name="asistentes"
    )
