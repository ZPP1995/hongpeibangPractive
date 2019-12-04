import Study from "../views/studyHonPei"
import Show from "../views/show"
import QuestionAndAnswer from "../views/questionAndAnswer"
import Client from "../views/client"

import Login from "../views/login"
import Search from "../views/search"


import University from "../views/university"
import Baike from "../views/baike"
import LessonSeries from "../views/lessonSeries"
import Classify from "../views/classify"
import LoginPhone from "../views/loginPhone"
import Register from "../views/register"
import Notice from "../views/notice"
import Auth from '../views/auth'
import Account from '../views/account'

import VideoLesson from '../views/videolesson'

import Recipe from "../components/QuestionAndAnswer/recipe"


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
                imgSrc: "/Fj5pW1jZYwlS9rB3h_nsvXNptuPX?50X50&imageView2/1/w/50/h/50",
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
        path: "/university",
        component: University,
        name: "视频学堂",
    },
    {
        path: "/baike",
        component: Baike,
        name: "技巧百科",
    },
    {
        path: "/lessonSeries",
        component: LessonSeries,
        name: "新手教程",
    },
    {
        path: "/classify",
        component: Classify,
        name: "食谱分类",
    },
   
   {
        path: "/loginPhone",
        component: LoginPhone,
        name: "其他登陆",
    },
    {
        path: "/register",
        component: Register,
        name: "快速注册",
    },
    {
        path: "/notice/10001",
        component: Notice,
        name: "服务条款",
    },
    {
        path: "/auth",
        component: Auth,
        name: "注册",
    },
    {
        path: "/account",
        component: Account,
        name: "注册成功",

    },
    {
        path:'/lesson',
        component:VideoLesson,
        name:'视频播放'

    },{
        path:"/recipe",
        component:Recipe,
        name:"recipe"

    }

]


// concat 连接两个数组返回一个新数组 routeConfig
//export const routeConfig = tabBarRoute.concat(noTabBarRoute)
