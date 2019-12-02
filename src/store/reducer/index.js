
import university from './university'
import publi from './public'

import { combineReducers} from "redux"
//学烘培中推荐的reducer
import recomendReducer from "./recomend"

//搜索页面
import searchReducer from  "./search"
 const reducer=combineReducers({
    recomend:recomendReducer,
    search:searchReducer,
    university,
    publi

})
export default reducer

