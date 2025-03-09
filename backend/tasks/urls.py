# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import TaskViewSet

# router = DefaultRouter()
# router.register(r'tasks', TaskViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

# Create the router
router = DefaultRouter()
router.register(r'', TaskViewSet, basename='task')  # Add 'basename' to avoid errors

# Define urlpatterns
urlpatterns = [
    path('', include(router.urls)),  # This includes the DRF-generated routes
]