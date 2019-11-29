export default [
    {
        path:"/goodsTypeList",
        name:"goodsTypeList",
        component:()=>import("@/views/goods/GoodsTypeList")
    },
    {
        path:"/goodsList",
        name:"goodsList",
        component:()=>import("@/views/goods/GoodsList")
    }
]