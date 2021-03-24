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
import { AlertPlugin } from 'vux';
Vue.use(AlertPlugin);

export default {
    name: 'App',
    data() {
        return {};
    },
    components: {
        XyzCommonVue,
        AlertPlugin,
        Index
    },
    mounted() {
        if (!this.$route.meta.noauth) {
            // todo: 非bind路由, 再router中处理，避免返回App.vue没有渲染
            this.getUser();
        }
    },
    methods: {
        // 获取用户信息
        getUser() {
            let _this = this;
            const url = '/mee/load-user';
            const requestUser = () => request.post(url);
            requestUser()
                .then((res) => {
                    if (res.retCode != 0) {
                        // 没绑定跳转到绑定页面
                        this.$vux.alert.show({
                            title: '用户未绑定平台账号',
                            content: '',
                            onShow() {},
                            onHide() {
                                _this.$router.push('/bind');
                            }
                        });
                    }
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
