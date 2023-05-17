NORMAL = "SN"
PREFERENCIAL = "SEP"
INTEGRACION = "PIE"

TIPO_SUBVENCION_CHOICES = [
    (NORMAL, "Subvención Normal"),
    (PREFERENCIAL, "Subvención Escolar Preferencial"),
    (INTEGRACION, "Programa Integración Escolar"),
]

NOMBRE_CARGO_CHOICES = [
    ("daem (s)", "DAEM (s)"),
    ("director daem", "Director DAEM"),
    ("director(a)", "Director(a)"),
    ("docencia directiva", "Docencia directiva"),
    ("docente", "Docente"),
    ("docente (reemplazo)", "Docente (reemplazo)"),
    ("docente aula", "Docente de aula"),
    ("docente aula (reemplazo)", "Docente de aula (reemplazo)"),
    ("docente educación diferencial", "Docente Educación Diferencial"),
    ("docente educación especial", "Docente Educación Especial"),
    ("docente pie (reemplazo)", "Docente PIE (reemplazo)"),
    ("docente proyecto pie", "Docente Proyecto PIE"),
    ("educador(a) tradicional", "Educador(a) tradicional"),
    ("educador tradicional lengua indigena", "Educador tradicional lengua indígena"),
    ("educadora de parvulos (reemplazo)", "Educadora de párvulos (reemplazo)"),
    ("educadora tradicional lengua indigena", "Educadora tradicional lengua indígena"),
    ("encargado estadistica", "Encargado Estadística"),
    ("encargado extraescolar", "Encargado extraescolar"),
    ("encargado transporte", "Encargado transporte"),
    ("inspector general", "Inspector general"),
    ("jefe unidad técnico-pedagógica", "Jefe unidad técnico-pedagógica"),
    ("otra en el establecimiento", "Otra en el establecimiento"),
    ("otra fuera del establecimiento", "Otra fuera del establecimiento"),
    ("orientador", "Orientador"),
    ("planta directiva", "Planta directiva"),
    (
        "profesor(a) encargado(a) del establecimiento",
        "Profesor(a) encargado(a) del establecimiento",
    ),
    ("reemplazante", "Reemplazante"),
    ("técnico-pedagógica", "Técnico-pedagógica"),
    ("UTP comunal", "UTP comunal"),
]

CALIDAD_NOMBRAMIENTO_CHOICES = [
    ("titular", "Titular"),
    ("contrata", "Contrata"),
    ("reemplazo", "Reemplazo"),
    ("jubilado", "Jubilado"),
    ("cese", "Cese"),
    ("renuncia", "Renuncia"),
    ("termino contrato", "Término contrato"),
]

TRAMO_CPEIP_CHOICES = [
    ("acceso", "Acceso"),
    ("inicial", "Inicial"),
    ("temprano", "Temprano"),
    ("avanzado", "Avanzado"),
    ("experto 1", "Experto 1"),
    ("experto 2", "Experto 2"),
]

TIPO_CONTRATO_CHOICES = []
