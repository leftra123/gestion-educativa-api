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

    def get_queryset(self):
        queryset = Docente.objects.all()
        establecimiento_id = self.request.query_params.get('establecimiento', None)
        if establecimiento_id is not None:
            queryset = queryset.filter(establecimientos__id=establecimiento_id)
        return queryset



class EstablecimientoView(viewsets.ModelViewSet):
    serializer_class = EstablecimientoSerializer
    queryset = Establecimiento.objects.all()


class PersonaView(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()
