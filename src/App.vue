<template>
    <div id="app" class="app-container">
        <loading :show="$store.state.isLoad" text="加载中..."></loading>
        <XyzCommonVue></XyzCommonVue>
        <router-view></router-view>
    </div>
</template>

<script>
import XyzCommonVue from 'xyz-common-vue';
import Index from './views/Index';
import Vue from 'vue';
import request from './utils/request';
import { PageUtils, getParameter } from './utils/util';

export default {
    name: 'App',
    data() {
        return {};
    },
    components: {
        XyzCommonVue,
        Index
    },
    created() {
        //设置store中的appName, url参数获取
        const query = window.location.search;
        const appName = getParameter(query, 'appName');
        this.$store.commit('setAppName', appName);
    },
    mounted() {
        if (this.$route.path.indexOf('bind') == -1 || this.$route.path.indexOf('obtainAuthCode') == -1) {
            this.getUser();
        }
    },
    methods: {
        // 获取用户信息
        getUser() {
            const userUrl = PageUtils.getServiceUrl('load-user');
            const requestMenu = () => request.post(userUrl);
            requestMenu()
                .then((res) => {
                    console.log(res);
                })
                .catch(() => {});
        }
    }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
<style lang="scss">
.app-container {
    padding-top: 4.6rem;
}
</style>
