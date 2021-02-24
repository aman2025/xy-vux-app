import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '@/store';

//第三方组件引入开始

//使用 fastclick 解决移动端 300ms 点击延迟
import FastClick from 'fastclick';
FastClick.attach(document.body);
//使用 fastclick 解决移动端 300ms 点击延迟

//第三方组件引入结束

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});