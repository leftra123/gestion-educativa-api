from rest_framework import serializers
from .models import Establecimiento, Persona, Docente, AsistenteEducacion


class AsistenteEducacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AsistenteEducacion
        fields = "__all__"

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = "__all__"

class DocenteSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()  

    class Meta:
        model = Docente
        fields = ['id', 'rol', 'hora_subvencion', 'hora_contrato', 'fecha_inicio', 'jubilado', 'bienios_cumplidos', 'renuncia_presentada', 'fecha_salida', 'persona', 'subvencion', 'contrato', 'reemplazando', 'establecimientos'] 


class EstablecimientoSerializer(serializers.ModelSerializer):
    encargado = PersonaSerializer()

    class Meta:
        model = Establecimiento
        fields = ['id', 'rbd', 'dv', 'nombre', 'encargado']

    def create(self, validated_data):
        encargado_data = validated_data.pop('encargado')
        encargado, created = Persona.objects.get_or_create(**encargado_data)
        establecimiento = Establecimiento.objects.create(encargado=encargado, **validated_data)
        return establecimiento

    def update(self, instance, validated_data):
        encargado_data = validated_data.pop('encargado')
        encargado, created = Persona.objects.get_or_create(**encargado_data)

        instance.rbd = validated_data.get('rbd', instance.rbd)
        instance.dv = validated_data.get('dv', instance.dv)
        instance.nombre = validated_data.get('nombre', instance.nombre)
        instance.encargado = encargado
        instance.save()

        return instance
