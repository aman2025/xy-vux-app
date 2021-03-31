import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '@/store';
import { Loading } from 'vux';
import { PageUtils } from './utils/util';

// 全局样式
import './style/index.scss';
//第三方组件引入开始

//使用 fastclick 解决移动端 300ms 点击延迟
import FastClick from 'fastclick';
FastClick.attach(document.body);
//使用 fastclick 解决移动端 300ms 点击延迟

//第三方组件引入结束
Vue.config.productionTip = false;
Vue.component('loading', Loading);

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (store.state.login) { // 判断 是否登入了
            next();
        } else {
            next({
                path: "/validLogin",
                query: {
                    redirect: to.fullPath
                } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
});


new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
