# Once you've set up and migrated DB, think about API
# With REST framework, first step is to create serialiser 
# to take our model instance (e.g. paper), and convert to JSON  

from rest_framework import serializers
from papers.models import Paper

class PaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paper
        fields = '__all__'
