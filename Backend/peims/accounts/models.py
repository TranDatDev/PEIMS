from django.db import models

# Create your models here.

class Customer(models.Model):
    customer_username = models.CharField(max_length=255, unique=True)
    customer_password = models.CharField(max_length=255)

    def __str__(self):
        return self.customer_username