import axios from 'axios';
const state = {
    goodsTypeList:[]
}
const mutations = {
    CHANGE_GOODS_TYPE_LIST(state,goodsTypeList){
        state.goodsTypeList = goodsTypeList;
    }
}
const actions = {
    async addGoodsTypeList({},params){
        const data = await axios.post("/goodsTypeList",params);
        if(data.ok === 1){
            console.log("成功");
        }else{
            console.log(data.msg);
        }
    }
}
export default {
    state,
    mutations,
    actions
}