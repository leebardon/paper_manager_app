from rest_framework import routers
from .api import PaperViewSet

router = routers.DefaultRouter()
router.register('api/papers', PaperViewSet, 'papers')

urlpatterns = router.urls