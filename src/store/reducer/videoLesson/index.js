let initState={
    data:{
        introduces:[]
    }   
}
export default (state=initState.data,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state))
    if(type==='GET_VIDEOLESSON'){
        // console.log(payload,555555)
        state=payload.data
    }
    return state
}
