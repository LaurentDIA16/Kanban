# Generated by Django 4.1.7 on 2023-03-31 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0005_alter_board_options"),
    ]

    operations = [
        migrations.AlterField(
            model_name="board", name="title", field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name="item", name="title", field=models.CharField(max_length=40),
        ),
    ]
