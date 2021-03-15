from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
import sys
# sys.path.append("..")
from algorithm.detect import detect
import json
from  backend_sql  import *
import settings
import os
sqlOperation=backend_operation()
# 一般 前后端数据传递使用json的方式传递
@csrf_exempt
# 测试测试
def index(request):
    print(request.method)
    print(request.body)
    if request.method == "POST":
        print("see detial ",request.body)
        json_name=json.loads(request.body)
        print(json_name['name'])
        print("hello it running")
        # content = request.POST.get('name')
        # print("content",content)
        detect()
        data={
            'name':['cc','dd'],
            'age':[10,20]
        }
        # return HttpResponse("服务器成功接收post请求."+content)
        return HttpResponse(json.dumps(data))
    elif request.method == "GET":
        content = request.GET.get('')
        print("get see detial ",request.body)
        print("get请求")
        print("直接访问链接")
        data={
            'name':['ee','dd'],
            'age':[10,20]
        }

        return HttpResponse(json.dumps(data))
    else:
        data={
            'name':['ff','dd'],
            'age':[10,20]
        }
        print("-------------------")
        # return HttpResponse("服务器成功接收post请求."+content)
        return HttpResponse(json.dumps(data))
@csrf_exempt
# 用于用户登录确认
def login_check(request):
    print("请求方法",request.method)
    print(request.body)
    if request.method == "POST":
        print("login_check detial ",request.body)
        json_name=json.loads(request.body)
        username=json_name['name']
        password=json_name['password']
        print("---------",username)
        exist=sqlOperation.checkexist(username,password)
        if exist:
            data={
                'status':'success'
            }
        else:
            data={
                'status':'failed'
            }
        # return HttpResponse("服务器成功接收post请求."+content)
        return HttpResponse(json.dumps(data))
@csrf_exempt
# 用于用户登录确认
def register_check(request):
    print("请求方法",request.method)
    print(request.body)
    if request.method == "POST":
        print("login_check detial ",request.body)
        json_name=json.loads(request.body)
        username=json_name['name']
        password=json_name['password']
        print("---------",username)
        exist=sqlOperation.insertUsername([username,password])
        if exist:
            data={
                'status':'success'
            }
        else:
            data={
                'status':'failed'
            }
        # return HttpResponse("服务器成功接收post请求."+content)
        return HttpResponse(json.dumps(data))



@csrf_exempt
# 用于用户登录确认
def uploadImg(request):
    res={}

    image = request.FILES.get('file')
    if not all([image]):
        res['code']=10020
        res['status']='failed'
        res['imgpath']=None
    else:
        image_name = image.name
        image_path = os.path.join(settings.UPLOAD_FILE,image_name)
        f = open(image_path,'wb')
        for i in image.chunks():
            f.write(i)
        f.close()

        res['code']=200
        res['status']='success'
        res['imgpath']=image_path
        print("上传图像成功")
    #直接返回的就是json格式，省去了json转换的步骤
    return JsonResponse(res)
@csrf_exempt
# 用于用户登录确认
def userManagement(request):
    res={}

    print("请求方法",request.method)

    if request.method == "GET":
        print("login_check detial ",request.body)
        json_name=json.loads(request.body)

        print("---------",username)
        userData=sqlOperation.searchUser()
        print(result)

    return JsonResponse(res)