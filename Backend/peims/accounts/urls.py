# urls.py
from .views import CustomerViewset, LoginView, RegisterView, MainView, CustomerDeleteView
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register('customer', CustomerViewset, basename='customer')

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('main/', MainView.as_view(), name='main'),
    path('customer/delete', CustomerDeleteView.as_view(), name='CustomerDelete'),
]