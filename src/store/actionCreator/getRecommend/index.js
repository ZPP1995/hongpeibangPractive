export const getRecommendAction = (payload) => {
    return {
        type: "GET_RECOMMEND_Classify",
        payload
    }
}


export const getClassifyAction = (payload) => {
    return {
        type: "GET_CLASSIFY",
        payload
    }
}


export  function getRecommend() {
    return async (dispatch) =>{
        const { data } =await this.$axios.get("https://api.hongbeibang.com/classify/getRecommend?_t=1575529659303&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0Mjg0OSwiaWF0IjoxNTc0NjU0MDQ5fQ.ZW5G18SuMYIFetFVBBPfYjAG8O9szzWcEOtbLjPZGwQ")
       // console.log(data[0],11111);
        dispatch(getRecommendAction({
            classifys:data[0].classifys,
            name:data[0].name,
            classifyIds:data[0].classifyIds,
            classifyRecommendClassifyId:data[0].classifyRecommendClassifyId
        } )
        )
    }
}


export function getClassify(index=0){
    return async (dispatch) =>{
        const { data } =await this.$axios.get("https://api.hongbeibang.com/classify/get?_t=1575529659465&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0Mjg0OSwiaWF0IjoxNTc0NjU0MDQ5fQ.ZW5G18SuMYIFetFVBBPfYjAG8O9szzWcEOtbLjPZGwQ")
        dispatch(getClassifyAction({
            classify:data.classify,
            list:data.classify[index].list,
        } )
        )
    }
}
