from django.shortcuts import render

# This is where we point to index.html in templates

def index(request):
    return render(request, 'frontend/index.html')
