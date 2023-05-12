from django.db import models

class Rol(models.Model):
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre


class Establecimiento(models.Model):
    nombre = models.CharField(max_length=255)
    rbd = models.CharField(max_length=4, unique=True)
    encargado = models.OneToOneField('Asignacion', on_delete=models.SET_NULL, null=True, blank=True, related_name='establecimiento_encargado')

    def save(self, *args, **kwargs):
        if self.encargado is not None and self.encargado.rol.nombre != 'docente de aula':
            raise ValueError('El encargado debe tener el rol de docente de aula')
        super().save(*args, **kwargs)    

    def __str__(self):
        return self.nombre


class Persona(models.Model):
    nombre = models.CharField(max_length=255)
    fecha_nacimiento = models.DateField()
    correo_electronico = models.EmailField(unique=True)

    def __str__(self):
        return self.nombre


class Asignacion(models.Model):
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
    establecimiento = models.ForeignKey(Establecimiento, on_delete=models.CASCADE)
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.persona.nombre} - {self.rol.nombre} en {self.establecimiento.nombre}"
