from django.db import models

class Alumno(models.Model):
    nombre_alumno = models.CharField(max_length=255, verbose_name="Nombre del alumno")
    fecha_nacimiento = models.DateField(verbose_name="Fecha de nacimiento")
    nombre_padre = models.CharField(max_length=255, verbose_name="Nombre del padre")
    nombre_madre = models.CharField(max_length=255, verbose_name="Nombre de la madre")
    grado = models.IntegerField(verbose_name="Grado")
    seccion = models.CharField(max_length=50, verbose_name="Sección")
    fecha_ingreso = models.DateField(verbose_name="Fecha de ingreso")

    def __str__(self):
        return self.nombre_alumno