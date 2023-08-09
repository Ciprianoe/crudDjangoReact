from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from api import views
from . import views


#method api version 
router = routers.DefaultRouter()
router.register(r'tasks',views.TaskView, 'tasks')

urlpatterns = [
    path('api/v1/',include(router.urls)),
    path('docs/',include_docs_urls(title='Tasks API'))
]

#todo este code genera las rutas del api get,post,put,delete