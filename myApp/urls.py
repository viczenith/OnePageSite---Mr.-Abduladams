from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name="home-page"),
    path('fetch_bitcoin_news/', fetch_bitcoin_news, name='fetch_bitcoin_news'),
    path('fetch_bitcoin_news_images/', fetch_bitcoin_news_images, name='fetch_bitcoin_news_images'),
]