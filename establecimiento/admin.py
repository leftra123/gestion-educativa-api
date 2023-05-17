from django.contrib import admin
from .models import Establecimiento, Persona, Docente, AsistenteEducacion

admin.site.register(Establecimiento)
admin.site.register(Persona)
admin.site.register(Docente)
admin.site.register(AsistenteEducacion)
