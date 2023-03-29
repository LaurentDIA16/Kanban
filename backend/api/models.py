from django.db import models

# Create your models here.
class Board(models.Model):
    id_board = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, null =False, blank=False)
    position = models.IntegerField(null=False)

    def __str__(self):
        return self.title

class Item(models.Model):
    id_item = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null =False, blank=False)
    position = models.IntegerField(null=False)
    id_board = models.ForeignKey("board", models.DO_NOTHING, db_column='id_board')

    def __str__(self):
        return self.title
