// 入口js
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import '../static/css/font_icon/iconfont.css'
import '../static/css/reset.css'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './mock/mockServer' //加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters/index.js'

//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button>

Vue.use(VueLazyload, {
    //内部自定义一个指令v-lazy
    loading
  })

new Vue({
    el: '#app',
    render: h => h(App),
    router, //使用上vue-router
    store //使用上vuex
})