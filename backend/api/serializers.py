from rest_framework import serializers
from .models import Board, Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id_item', 'title', 'position')

class BoardSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)

    class Meta:
        model = Board
        fields = ('id_board', 'title', 'position', 'items')

