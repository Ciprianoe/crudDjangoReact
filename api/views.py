from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.

class TaskView(viewsets.ModelViewSet):
    #con esto ya sabemos que campos va a leer y puede generar todo el CRUD
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

