from django.db import models

# Create your models here.
class Board(models.Model):
    id_board = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, null =False, blank=False)
    position = models.IntegerField(null=False)

    class Meta:
        ordering = ['position']

    def __str__(self):
        # return self.title
        return str(self.id_board)

class Item(models.Model):
    id_item = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null =False, blank=False)
    position = models.IntegerField(null=False)
    board = models.ForeignKey(Board, on_delete=models.DO_NOTHING, related_name='items')

    def __str__(self):
        return self.title
