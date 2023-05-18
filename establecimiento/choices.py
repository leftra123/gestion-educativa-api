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
CARGOS_ASISTENTES_CHOICES = [
    ("APOYO ADMINISTRATIVO", "Apoyo Administrativo"),
    ("APOYO ADMINISTRATIVO UNIDAD PERSONAL", "Apoyo Administrativo Unidad Personal"),
    (
        "APOYO DE SERVICIOS MENORES E HIGIENIZACION ESPACION ,DAEM.",
        "Apoyo de Servicios Menores e Higienización Espación ,DAEM.",
    ),
    ("APOYO PIE", "Apoyo PIE"),
    ("APOYO TECNICO UTP", "Apoyo Técnico UTP"),
    ("ASISTENTE DE AULA", "Asistente de Aula"),
    ("ASISTENTE DIFERENCIAL", "Asistente Diferencial"),
    ("ASISTENTE DE PARVULOS", "Asistente de Párvulos"),
    ("ASISTENTE SOCIAL", "Asistente Social"),
    ("ASISTENTE/TÉCNICO PÁRVULOS", "Asistente/Técnico Párvulos"),
    ("ASISTENTE DE SERVICIOS MENORES", "Auxiliar de Servicios Menores"),
    ("ASISTENTE DE SERVICIOS MENORES", "Auxiliar Srvicios Menores"),
    ("ASISTENTE DE SERVICIOS MENORES", "Auxiliar Servicios Menores"),
    ("AUXILIAR DE ASEO", "Auxiliar de Aseo"),
    ("AUXILIAR DE SERVICIOS MENORES", "Auxiliar de Servicios Menores"),
    ("AYUDANTE DE AULA", "Ayudante de Aula"),
    ("BIBLIOTECARIO/A ENCARGADO/A CRA", "Bibliotecario/a Encargado/a CRA"),
    ("BIBLIOTECARISA (REEMPLAZO)", "Bibliotecarisa (Reemplazo)"),
    (
        "COORDINADOR TECNICO INTERCULTURAL DE LOS ESTABLECIMIENTOS EDUCACIONALES DE LA COMUNA",
        "Coordinador Técnico Intercultural de los Establecimientos Educacionales de la Comuna",
    ),
    ("CUIDADO DEL ESTABLECIMIENTO", "Cuidado del Establecimiento"),
    ("DOCENTE TP", "Docente TP"),
    ("EDUCADOR(A) TRADICIONAL", "Educador(a) Tradicional"),
    ("ENCARGADO DE MANTENCIÓN", "Encargado/a de Mantención"),
    ("ENCARGADO DE PROYECTO", "Encargado de Proyecto"),
    ("FONOAUDIOLOGA", "Fonoaudióloga"),
    ("FONOAUDIOLOGA (REEMPLAZANTE)", "Fonoaudióloga (Reemplazante)"),
    ("FONOAUDIÓLOGO/A", "Fonoaudiólogo/a"),
    ("INSPECTOR/A", "Inspector/a"),
    ("INSPECTORA", "Inspectora"),
    ("JEFE UAGR (s)", "Jefe UAGR (s)"),
    ("MONITOR", "Monitor"),
    ("MONITOR/A TALLER", "Monitor/a Taller"),
    ("MONITORA BAILE", "Monitora Baile"),
    ("MONITOR DE DEPORTES", "Monitor de Deportes"),
    ("OTRA", "Otra"),
    (
        "PROFESIONAL APOYO ALUMNOS PRIORITARIOS SEP",
        "Profesional Apoyo Alumnos Prioritarios SEP",
    ),
    (
        "PSICOLOGA PROGRAMA INTEGRACIÓN ESCOLAR",
        "Psicóloga Programa Integración Escolar",
    ),
    ("PSICOLOGO REEMPLAZO", "Psicólogo Reemplazo"),
    ("PSICOLOGO/A", "Psicólogo/a"),
    ("PSICOPEDAGOGO/A", "Psicopedagogo/a"),
    ("SECRETARIO/A", "Secretario/a"),
    ("SIN DATO / AGREGAR", "Sin Dato / Agregar"),
    ("SOPORTE INFORMÁTICO", "Soporte Informático"),
    ("TERAPIA OCUPACIONAL", "Terapia Ocupacional"),
    ("TECNICO JUNJI", "Técnico JUNJI"),
    ("AUXILIAR SERVICIOS MENORES", "Auxiliar Servicios Menores"),
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

TIPO_CONTRATO_CHOICES = [
    ("TITULAR", "Titular"),
    ("A CONTRATA", "A Contrata"),
]
