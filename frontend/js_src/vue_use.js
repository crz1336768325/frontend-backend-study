// new Vue({
//     el:'#example',
//     data:{ //数据
//         arr:['apple','banana','orange','pear'],
//         json:{a:'apple',b:'banana',c:'orange'}
//     },
//     methods:{
//         clickme:function(){    //方法，这里是show，不能用alert
//             console.log("vue run")
//             alert(1);
//         }
//     }
// });
window.onload=function(){
    var vm = new Vue({
        el:"#example",
        methods : {
            clickme:function(){
                console.log("get fanying")
                alert("show something");
            }
        }
    })
}