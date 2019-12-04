export const getIndexAction = (payload) => {
    return {
        type: "GET_INDEX_BY_WEB",
        payload
    }
}
export default {
    getIndexByWeb() {
        return async (dispatch) =>{
            const { data } =await this.$axios.get("https://api.hongbeibang.com/education/getIndexByWeb?_t=1575288896923&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0Mjg0OSwiaWF0IjoxNTc0NjU0MDQ5fQ.ZW5G18SuMYIFetFVBBPfYjAG8O9szzWcEOtbLjPZGwQ")
            dispatch(getIndexAction( {
                categoryList: data.category
            } )
            )
        }
    }
}