export default [
    {
        path:"/",
        name:"adminLog",
        component:()=>import("@/views/admin/AdminLog")
    },
    {
        path:"/adminList",
        name:"adminList",

        component:()=>import("@/views/admin/AdminList")
    }
]