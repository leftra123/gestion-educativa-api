from django.contrib import admin
from .models import Establecimiento, Persona, Rol, Asignacion

admin.site.register(Establecimiento)
admin.site.register(Persona)
admin.site.register(Rol)
admin.site.register(Asignacion)
