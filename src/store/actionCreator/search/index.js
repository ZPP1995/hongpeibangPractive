//3、同步action并接受参数payload
export function getSearchsyn(payload) {
    return{
        type:"GET_SEARCH",
        payload
    }
}

//2、使用异步action调用数据 ，得到的数据传给同步action
export default {
    getSearch(){
        return async (dispatch)=>{
            const _t=1575124669088;
            const  csrfToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0Mjg0OSwiaWF0IjoxNTc0NjU0MDQ5fQ.ZW5G18SuMYIFetFVBBPfYjAG8O9szzWcEOtbLjPZGwQ"
            const {data} = await this.$axios.get("https://api.hongbeibang.com/keyword/detail?_t="+_t+"&csrfToken="+csrfToken)
            console.log(data,111);
            dispatch(getSearchsyn({
                lastestSearch:data.lastestSearch,
                popularSearch:data.popularSearch
            }))
            
        }
    }
}