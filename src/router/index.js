import Vue from 'vue';
import Router from 'vue-router';

import Index from '../views/Index.vue';
import ManageApp from '../views/ManageApp.vue';
import NoticeDetail from '../views/NoticeDetail.vue';
import BoardDetail from '../views/BoardDetail.vue';
import Bind from '../views/Bind.vue';
import ObtainAuthCode from '../views/dingtalk/ObtainAuthCode.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/manageApp',
            name: 'manageApp',
            component: ManageApp
        },
        {
            path: '/noticeDetail',
            name: 'noticeDetail',
            component: NoticeDetail
        },
        {
            path: '/boardDetail',
            name: 'boardDetail',
            component: BoardDetail
        },
        {
            path: '/bind',
            name: 'bind',
            component: Bind
        },
        {
            path: '/obtainAuthCode',
            name: 'obtainAuthCode',
            component: ObtainAuthCode
        }
    ]
});

export default router;
