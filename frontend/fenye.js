
// let productList = [];
// for (let i = 0; i < 99; i++) {
//     console.log("execute")
//     productList.push({
//         name: "第" + i + "瓶奶酪",
//         count: Math.random() * 100
//     });
//     // console.log("productList",productList)
// }
// export default {
//     name : "wrap",

//     data() {
//         return {
//             productList, //所有数据
//             totalPage: 1, // 统共页数，默认为1
//             currentPage: 1, //当前页数 ，默认为1
//             pageSize: 10, // 每页显示数量
//             currentPageData: [] //当前页显示内容
//         };
//     },
//     created(){
//         console.log("created begin")
//     },
//     mounted() {
//         // 计算一共有几页
//         this.totalPage = Math.ceil(this.productList.length / this.pageSize);
//         // 计算得0时设置为1
//         this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
//         this.setCurrentPageData();
//     },
//     methods: {
//         // 设置当前页面数据，对数组操作的截取规则为[0~10],[10~20]...,
//        setCurrentPageData() {
//             console.log("CURRENT page 触发")
//             let begin = (this.currentPage - 1) * this.pageSize;
//             let end = this.currentPage * this.pageSize;
//             this.currentPageData = this.productList.slice(
//                 begin,
//                 end
//             );
//         },
//         //上一页
//         prevPage() {
//             console.log("prev page 触发")
//             console.log(this.currentPage);
//             if (this.currentPage == 1) return;
         
//              this.currentPage--;
//              this.setCurrentPageData();
            
//         },
//         // 下一页
//         nextPage() {
//             console.log("next page 触发")
//             if (this.currentPage == this.totalPage)return ;
 
//              this.currentPage++;
//              this.setCurrentPageData();
            
//         }
//     }
// };


let productList = [];
for (let i = 0; i < 99; i++) {
    productList.push({
        name: "第" + i + "瓶奶酪",
        count: Math.random() * 100
    });
}
console.log(productList);
// export default {
// window.onload=function(){
    var vm = new Vue({
        el:"#warp",

    data: {
            productList, //所有数据
            totalPage: 1, // 统共页数，默认为1
            currentPage: 1, //当前页数 ，默认为1
            C: 10, // 每页显示数量
            currentPageData: [1,2,3] //当前页显示内容
            

    },
    mounted() {
        // 计算一共有几页
        this.totalPage = Math.ceil(this.productList.length / this.pageSize);
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
        this.setCurrentPageData();
    },
    methods: {
        // 设置当前页面数据，对数组操作的截取规则为[0~10],[10~20]...,
       setCurrentPageData:function() {
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            this.currentPageData = this.productList.slice(
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
            
            }
        }
    })
    console.log(vm);
// }