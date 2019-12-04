const  initState={
        count:0,
        data:[]
}
export default (state = initState,{type,payload})=>{
     state=JSON.parse(JSON.stringify(state))
    if(type==="GET_MORE_RECIPE"){
       console.log(payload,2356)
        state.count=payload.count
        state.data=payload.data
    }
    return state
}



