from django.db import models

class Paper(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField(max_length=200, unique=True)
    main_findings = models.CharField(max_length=1000, blank=True)
    notes = models.CharField(max_length=1000, blank=True)
    future_work = models.CharField(max_length=1000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

