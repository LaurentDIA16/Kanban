from django.urls import path
from . import views


urlpatterns = [
]


# urlpatterns = [
#     path('', views.apiOverview, name="api-overview"),
#     path('boards/', views.get_data, name='boards'),
#     path('board-list/', views.boardList, name="board-list"),
#     path('board-detail/<str:pk>/', views.boardDetail, name="board-detail"),
#     path('board-create/', views.boardCreate, name="board-create"),
#     path('board-update/<str:pk>/', views.boardUpdate, name="board-update"),
#     path('board-delete/<str:pk>/', views.boardDelete, name="board-delete"),
#     path('item-list/', views.itemList, name="item-list"),
#     path('item-detail/<str:pk>/', views.itemDetail, name="item-detail"),
#     path('item-create/', views.itemCreate, name="item-create"),
#     path('item-update/<str:pk>/', views.itemUpdate, name="item-update"),
#     path('item-delete/<str:pk>/', views.itemDelete, name="item-delete"),
# ]
