
//用户登录界面的设计
window.onload=function(){
    var vm = new Vue({
        el:"#userManagement",
        data:{

        },
        methods : {

            userManagement:function(){

                console.log("显示当前所有用户信息")
                var url="http://127.0.0.1:8000/blog/userManagement/"
                // 进行post 请求            
                axios.get(url,{}).then(function (response) {
                    console.log(response.data)
                    if (True){


                    }else{

                        // location.href = "https://www.runoob.com/"; //重定向成功
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                // alert("show something");
            }
        }
    })
}