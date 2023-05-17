from django.shortcuts import render
from rest_framework import viewsets
from .models import Establecimiento, Rol, Persona, Asignacion
from .serializer import EstablecimientoSerializer, RolSerializer, PersonaSerializer, AsignacionSerializer

class EstablecimientoView(viewsets.ModelViewSet):
    serializer_class = EstablecimientoSerializer
    queryset = Establecimiento.objects.all()

class RolView(viewsets.ModelViewSet):
    serializer_class = RolSerializer
    queryset = Rol.objects.all()

class PersonaView(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()

class AsignacionView(viewsets.ModelViewSet):
    serializer_class = AsignacionSerializer
    queryset = Asignacion.objects.all()