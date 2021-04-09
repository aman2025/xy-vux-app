import Vue from 'vue';
import Router from 'vue-router';

import Index from '../views/Index.vue';
import ManageApp from '../views/ManageApp.vue';
import NoticeDetail from '../views/NoticeDetail.vue';
import BoardDetail from '../views/BoardDetail.vue';
import Bind from '../views/Bind.vue';
import BindFailed from '../views/BindFailed.vue';
import ObtainAuthCode from '../views/dingtalk/ObtainAuthCode.vue';
import ValidLogin from '../views/ValidLogin.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/manageApp',
            name: 'manageApp',
            component: ManageApp,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/noticeDetail',
            name: 'noticeDetail',
            component: NoticeDetail,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/boardDetail',
            name: 'boardDetail',
            component: BoardDetail,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/bind',
            name: 'bind',
            component: Bind
        },
        {
            path: '/bindFailed',
            name: 'bindFailed',
            component: BindFailed
        },
        {
            path: '/obtainAuthCode',
            name: 'obtainAuthCode',
            component: ObtainAuthCode
        },
        {
            path: '/validLogin',
            name: 'validLogin',
            component: ValidLogin
        },
    ]
});

export default router;
