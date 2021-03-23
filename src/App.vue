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

export default {
    name: 'App',
    data() {
        return {};
    },
    components: {
        XyzCommonVue,
        Index
    },
    mounted() {
        this.getUser();
    },
    methods: {
        // 获取用户信息
        getUser() {
            const url = '/load-user';
            const requestMenu = () => request.post(url);
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
