from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.

@api_view(['POST'])
def register_user(request):
    sterializer=RegisterSerializer(data=request.data)
    if sterializer.is_valid():
        user=sterializer.save()
        refresh=RefreshToken.for_user(user)
        return Response({
            'massage':"user created succesfully!",
            'refresh':str(refresh),
            'access':str(refresh.access_token)
        },status.HTTP_201_CREATED)
    return Response(sterializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CostumTokenObtainPairView(TokenObtainPairView):
    pass