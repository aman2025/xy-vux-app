import Vue from 'vue';
import Router from 'vue-router';

import page1 from '../components/Page1.vue';     //直接引入写法
const page2 = () => import('../components/Page2.vue');   //异步加载写法

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'root',
        redirect: '/page1'
    }, {
        path: '/page1',
        name: 'page1',
        component: page1
    }, {
        path: '/page2',
        name: 'page2',
        component: page2
    }]
});

export default router;