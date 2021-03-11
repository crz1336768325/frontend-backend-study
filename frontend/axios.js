

window.onload=function(){
    var oBtn=document.getElementById('post');
    var getBtn=document.getElementById('get');
   

    oBtn.onclick=function(){
        console.log("post")
        var url="http://127.0.0.1:8000/blog/"
        // 进行post 请求            
        axios.post(url,{"name":'Fred'}).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

    }
    getBtn.onclick=function(){
        console.log("get")
        var url="http://127.0.0.1:8000/blog/"
        axios.get(url).then(function (response){
            console.log(response);
            console.log("年龄",response.data.age);
            console.log("名字",response.data.name);
        }).catch(function(error){
            console.log(error);
        });
    
    }
}

function ddd(){
    console.log("111")
    dddd()
}