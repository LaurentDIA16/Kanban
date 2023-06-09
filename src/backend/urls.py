from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from api.views import boardViewSet, itemViewSet
from frontend.views import index

router = DefaultRouter()

router.register("boards", boardViewSet, basename="board")
router.register("items", itemViewSet, basename="item")

urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
