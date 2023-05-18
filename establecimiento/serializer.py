from rest_framework import serializers
from .models import Establecimiento, Persona, Docente, AsistenteEducacion


class AsistenteEducacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AsistenteEducacion
        fields = "__all__"


class DocenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docente
        fields = "__all__"


class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = "__all__"


class EstablecimientoSerializer(serializers.ModelSerializer):
    encargado = PersonaSerializer() 
    class Meta:
        model = Establecimiento
        fields = ['id', 'rbd', 'dv', 'nombre', 'encargado']

