export const getMoreRecipeAction = (payload) => {
    return {
        type: "GET_MORE_RECIPE",
        payload
    }
}
export default {
    getMoreRecipe(sortNum="",keyword,pageIndex=0) {
        return async (dispatch) =>{
            const { data } =await this.$axios.get("https://api.hongbeibang.com/search/getMoreRecipe?_t=1575460715041&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0Mjg0OSwiaWF0IjoxNTc0NjU0MDQ5fQ.ZW5G18SuMYIFetFVBBPfYjAG8O9szzWcEOtbLjPZGwQ&pageIndex="+pageIndex+"&pageSize=10&keyword="+keyword+"&sort="+sortNum)
            dispatch(getMoreRecipeAction({
                count:data.search.list.recipe.count/1,
                data:data.search.list.recipe.data,
            } )
            )
        }
    }
}