from rest_framework import serializers, status
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_list_or_404
from .models import Alumno
from .serializers import AlumnoSerializer




class AlumnoList(generics.ListCreateAPIView):
    authentication_classes = [BasicAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer

class AlumnosPorGradoAPIView(APIView):
    authentication_classes = [BasicAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, grado):
        alumnos = get_list_or_404(Alumno, grado=grado)
        serializer = AlumnoSerializer(alumnos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
