from django.shortcuts import render
from django.contrib.auth import login as auth_login, logout as auth_logout, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from django.urls import reverse
from django.http import HttpResponseRedirect

# Create your views here.
def login(request):
    if not request.user.is_authenticated:
        if request.method == "POST":
            fm = AuthenticationForm(request=request, data=request.POST)
            if fm.is_valid():
                uname = fm.cleaned_data['username']
                password = fm.cleaned_data['password']
                user = authenticate(username=uname, password=password)
                if user is not None:
                    auth_login(request, user)
                    messages.success(request, "Logged In successfully")
                    return HttpResponseRedirect(reverse("dashboard"))
        else:
            fm = AuthenticationForm()
        return render(request, 'login.html', {'form':fm})
    else:
        return HttpResponseRedirect(reverse("dashboard"))


def logout(request):
    auth_logout(request)
    return HttpResponseRedirect(reverse("login"))















def dashboard(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("login"))
    return render(request, 'index.html')

def settings_(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("login"))
    return render(request, 'settings.html')

from django.core.files.storage import FileSystemStorage
from django.views.decorators.csrf import csrf_exempt
# @csrf_exempt
def json_upload(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("login"))
    if request.method == "POST":
        file = request.FILES["document"]
        print(file.name)
        print(file.size)
        if str(file.name).endswith(".json"):
            fs = FileSystemStorage()
            fs.save(file.name, file)
        return render(request, 'uploadJSON.html')
    return render(request, 'uploadJSON.html')



from django.conf import settings as base_setting
from glob import glob
from json import load



def json_preview(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("login"))
    # base, file_list = base_setting.MEDIA_ROOT, [str(i).replace(str(base_setting.MEDIA_ROOT)+"\\",'') for i in glob(base_setting.MEDIA_ROOT+'\\*.json')]
    # if(request.GET.get('json', False) not in file_list):
    #     return HttpResponseRedirect(reverse("non_json_preview"))
    # if(not request.GET.get('start', False)):
    #     return HttpResponseRedirect(reverse("non_json_preview"))
    # jsons = (request.GET.get('json', False))
    # json_starts = (request.GET.get('start', False))
    # with open(base+"\\"+jsons) as f:
    #     data = load(f)
    # data = data[json_starts:json_starts]
    return render(request, 'JsonPreview.html')



def non_json_preview(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("login"))
    return render(request, 'NonJsonPreview.html')


def about_me(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("login"))
    return render(request, 'AboutMe.html')


from os import remove
def select_json(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("login"))
    base, file_list = base_setting.MEDIA_ROOT, [str(i).replace(str(base_setting.MEDIA_ROOT)+"\\",'') for i in glob(base_setting.MEDIA_ROOT+'\\*.json')]
    if request.method == "POST":
        try:
            file_name = request.POST['deleting_file']
            remove(base+"\\"+file_name)
        except:
            pass
        file_list = [str(i).replace(str(base_setting.MEDIA_ROOT)+"\\",'') for i in glob(base_setting.MEDIA_ROOT+'\\*.json')]
        return render(request, 'select_json.html', {'file_list':file_list})
    print(base, file_list)
    return render(request, 'select_json.html', {'file_list':file_list})