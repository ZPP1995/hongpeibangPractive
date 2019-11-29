import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Login from "./Login"
import axios from "axios";
import filters from "./filters";
// 引入核心库
import ElementUI from 'element-ui';
// 引入样式
import 'element-ui/lib/theme-chalk/index.css';
// import PageInfo from  "./components/common/PageInfo";
import components from "./components";
Vue.config.productionTip = false
Vue.use(components);
// Vue.component("PageInfo",PageInfo)

Vue.use(ElementUI);
Vue.use(filters);

// axios 拦截器
// 将你发送的请求进行了拦截.可以在此更改请求信息

axios.interceptors.request.use(function (config) {
    // console.log("request",config);
    store.commit("CHANGE_IS_LOADING",true);// 将isLoading修改为true ,说明正在加载\
    let url = config.url;
    url += (url.includes("?")?"&":"?")+"t="+Date.now();
    // if(config.url.includes("?")){
    //     config.url+="&t="+Date.now()
    // }else{
    //     config.url+="?t="+Date.now();
    // }
    config.url = "/ele"+ url;

    config.headers = {
        authorization:store.state.admin.token
    }
    return config;
});
// 响应拦截 。返回的内容，即是你接口最终得到的内容。res是接口返回的内容。
axios.interceptors.response.use(function ({data}) {
    store.commit("CHANGE_IS_LOADING",false);// 响应结束。
    const ok = data.ok || 1;
    if(ok === -2){
        store.commit("LOGIN_OUT");
    }else{
        if(data.pageIndex){
            store.commit("CHANGE_PAGE_INFO",data)
        }
        return data;
    }

})
new Vue({
  router,
  store,
  render: function (h) { return h(this.$store.state.admin.token?App:Login) }
}).$mount('#app')
