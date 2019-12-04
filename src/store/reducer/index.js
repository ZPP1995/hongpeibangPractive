import { combineReducers} from "redux"
import university from './university'
import publi from './public'
//学烘培中下拉的reducer
import getIndexReducer from "./getIndexByWeb"
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
//搜索详情页面
import getMoreRecipeReducer from "./getMoreRecipe"

 const reducer=combineReducers({
    recomend:recomendReducer,
    search:searchReducer,
    getIndex:getIndexReducer,
    getMoreRecipe:getMoreRecipeReducer,
    university,
    publi,
    swiper,
    videolesson,
    workImg,
    teacher

})
export default reducer

