from papers.models import Paper
from rest_framework import viewsets, permissions
from.serializers import PaperSerializer

# Paper Viewset
# Viewset is like RoR resources
# Allows us to create full CRUD API with default routes,
# and default methods

class PaperViewSet(viewsets.ModelViewSet):
    queryset = Paper.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PaperSerializer