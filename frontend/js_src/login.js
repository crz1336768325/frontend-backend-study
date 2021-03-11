window.onload=function(){
    var vm = new Vue({
        el:"#loginpage",
        data:{
            username:"",
            pw:""
        },
        methods : {
            submit_user_passward:function(){

                console.log("提交用户名");
                console.log("用户名"+this.username)
                console.log(this.pw)
                var url="http://127.0.0.1:8000/blog/login/"
                // 进行post 请求            
                axios.post(url,{"name":this.username,'password':this.pw}).then(function (response) {
                    console.log(response.data['status'])
                    if (response.data['status']==="success"){
                        console.log("成功注册用户")
                        alert("成功注册用户")
                    }else{
                        console.log("注册用户失败，用户已存在")
                        alert("注册用户失败，用户已存在")
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                // alert("show something");
            }
        }
    })
}