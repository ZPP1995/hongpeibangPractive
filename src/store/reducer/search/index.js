const initData={
    lastestSearch:[],
    popularSearch:[]
}

//4、在reducer中修改数据   （通过dipatch触发action时执行reducer）
const searchReducer = function(state=initData,action){
     state =JSON.parse(JSON.stringify(state))
     if(action.type==="GET_SEARCH"){
         console.log(action.payload,5555);
         state=action.payload
     }
//reducer返回什么，state就是什么
    return state
}

export default searchReducer;