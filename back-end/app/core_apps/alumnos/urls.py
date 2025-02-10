from django.urls import path
from .views import *

urlpatterns = [
    path('crear-alumno', AlumnoList.as_view(), name='estudiantes-crear-listar'),
    path('consultar-alumno/<int:grado>', AlumnosPorGradoAPIView.as_view(), name='estudiantes-por-grado'),
]