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

class EstablecimientoSerializer(serializers.ModelSerializer):
    encargado = PersonaSerializer() 
    class Meta:
        model = Establecimiento
        fields = ['id', 'rbd', 'dv', 'nombre', 'encargado']

class DocenteSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()  
    establecimientos = serializers.SerializerMethodField()

    class Meta:
        model = Docente
        fields = ['id', 'rol', 'hora_subvencion', 'hora_contrato', 'fecha_inicio', 'jubilado', 
                  'bienios_cumplidos', 'renuncia_presentada', 'fecha_salida', 'persona', 'subvencion', 
                  'contrato', 'establecimientos']

    def get_establecimientos(self, obj):
        establecimientos = Establecimiento.objects.filter(id__in=obj.establecimientos.all())
        return EstablecimientoSerializer(establecimientos, many=True).data
