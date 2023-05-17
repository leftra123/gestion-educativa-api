from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from establecimiento import views

router = routers.DefaultRouter()
router.register(r"establecimiento", views.EstablecimientoView, "establecimiento")
router.register(r"rol", views.RolView, "rol")
router.register(r"persona", views.PersonaView, "persona")
router.register(r"asignacion", views.AsignacionView, "asignacion")


urlpatterns = [
    path("api/", include(router.urls)),
    path('docs/', include_docs_urls(title='Gestión Educativa API')),
]
