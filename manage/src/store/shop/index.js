import axios from "axios";
const state = {
    shopTypeList:[],
    allShopTypeList:[],
    shopList:[],
    shopListById:[]
}
const mutations = {
    CHANGE_SHOP_TYPE_LIST(state,shopTypeList){
        state.shopTypeList = shopTypeList;
    },
    CHANGE_ALL_SHOP_TYPE_LIST(state,allShopTypeList){
        state.allShopTypeList = allShopTypeList;
    },
    CHANAGE_SHOP_LIST(state,shopList){
        state.shopList = shopList;
    },
    CHANGE_SHOP_LIST_BYID(state,shopList){
        state.shopListById = shopList
    }
}
const actions = {
    async getShopTypeList({commit},query){
        const {pageIndex=1,shopTypeName} = query || {};
        console.log(pageIndex,shopTypeName);
        const data = await axios.get("/shopTypeList",{
            params:{
                pageIndex,
                shopTypeName
            }
        })
        commit("CHANGE_SHOP_TYPE_LIST",data.shopTypeList)
    },
    async getAllShopTypeList({commit}){
        const data = await  axios.get("/AllShopTypeList");
        commit("CHANGE_ALL_SHOP_TYPE_LIST",data.shopTypeList);
    },
    async getShopList({commit},query){
        console.log(query);
        const {pageIndex=1,shopTypeId=""} = query || {};
        const data = await axios.get("/shopList",{
            params:{
                pageIndex,
                shopTypeId
            }
        })
        commit("CHANAGE_SHOP_LIST",data.shopList)
    },
    async getShopListByTypeId({commit},shopTypeId){
        const data = await axios.get("/shopListByTypeId/"+shopTypeId);
        commit("CHANGE_SHOP_LIST_BYID",data.shopList)
    }
}
export default {
    state,
    mutations,
    actions
}