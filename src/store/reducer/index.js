import { combineReducers} from "redux"
import university from './university'
import publi from './public'
//学烘培中下拉的reducer
import getIndexReducer from "./getIndexByWeb"
//学烘培中推荐的reducer
import recomendReducer from "./recomend"
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
})
export default reducer

