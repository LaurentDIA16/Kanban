from django.shortcuts import render
from django.conf import settings

def index(request):
    context = {
        'api_url': settings.API_URL
    }
    return render(request, 'frontend/index.html', context)
