import Vue from 'vue';
import Router from 'vue-router';

import Index from '../views/Index.vue';     //直接引入写法

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    }]
});

export default router;