
import university from './university'
import publi from './public'

import { combineReducers} from "redux"
//学烘培中推荐的reducer
import recomendReducer from "./recomend"
//轮播
import swiper from './swiper'
//视频播放
import videolesson from './videoLesson'
//学员作业
import workImg from './workimg'
//导师其它课程
import teacher from './teacher'
//搜索页面
import searchReducer from  "./search"
 const reducer=combineReducers({
    recomend:recomendReducer,
    search:searchReducer,
    university,
    publi,
    swiper,
    videolesson,
    workImg,
    teacher
})
export default reducer

