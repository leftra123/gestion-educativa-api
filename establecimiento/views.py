from django.shortcuts import render
from rest_framework import viewsets
from .models import Establecimiento, Rol, Persona, Asignacion
from .serializer import EstablecimientoSerializer, RolSerializer, PersonaSerializer, AsignacionSerializer

class EstablecimientoView(viewsets.ModelViewSet):
    serializer_class = EstablecimientoSerializer
    queryset = Establecimiento.objects.all()
