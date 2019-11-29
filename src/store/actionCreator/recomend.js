export const upRecomend = (payload) => {
    return {
        type: "GET_RECOMEND",
        payload
    }
}
export default {
    getRecomend() {
        const _t = '1574910269042'
        const csrfToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0Mjg0OSwiaWF0IjoxNTc0NjU0MDQ5fQ.ZW5G18SuMYIFetFVBBPfYjAG8O9szzWcEOtbLjPZGwQ'
        const type = '3'
        const pageSize = '10'
        // 写法一
        // return (dispatch) => {
        //     this.$axios.get("/rec/recommend/getRandContent?_t=" + _t + "&csrfToken=" + csrfToken + "&type=" + type + "&pageSize=" + pageSize)
        //         .then(({ data }) => {
        //             console.log(data.data, 333);
        //             dispatch(
        //                 upRecomend({
        //                     recommendList: data.data
        //                 })
        //             )
        //         })
        // }

        //写法二
        return async (dispatch) => {
            const { data } =await this.$axios.get("/rec/recommend/getRandContent?_t=" + _t + "&csrfToken=" + csrfToken + "&type=" + type + "&pageSize=" + pageSize)
            console.log(data.data, 333);
            dispatch(upRecomend({
                    recommendList: data.data
                })
            )
        }
    }
}