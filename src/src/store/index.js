//1、通过redux引入applymiddle 来使用中间件
import { createStore,applyMiddleware,combineReducers} from "redux"
//
import thunk from "redux-thunk"


//学烘培中推荐的reducer
import recomendReducer from "./reducer/recomend"
const reducer=combineReducers({
    recomend:recomendReducer,

})
const store = createStore(reducer,applyMiddleware(thunk))

// 2、使用  在creatrStore中的第二个参数中  通过applyMiddle(中间件)
export default store