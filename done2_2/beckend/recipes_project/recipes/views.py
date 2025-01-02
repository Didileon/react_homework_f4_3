from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Recipe, Category
from .serializers import RecipeSerializer, CategorySerializer
from django.views.generic import DetailView, ListView
from .filters import RecipeFilter
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render




class RecipeList(ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_field = 'id'



class GetCategory(APIView):
    def get(self, request, id):
        p = Recipe.objects.filter(category_id=id).all()
        serializer = RecipeSerializer(p, many=True)
        return Response(serializer.data)


class CategoriesList(APIView):
    model = Category
    template_name = 'recipes/categories_detail.html'

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)




class RecipesList(ListView):
    model = Recipe
    template_name = 'recipes/recipes_list.html'



class RecipeDetail(DetailView):
    # model = Recipe
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_field = 'pk'
    template_name = 'recipes/recipe_detail.html'


class Categories(ListView):
    model = Category
    template_name = 'recipes/categories.html'

    def category_list(request):
        queryset = Category.objects.all()
        return render(request, 'recipes/categories.html', {'categories': queryset})



# class CategoriesList(DetailView):
#     model = Category
#     template_name = 'recipes/categories_detail.html'
#
#     def category_detail(request):
#         queryset = Category.objects.all()
#         return render(request, 'recipes/categories_detail.html', {'categories': queryset})




class RecipesByCategory(ListView):
    model = Recipe
    template_name = 'recipes/category_recipes.html'
    context_object_name = 'recipes'

    def get_queryset(self):
        return Recipe.objects.filter(category__slug=self.kwargs['slug']).select_related('category')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['category'] = Category.objects.get(slug=self.kwargs['slug'])
        return context





