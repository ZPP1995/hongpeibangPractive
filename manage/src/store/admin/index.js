import axios from "axios";// 安可瘦死
import bus from "@/bus"
const state = {
    adminName:localStorage.adminName,
    token:localStorage.token,

    adminLog:[],
    // pageIndex:1,
    // pageSum:1
}
const mutations = {
    CHANGE_LOGIN_INFO(state,info){
        state.adminName = localStorage.adminName = info.adminName;
        state.token = localStorage.token =  info.token;
    },
    // 退出登陆
    LOGIN_OUT(state){
        localStorage.clear();
        state.adminName = state.token = null;
    },
    CHANGE_ADMIN_LOG(state,adminLog){
        state.adminLog  = adminLog;
        // state.pageIndex  = info.pageIndex;
        // state.pageSum  = info.pageSum;

    }
}
const actions = {
    async login({commit},params){
        const data = await axios.post("/login",params);
        return data;
    },
    async getAdminLog({commit},query){
        console.log(query);
        const {pageIndex=1} = query || {};

        const data = await axios.get("/adminLog",{
            params:{
                pageIndex
            }
        });
        // 更新状态
        commit("CHANGE_ADMIN_LOG",data.adminLog);
        // 更新分页组件的数据
        // commit("CHANGE_PAGE_INFO",data)
        return data;
    }
    // 登陆
    // async login({commit},params){
    //     const data = await axios.post("/login",params);
    //     if(data.ok === 1){
    //         commit("CHANGE_LOGIN_INFO",data)
    //     }else{
    //         bus.$message.error(data.msg);
    //     }
    // }
    // async login({commit},_this){
    //     const data = await axios.post("/login",_this.adminForm);
    //     if(data.ok === 1){
    //         commit("CHANGE_LOGIN_INFO",data)
    //     }else{
    //         _this.$message.error(data.msg);
    //     }
    // }
}
export default {
    actions,
    state,
    mutations
}