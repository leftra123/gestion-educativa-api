from django.db import models
from .choices import *


class Persona(models.Model):
    nombre = models.CharField(max_length=100, null=True, blank=True)
    apellido_paterno = models.CharField(max_length=100, null=True, blank=True)
    apellido_materno = models.CharField(max_length=100, null=True, blank=True)
    rut = models.CharField(max_length=12, unique=True, null=True, blank=True)
    fecha_nacimiento = models.DateField(null=True, blank=True)
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
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE, blank=True, null=True)
    rol = models.CharField(max_length=100, choices=NOMBRE_CARGO_CHOICES, blank=True, null=True)
    subvencion = models.ForeignKey(Subvencion, on_delete=models.SET_NULL, null=True, blank=True)
    hora_subvencion = models.IntegerField(null=True, blank=True)
    contrato = models.ForeignKey(Contrato, on_delete=models.SET_NULL, null=True, blank=True)
    hora_contrato = models.IntegerField(null=True, blank=True)
    fecha_inicio = models.DateField(blank=True, null=True)
    calidad_nombramiento = models.CharField(
        max_length=50, choices=CALIDAD_NOMBRAMIENTO_CHOICES, null=True, blank=True
    )
    fecha_salida = models.DateField(null=True, blank=True)
    establecimientos = models.ManyToManyField(Establecimiento, related_name="docentes")
    tramo_cpeip = models.CharField(
        max_length=50, choices=TRAMO_CPEIP_CHOICES, null=True, blank=True
    )
    jubilado = models.BooleanField(default=False, blank=True, null=True)
    bienios_cumplidos = models.IntegerField(null=True, blank=True)
    renuncia_presentada = models.BooleanField(default=False, blank=True, null=True)
    def __str__(self):
        return f"{self.persona.nombre} {self.persona.apellido_paterno} {self.persona.apellido_materno}"


class Bienio(models.Model):
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE)
    n_decreto_ultimo_bienio = models.CharField(max_length=100, blank=True, null=True)
    fecha_decreto = models.DateField(blank=True, null=True)
    fecha_ultimo_bienio_reconocido = models.DateField(blank=True, null=True)
    proximo_bienio = models.DateField(blank=True, null=True)
    dias_acumulados = models.IntegerField(blank=True, null=True)
    sueldo_total_haberes = models.FloatField(blank=True, null=True)

    def __str__(self):
        return f"{self.docente.persona.nombre} {self.docente.persona.apellido_paterno} {self.docente.persona.apellido_materno}"


class Servicio(models.Model):
    fecha_ingreso_servicio = models.DateField(blank=True, null=True)
    num_decreto_nombramiento_titular = models.IntegerField(blank=True, null=True)
    fecha_decreto_nombramiento_titular = models.DateField(blank=True, null=True)
    num_decreto_nombramiento = models.IntegerField(blank=True, null=True)
    fecha_nombramiento_decreto = models.DateField(blank=True, null=True)
    fecha_nombramiento_desde = models.DateField(blank=True, null=True)
    fecha_nombramiento_hasta = models.DateField(blank=True, null=True)
    fecha_certificado_vacaciones_progresivas = models.DateField(blank=True, null=True)
    anos_cotizados_afp = models.IntegerField(blank=True, null=True)
    dias_vacaciones_progresivas = models.IntegerField(blank=True, null=True)
    dias_vacaciones_acumuladas = models.IntegerField(blank=True, null=True)
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.docente.persona.nombre} {self.docente.persona.apellido_paterno} {self.docente.persona.apellido_materno}"


class AsistenteEducacion(models.Model):
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
    rol = models.CharField(max_length=100, choices=CARGOS_ASISTENTES_CHOICES)
    establecimientos = models.ManyToManyField(
        Establecimiento, related_name="asistentes"
    )

    def __str__(self):
        return f"{self.persona.nombre} {self.persona.apellido_paterno} {self.persona.apellido_materno}"

    # necesito agregar los brp, q siginifican bono reconociemiento profesional, y los bienios cumplidos, q son los años de servicio
