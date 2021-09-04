// 入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../static/css/font_icon/iconfont.css'
import '../static/css/reset.css'
new Vue({
    el: '#app',
    render: h => h(App),
    router
})