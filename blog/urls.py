from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login_check, name='login_check'),
    path('register/', views.register_check, name='register_check'),
    path('uploadImg/', views.uploadImg, name='uploadImg'),
    path('userManagement/', views.userManagement, name='userManagement'),
     path('userDelete/', views.userDelete, name='userDelete'),
     path('modifyUser/', views.modifyUser, name='modifyUser'),
    
    
]
