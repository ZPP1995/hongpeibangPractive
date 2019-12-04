let initState={
    data:[]  
}
export default (state=initState.data,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state))
    if(type==='GET_WORKIMG'){
        // console.log(payload,676767)
        state=payload.data
    }
    return state
}