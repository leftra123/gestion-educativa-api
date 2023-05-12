from django.urls import path, include
from rest_framework import routers
from establecimiento import views

router = routers.DefaultRouter()
router.register(r"establecimiento", views.EstablecimientoView, "establecimiento")

urlpatterns = [
    path("api/v1", include(router.urls))
]
