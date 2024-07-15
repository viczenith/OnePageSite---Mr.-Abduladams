from django.shortcuts import render
import requests
from django.http import JsonResponse
from datetime import datetime
from .models import *

# Create your views here.
def home(request):
    section_one = Section_One.objects.all()
    video_file = Video_File.objects.all()
    webinar = Webinar.objects.all()
    testimonial = Testimonial.objects.all()
    testimonial_video = Testimonial_Video.objects.all()
    crypto_course = Crypto_Course.objects.all()
    motivation_section = Motivation_section.objects.all()
    click_to_join_link_whatsApp = Click_To_Join_Link_WhatsApp.objects.all()
    click_to_join_link_telegram_channel = Click_To_Join_Link_Telegram_Channel.objects.all()
    click_to_join_link_telegram = Click_To_Join_Link_Telegram.objects.all()

    context = {
        'section_one': section_one,
        'video_file': video_file,
        'webinar': webinar,
        'testimonial': testimonial,
        'testimonial_video': testimonial_video,
        'crypto_course': crypto_course,
        'motivation_section': motivation_section,
        'click_to_join_link_whatsApp': click_to_join_link_whatsApp,
        'click_to_join_link_telegram_channel': click_to_join_link_telegram_channel,
        'click_to_join_link_telegram': click_to_join_link_telegram,
    }
    return render(request, 'index.html', context)


API_KEY = '547e165ed01c47268afcbce48b0d806c'
NEWS_API_URL = f'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey={API_KEY}'


def fetch_bitcoin_news(request):
    try:
        response = requests.get(NEWS_API_URL.format(api_key=API_KEY))
        response.raise_for_status()
        data = response.json()

        articles = []
        for article in data['articles']:
            articles.append({
                'title': article['title'],
                'description': article['description'],
                'published_at': datetime.strptime(article['publishedAt'], '%Y-%m-%dT%H:%M:%SZ').strftime('%Y-%m-%d %H:%M:%S'),
                'url': article['url']
            })

        return JsonResponse(articles, safe=False)

    except requests.RequestException as e:
        print(f"Error fetching Bitcoin news: {e}")
        return JsonResponse([], safe=False)


# API_KEY = '547e165ed01c47268afcbce48b0d806c'
# NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey={api_key}'

def fetch_bitcoin_news_images(request):
    try:
        response = requests.get(NEWS_API_URL.format(api_key=API_KEY))
        response.raise_for_status()
        data = response.json()

        articles = []
        for article in data['articles']:
            articles.append({
                'urlToImage': article['urlToImage'],
                'description': article['description'],
                'published_at': datetime.strptime(article['publishedAt'], '%Y-%m-%dT%H:%M:%SZ').strftime('%Y-%m-%d %H:%M:%S'),
                'url': article['url']
            })

        return JsonResponse(articles, safe=False)

    except requests.RequestException as e:
        print(f"Error fetching Bitcoin news: {e}")
        return JsonResponse([], safe=False)
