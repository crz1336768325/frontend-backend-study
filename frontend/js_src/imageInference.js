
//用户登录界面的设计
window.onload=function(){
    var vm = new Vue({
        el:"#loginpage",
        data:{
            username:"",
            pw:""
        },
        methods : {
            uploadImage:function(){

                console.log("提交用户名");
                console.log("用户名"+this.username)
                console.log(this.pw)
                var url="http://127.0.0.1:8000/blog/login/"
                // 进行post 请求            
                axios.post(url,{"name":this.username,'password':this.pw}).then(function (response) {
                    console.log(response.data['status'])
                    if (response.data['status']==="success"){
                        console.log("成功登录")
                        alert("成功登录")
                    }else{
                        console.log("登录失败，用户名或密码不正确")
                        alert("登录失败，用户名或密码不正确")
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                // alert("show something");
            }
        }
    })
}