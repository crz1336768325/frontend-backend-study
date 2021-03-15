
//用户登录界面的设计
window.onload=function(){
    var vm = new Vue({
        el:"#upload",
        data:{
            showUploadImg: '',
        },
        methods : {
            addimg:function () {
                console.log("click 事件触发了")
                var data = new FormData();
                var self=this  // 如果内部需要使用外部数据，需要提前指定this
                var image =document.getElementById('uploadImage').files[0];
                console.log(image)
                data.append('file',image);
                console.log(data)
                url="http://127.0.0.1:8000/blog/uploadImg/"
                axios.post(url,data).then(function (response) {
                    console.log(response.data['status'])
                    if (response.data['status']==="success"){
                        console.log("成功上传图像")
                        // alert("成功上传图像")
                        console.log(response.data['imgpath'])
                        // vm.showUploadImg=response.data['imgpath']
                      
                        self.showUploadImg=response.data['imgpath']
                        console.log("显示图像")
                    }else{
                        console.log("上传图像失败")
                        alert("上传图像失败")
                    }
                }).catch(function (error) {
                    console.log("occur error")
                    console.log(error);
                });
            }



            //     var url="http://127.0.0.1:8000/blog/uploadImg/"
            //     // 进行post 请求            
            //     axios.post(url,{"name":this.username,'password':this.pw}).then(function (response) {
            //         console.log(response.data['status'])
            //         if (response.data['status']==="success"){
            //             console.log("成功登录")
            //             alert("成功登录")
            //         }else{
            //             console.log("登录失败，用户名或密码不正确")
            //             alert("登录失败，用户名或密码不正确")
            //         }
            //     }).catch(function (error) {
            //         console.log(error);
            //     });
            //     // alert("show something");
            // }
        }
    })
    var vm1 = new Vue({
        el:"#AI_algorithm",
        data:{

        },
        methods : {
            recognition:function () {
                console.log("click 事件触发了")
    
            },
            detect:function () {
                console.log("click 事件触发了")
    
            },
            segmentation:function () {
                console.log("click 事件触发了")
    
            },
            superresolution:function () {
                console.log("click 事件触发了")
    
            },
            gan:function () {
                console.log("click 事件触发了")
    
            },

        }
    })
}