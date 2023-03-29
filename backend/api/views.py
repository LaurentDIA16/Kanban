from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import BoardSerializer, ItemSerializer

from .models import Board, Item

from rest_framework import viewsets



class boardViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSerializer

    def get_queryset(self):
        return Board.objects.all()
    
class itemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer

    def get_queryset(self):
        return Item.objects.all()
    
    # @action(detail=True, methods=["post"])
    # def board(self, request, pk):
    #     data = self.get_object().board(request, pk)

    #     return Response(data)


# class boardViewSet(viewsets.ModelViewSet):
    
#     queryset = Board.objects.all()
#     serializer_class = BoardSerializer

# @api_view(['GET'])
# def get_data(request):
#     boards = Board.objects.all().prefetch_related('items')
#     serializer = BoardSerializer(boards, many=True)
#     return Response(serializer.data)

# class boardViewSet(viewsets.ViewSet):
    
#     def get_data(self, request):
#         boards = Board.objects.all().prefetch_related('items')
#         serializer = BoardSerializer(boards, many=True)
#         return Response(serializer.data)

# @api_view(['GET'])
# def apiOverview(request):

#     api_urls = {
#         'boards' : '/boards/',
#         'list board' : '/board-list/',
#         'Detail View Board' : '/board-detail/<str:pk>/',
#         'Create board' : '/board-create/',
#         'Update board' : '/board-update/<str:pk>',
#         'Delete board' : '/board-delete/<str:pk>',
#         'list item' : '/item-list/',
#         'Detail View Item' : '/item-detail/<str:pk>/',
#         'Create item' : '/item-create/',
#         'Update item' : '/item-update/<str:pk>',
#         'Delete item' : '/item-delete/<str:pk>',
#     }

#     return Response(api_urls)

# @api_view(['GET'])
# def boardList(request):
#     boards = Board.objects.all()
#     serializer = BoardSerializer(boards, many=True)
#     return Response(serializer.data)

# # Views for Board

# @api_view(['GET'])
# def boardDetail(request, pk):
#     board = Board.objects.get(id_board=pk)
#     serializer = BoardSerializer(board, many=False)
#     return Response(serializer.data)

# @api_view(['POST'])
# def boardCreate(request):
#     serializer = BoardSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['PUT'])
# def boardUpdate(request, pk):
#     board = Board.objects.get(id_board=pk)
#     serializer = BoardSerializer(instance=board, data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['DELETE'])
# def boardDelete(request, pk):
#     board = Board.objects.get(id_board=pk)
#     board.delete()

#     return Response("Board successfully deleted!")


# # Views for Item

# @api_view(['GET'])
# def itemList(request):
#     items = Item.objects.all()
#     serializer = ItemSerializer(items, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def itemDetail(request, pk):
#     item = Item.objects.get(id_item=pk)
#     serializer = ItemSerializer(item, many=False)
#     return Response(serializer.data)

# @api_view(['POST'])
# def itemCreate(request):
#     serializer = ItemSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['PUT'])
# def itemUpdate(request, pk):
#     item = Item.objects.get(id_item=pk)
#     serializer = ItemSerializer(instance=item, data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['DELETE'])
# def itemDelete(request, pk):
#     item = Item.objects.get(id_item=pk)
#     item.delete()

#     return Response("Item successfully deleted!")
