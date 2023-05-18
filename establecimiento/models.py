from django.db import models
from .choices import *
from django.core.validators import MinValueValidator, MaxValueValidator


class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellido_paterno = models.CharField(max_length=100)
    apellido_materno = models.CharField(max_length=100)
    rut = models.CharField(max_length=12, unique=True)
    fecha_nacimiento = models.DateField()
    direccion = models.CharField(max_length=200, null=True, blank=True)
    telefono = models.CharField(max_length=20, null=True, blank=True)
    correo = models.EmailField(max_length=45, null=True, blank=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido_paterno} {self.apellido_materno}"


class Establecimiento(models.Model):
    rbd = models.IntegerField(unique=True)
    dv = models.CharField(max_length=1)
    nombre = models.CharField(max_length=100)
    encargado = models.ForeignKey(
        Persona, on_delete=models.SET_NULL, null=True, blank=True
    )

    def __str__(self):
        return f"{self.nombre}"


class Subvencion(models.Model):
    tipo = models.CharField(max_length=100, choices=TIPO_SUBVENCION_CHOICES)

    def __str__(self):
        return f"{self.tipo}"


class Contrato(models.Model):
    tipo = models.CharField(max_length=100, choices=TIPO_CONTRATO_CHOICES)

    def __str__(self):
        return f"{self.tipo}"


class Docente(models.Model):
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
    rol = models.CharField(max_length=100, choices=NOMBRE_CARGO_CHOICES)
    subvencion = models.ForeignKey(Subvencion, on_delete=models.SET_NULL, null=True)
    hora_subvencion = models.IntegerField(null=True, blank=True)
    contrato = models.ForeignKey(Contrato, on_delete=models.SET_NULL, null=True)
    hora_contrato = models.IntegerField(null=True, blank=True)
    fecha_inicio = models.DateField()
    reemplazando = models.ForeignKey(
        "self", on_delete=models.SET_NULL, null=True, blank=True
    )
    jubilado = models.BooleanField()
    bienios_cumplidos = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(15)])
    renuncia_presentada = models.BooleanField()
    fecha_salida = models.DateField(null=True, blank=True)
    establecimientos = models.ManyToManyField(Establecimiento, related_name="docentes")

    def __str__(self):
        return f"{self.persona.nombre} {self.persona.apellido_paterno} {self.persona.apellido_materno}"


class AsistenteEducacion(models.Model):
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
    rol = models.CharField(max_length=100, choices=CARGOS_ASISTENTES_CHOICES)
    establecimientos = models.ManyToManyField(
        Establecimiento, related_name="asistentes"
    )

    def __str__(self):
        return f"{self.persona.nombre} {self.persona.apellido_paterno} {self.persona.apellido_materno}"
