from django.urls import path
from . import views
urlpatterns = [
    path('', views.login, name="login"), # Login here
    path('logout/', views.logout, name="logout"), # Logout here
    path('dashboard/', views.dashboard, name="dashboard"), # Show main map
    path('settings/', views.settings_, name="settings"), # Settings
    path('json-upload/', views.json_upload, name="json_upload"), # upload json-upload
    path('json-preview/', views.json_preview, name="json_preview"), # preview json pagination
    path('non-json-preview/', views.non_json_preview, name="non_json_preview"), # not able to preview json pagination
    path('select_json/', views.select_json, name="select_json"), # not able to preview json pagination
    path('about_me/', views.about_me, name="about_me"), # not able to preview json pagination
]
