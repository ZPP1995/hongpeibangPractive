
const initState={
    recommendList:[]
}

const recomendReducer=function(state=initState,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type === "GET_RECOMEND"){
        state.recommendList = payload.recommendList
    }
return state
}


export default recomendReducer;



