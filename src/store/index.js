//1、通过redux引入applymiddle 来使用中间件
import { createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootReducer  from './reducer'
// 2、使用  在creatrStore中的第二个参数中  通过applyMiddle(中间件)
export default createStore(rootReducer,applyMiddleware(thunk))