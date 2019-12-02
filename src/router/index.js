import Study from "../views/studyHonPei"
import Show from "../views/show"
import QuestionAndAnswer from "../views/questionAndAnswer"
import Client from "../views/client"
import Login from "../views/login"
import Search from "../views/search"
import Baike from "../views/baike"
import University from "../views/university"
export const tabBarRoute = [
    {
        path: "/",
        children: [
            {
                path: "/",
                component: Study,
                name: "学烘培",
                imgSrc: "/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50"
            },
            {
                path: "/show",
                component: Show,
                name: "烘培圈",
                imgSrc: "/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50"
            },
            {
                path: "/questionAndAnswer",
                component: QuestionAndAnswer,
                name: "问答",
                imgSrc: "/Fj5pW1jZYwlS9rB3h_nsvXNptuPX?50X50&imageView2/1/w/50/h/50"
            },
            {
                path: "/client",
                component: Client,
                name: "小窝",
                imgSrc: "/FpNSY800vY0I5ytvWaqDbdJqT0HR?50X50&imageView2/1/w/50/h/50"
            },
        ]
    },
]

export const noTabBarRoute = [
    {
        path: "/search",
        component: Search,
        name: "搜索",
    },
    {
        path: "/login",
        component: Login,
        name: "登陆",
    },
     {
        path: "/baike",
        component: Baike,
        name: "百科",
    },
    {
        path: "/university",
        component: University,
        name: "视频学堂",
    },
  

]

// concat 连接两个数组返回一个新数组 routeConfig
//export const routeConfig = tabBarRoute.concat(noTabBarRoute)
