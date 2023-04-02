from .serializers import BoardSerializer, ItemSerializer
from rest_framework import viewsets

from .models import Board, Item

from django.shortcuts import render

def index(request):
    return render(request, './frontend/templates/index.html')

class boardViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSerializer

    def get_queryset(self):
        return Board.objects.all().order_by('position')
    

class itemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer

    def get_queryset(self):

        board_id = self.request.query_params.get('board', None)
        if board_id is not None:
            return Item.objects.filter(board__id_board=board_id)
        
        return Item.objects.all()

