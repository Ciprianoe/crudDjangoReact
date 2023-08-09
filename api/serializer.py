from rest_framework import serializers
from .models import Task

#con esto serializamo para convertir el obj-py a un json#
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields=('id','title','description','done')
        fields='__all__'
