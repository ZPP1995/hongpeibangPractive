const  initState=[]
export default (state = initState,{type,payload})=>{
     state=JSON.parse(JSON.stringify(state))
    if(type==="GET_INDEX_BY_WEB"){
        state=payload.categoryList;
    }
    return state
}



