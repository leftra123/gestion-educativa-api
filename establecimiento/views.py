from django.shortcuts import render
from rest_framework import viewsets
from .models import (
    Establecimiento,
    Persona,
    Docente,
    AsistenteEducacion,
)
from .serializer import (
    EstablecimientoSerializer,
    PersonaSerializer,
    DocenteSerializer,
    AsistenteEducacionSerializer,
)


class AsistenteEducacionView(viewsets.ModelViewSet):
    serializer_class = AsistenteEducacionSerializer
    queryset = AsistenteEducacion.objects.all()


class DocenteView(viewsets.ModelViewSet):
    serializer_class = DocenteSerializer
    queryset = Docente.objects.all()


class EstablecimientoView(viewsets.ModelViewSet):
    serializer_class = EstablecimientoSerializer
    queryset = Establecimiento.objects.all()


class PersonaView(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()
