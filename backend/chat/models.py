from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Message(models.Model):
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_messages', on_delete=models.CASCADE)
    content = models.TextField()   
    timestamp = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.sender} to {self.receiver}: {self.content[:20]}"