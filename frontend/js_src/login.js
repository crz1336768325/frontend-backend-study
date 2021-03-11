window.onload=function(){
    var vm = new Vue({
        el:"#loginpage",
        data:{
            name:"1",
            passward:"xx",
        },
        methods : {
            submitname:function(){
                console.log("提交用户名");
                
                // alert("show something");
            },
            submitpassward:function(){
                console.log("提交密码");
                // alert("show something");
            }
        }
    })
}