window.onload=function(){
    var oBtn=document.getElementById('post');
    var getBtn=document.getElementById('get');
    var xhr = new XMLHttpRequest();
        var xmlHttp;
        function createXMLHttpRequest(){
            if(window.ActiveXObject)
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            else if(window.XMLHttpRequest)
            xmlHttp = new XMLHttpRequest();
            }

        oBtn.onclick=function(){
            createXMLHttpRequest();
            var url="http://127.0.0.1:8000/blog/"
            xmlHttp.open('POST',url,true);
            xmlHttp.onreadystatechange = function(){
                if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                    alert('POST已经连接'+xmlHttp.responseText)
                }
            }
            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); //POST发送必须加请求头
            name="csdw"
            xmlHttp.send('name='+name);
    }
        getBtn.onclick=function(){
            createXMLHttpRequest();
            var url="http://127.0.0.1:8000/blog/"
            xmlHttp.open('GET',url,true);
            xmlHttp.onreadystatechange = function(){
                if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                        console.log("get 连接");
                        console.log(eval(xmlHttp.responseText));
                    }
                    else{
                        console.log(xmlHttp.status)
                        console.log(xmlHttp.readyState)
                        console.log("get 未连接")
                        console.log(eval(xmlHttp.responseText));
                    }
            
            }
            xmlHttp.send(null);
            xmlHttp.onload=function(){
                console.log("加载json");
                var books = eval(xmlHttp.responseText);
                console.log(books);
            }
    }
}
function dddd(){
    console.log("222")
}