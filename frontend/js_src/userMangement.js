
//用户登录界面的设计
window.onload=function(){
    var vm = new Vue({
        el:"#userManagement",
        data:{
            listitem:[],
            index:''
        },
        methods : {
            
            change:function(){
                var self=this;
                this.listitem=[]
                console.log("显示当前所有用户信息")
                var url="http://127.0.0.1:8000/blog/userManagement/"
                // 进行post 请求            
                axios.get(url,{}).then(function (response) {
                    
                    for (i in response.data){
                        console.log(i)
                        self.listitem.push(i)
                    }
         
                }).catch(function (error) {
                    console.log(error);
                });
                // alert("show something");
            },

            deleteUser:function(index){
                var self=this;
                self.index=index
                console.log("----",self.index)
                console.log("显示当前所有用户信息")
                var url="http://127.0.0.1:8000/blog/userDelete/"
                // 进行post 请求            
                //需解决动态获取button index
                axios.post(url,{'username':self.listitem[self.index]}).then(function (response) {
                    self.listitem.splice(self.listitem.indexOf(self.listitem[self.index]),1);
                    console.log(self.listitem)
                }).catch(function (error) {
                    console.log(error);
                });
                // alert("show something");
            },
            modifyUser:function(index){
                var self=this;
                self.index=index
                console.log("----",self.index)
                console.log("显示当前所有用户信息")
                var url="http://127.0.0.1:8000/blog/modifyUser/"
                // 进行post 请求            
                //需解决动态获取button index
                axios.post(url,{'username':self.listitem[self.index],'password':123456}).then(function (response) {
                    
                    console.log(self.listitem)
                }).catch(function (error) {
                    console.log(error);
                });
                // alert("show something");
            }
        }
    })
}