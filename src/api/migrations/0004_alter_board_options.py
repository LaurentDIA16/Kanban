# Generated by Django 4.1.7 on 2023-03-30 06:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_rename_id_board_item_board"),
    ]

    operations = [
        migrations.AlterModelOptions(name="board", options={"ordering": ["id_board"]},),
    ]
