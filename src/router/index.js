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
            name: 'validLogin',
            component: ValidLogin,
            meta: {
                unRequireAuth: true
            }
        },
        {
            path: '/index',
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
            component: Bind,
            meta: {
                unRequireAuth: true
            }
        },
        {
            path: '/bindFailed',
            name: 'bindFailed',
            component: BindFailed,
            meta: {
                unRequireAuth: true
            }
        },
        {
            path: '/obtainAuthCode',
            name: 'obtainAuthCode',
            component: ObtainAuthCode,
            meta: {
                unRequireAuth: true
            }
        }
    ]
});

export default router;
