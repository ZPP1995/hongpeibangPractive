import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
//import 'lib-flexible'
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store"
import axios from "axios";
React.Component.prototype.$axios =axios;
// 请求拦截
axios.interceptors.request.use((config)=>{

    return config
})
// 响应拦截
axios.interceptors.response.use((res)=>{

    return res.data
})




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
