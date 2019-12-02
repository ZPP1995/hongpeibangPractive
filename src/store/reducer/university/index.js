let initState={
    data:[]
}
export default (state=initState.data,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state))
    if(type==='GET_UNIVERSITY'){
        // console.log(payload.data,123)
        state=payload.data.category
    }
    return state
}