var url="http://127.0.0.1:8000/blog/userManagement/";
let listitem=[];


// axios.get(url,{}).then(function (response) {
                
//     for (i in response.data){
        
//         listitem.push(i)
//         console.log(i)

//     }


// }).catch(function (error) {
//     console.log(error);
// });

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", url, false ); // false 为同步请求
xmlHttp.send( null );
console.log(xmlHttp.responseText)
var data=JSON.parse( xmlHttp.responseText );
// var data= xmlHttp.responseText
// console.log("lengtg",Object.keys(data).length)

for (let i in data){
    // console.log(i)
    listitem.push(i)
}
// axios.get(url,{}).then(response=>{
//     for (i in response.data){
        
//         listitem.push(i)
//     }
// }).catch(error=>{
//     console.log(error);
// });
// listitem=["xx","sfsd"]
console.log("显示用户",listitem)
let totalPage = Math.ceil(listitem.length / 5);
console.log("总页面",totalPage)
let currentPageData=listitem.slice(0,5);
console.log("当前页面",currentPageData)
totalPage == 0 ? 1 : totalPage;
//用户登录界面的设计

var vm = new Vue({
    el:"#userManagement",
    data:{
        listitem,
        index:'',
        currentPageData, //当前页显示内容
        currentPage:1, //当前页数 ，默认为1
        totalPage, // 统共页数，默认为1
        pageSize:5

    },
    methods : {
        
        setCurrentPageData:function() {
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            this.currentPageData = this.listitem.slice(
                begin,
                end
            );
        },
       

            //上一页
    prevPage:function() {
        console.log(this.currentPage);
        if (this.currentPage == 1) return;
        
            this.currentPage--;
            this.setCurrentPageData();
        
    },
    // 下一页
    nextPage:function() {
        console.log("next 触发")
        if (this.currentPage == this.totalPage)return ;

            this.currentPage++;
            this.setCurrentPageData();
        
    },
    deleteUser:function(index){
        // var this=this;
        this.index=5*(this.currentPage-1)+index
        console.log("----",this.index)

        var url="http://127.0.0.1:8000/blog/userDelete/?username="
        // 进行post 请求            
        //需解决动态获取button index
         axios.post(url,{'username':this.listitem[this.index]}).then(function (response) {
            // this.listitem.splice(this.listitem.indexOf(this.listitem[this.index]),1);
            // this.listitem.slice(index,index+1);
            console.log(this.listitem)
        }).catch(function (error) {
            console.log(error);
        });
        // alert("show something");
        // var xmlHttp = new XMLHttpRequest();
        // url=url+this.listitem[this.index]
        // xmlHttp.open( "POST", url, false ); // false 为同步请求
        // // {'username':this.listitem[this.index]}
        // xmlHttp.send( null );
        // console.log(xmlHttp.responseText)
        // var data=JSON.parse( xmlHttp.responseText );

    },
    modifyUser:function(){

        this.index=index+5*(this.currentPage-1)
        console.log("----",this.index)
        console.log("显示当前所有用户信息")
        var url="http://127.0.0.1:8000/blog/modifyUser/"
        // 进行post 请求            
        //需解决动态获取button index
        axios.post(url,{'username':this.listitem[this.index],'password':123456}).then(function (response) {
            
            console.log(this.listitem)
        }).catch(function (error) {
            console.log(error);
        });
        // alert("show something");
    },
}
})
