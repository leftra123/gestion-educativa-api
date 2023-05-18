from django.contrib import admin
from .models import Establecimiento, Persona, Docente, AsistenteEducacion, Subvencion, Contrato

admin.site.register(Establecimiento)
admin.site.register(Persona)
admin.site.register(Docente)
admin.site.register(AsistenteEducacion)
admin.site.register(Subvencion)
admin.site.register(Contrato)
