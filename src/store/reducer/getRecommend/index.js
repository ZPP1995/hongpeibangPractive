

const initState = {
    classifys: [],
    name: "",
    classifyIds: [],
    classifyRecommendClassifyId: 10001,

}

const initClassify={
    classify:[],
    list:[]
}


const  getRecommend=(state = initState, { type, payload }) => {
    state = JSON.parse(JSON.stringify(state))
    if (type === "GET_RECOMMEND_Classify") {
        state.classifys = payload.classifys
        state.name = payload.name
        state.classifyIds = payload.classifyIds
        state.classifyRecommendClassifyId = payload.classifyRecommendClassifyId
    }
    return state
}

const getClassify=(state = initClassify, { type, payload }) => {
    state = JSON.parse(JSON.stringify(state))
    //分类页面中的所有分类
    if (type === "GET_CLASSIFY") {
    state.classify=payload.classify
    state.list=payload.list
    }
    return state
}

export{
    getRecommend, getClassify
}




