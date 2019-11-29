import Vue from 'vue'
import Vuex from 'vuex'
import admin from "./admin"
import shop from "./shop";
import goods from "./goods";
Vue.use(Vuex)
const state = {
    isLoading:false,// 是否加载完成

    pageIndex:1,// 当前页
    pageSum:1// 总页数
}
const mutations = {
    // bol 你要更改的值
    CHANGE_IS_LOADING(state,bol){
        state.isLoading = bol;
    },
    CHANGE_PAGE_INFO(state,{pageIndex,pageSum}){
        state.pageIndex = pageIndex;
        state.pageSum = pageSum;
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions: {},
    modules: {
        admin,
        shop,
        goods
    }
})
