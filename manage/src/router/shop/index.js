export default [
    {
        // 店铺列表
        path:"/shopList",
        name:"shopList",
        component:()=>import("@/views/shop/ShopList")
    }, {
        // 店铺类别列表
        path:"/shopTypeList",
        name:"shopTypeList",
        component:()=>import("@/views/shop/ShopTypeList")
    }
]