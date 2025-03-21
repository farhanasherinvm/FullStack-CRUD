# from django.urls import path
# from rest_framework_simplejwt.views import TokenRefreshView
# from .views import CostumTokenObtainPairView,register_user

# from django.urls import path
# from rest_framework_simplejwt.views import TokenRefreshView
# from .views import CostumTokenObtainPairView, register_user


# app_name = 'account'

# urlpatterns = [
#     path('api/register/', register_user, name='register'),
#     path('api/token/', CostumTokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
# ]
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import CustomTokenObtainPairView, register_user

app_name = 'account'

urlpatterns = [
    path('api/register/', register_user, name='register'),
    path('api/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

# app_name = 'account'
# urlpatterns = [
#     path('api/register/', register_user,name='register'),
#     path('api/login/',CostumTokenObtainPairView.as_view(),name="token_obtain_pair"),
#     path('api/refresh/',TokenRefreshView.as_view(),name="token_refresh"),
# ]
