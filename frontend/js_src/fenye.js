
let productList = [];
for (let i = 0; i < 99; i++) {
    productList.push({
        name: "第" + i + "瓶奶酪",
        count: Math.random() * 100
    });
}
console.log(productList);
let totalPage = Math.ceil(productList.length / 10);
let currentPageData=productList.slice(0,10);

totalPage == 0 ? 1 : totalPage;

    var vm = new Vue({
        el:"#wrap",

    data: {
            productList, //所有数据
            totalPage, // 统共页数，默认为1
            currentPage:1, //当前页数 ，默认为1
            C: 10, // 每页显示数量
            currentPageData, //当前页显示内容
            pageSize:10
            

    },
    // mounted() {
    //     // 计算一共有几页

    // },
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