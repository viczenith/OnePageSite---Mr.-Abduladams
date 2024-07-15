from django.db import models

# Create your models here.
class Section_One(models.Model):
    heading = models.CharField(max_length=255)
    text = models.CharField(max_length=100000)

class Video_File(models.Model):
    video_file = models.FileField()

class Webinar(models.Model):
    heading = models.CharField(max_length=255, null=True)
    text1 = models.CharField(max_length=10000000, null=True)
    text2 = models.CharField(max_length=10000000, null=True)
    button_link = models.URLField()

class Testimonial(models.Model):
    text = models.CharField(max_length=10000000)

class Testimonial_Video(models.Model):
    images = models.ImageField()

class Click_To_Join_Link_WhatsApp(models.Model):
    button_link = models.URLField()

class Click_To_Join_Link_Telegram_Channel(models.Model):
    text1 = models.CharField(max_length=10000000, null=True)
    text2 = models.CharField(max_length=10000000, null=True)
    button_link = models.URLField()

class Click_To_Join_Link_Telegram(models.Model):
    button_link = models.URLField()

class Crypto_Course(models.Model):
    heading = models.CharField(max_length=255)
    text = models.CharField(max_length=1000000)
    button_link = models.URLField()

class Motivation_section(models.Model):
    text = models.CharField(max_length=1000000)