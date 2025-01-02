"""recipes_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from core.views import index

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from recipes.views import RecipeList, RecipeDetail, GetCategory, RecipesList, CategoriesList, RecipesByCategory, Categories



schema_view = get_schema_view(
   openapi.Info(
       title="My Recipe API",
       default_version='v1',
       description="API for managing recipes",
       terms_of_service="https://www.google.com/policies/terms/",
       contact=openapi.Contact(email="contact@myrecipeapi.local"),
       license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [

    path('admin/', admin.site.urls),
    # path('', include('core.urls')),
    path("", index, name="index"),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/recipes/', RecipeList.as_view(), name='recipe-list'),
    path('api/recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'),
    path('recipes/recipes_list/', RecipesList.as_view(), name='recipes_list'),
    # path('recipes/categories/', Categories.as_view(), name='categories'),
    path('recipes/categories/', CategoriesList.as_view(), name='categories-list'),
    # path('api/categories/', Categories.as_view(), name='categories'),
    # path('recipes/categories/<int:pk>/', CategoriesList.as_view(), name='categories_detail'),
    path('recipes/categories_detail/', CategoriesList.as_view(), name='categories_detail'),
    path('api/categories/<int:id>/', GetCategory.as_view()),
    # path('recipes/categories/<slug:slug>/', GetCategory.as_view()),
    path('category/<slug:slug>/', RecipesByCategory.as_view(), name='category-detail'),

]
