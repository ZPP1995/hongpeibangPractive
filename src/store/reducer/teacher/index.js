let initState={
    data:[]  
}
export default (state=initState.data,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state))
    if(type==='GET_TEACHER'){
        // console.log(payload,555555)
        state=payload.data
    }
    return state
}
