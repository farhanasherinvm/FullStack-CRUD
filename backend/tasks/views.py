from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from .models import Task
from rest_framework import viewsets
from account.serializers import RegisterSerializer
# Create your views here.
class TaskViewSet(viewsets.ModelViewSet):
    queryset=Task.objects.all()
    serializer_class=RegisterSerializer
    permission_classes=[IsAuthenticated]