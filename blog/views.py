from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import sys
# sys.path.append("..")
from algorithm.detect import detect
import json
from  backend_sql  import *
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
        exist=sqlOperation.insert([username,password])
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
