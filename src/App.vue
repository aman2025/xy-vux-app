<template>
    <div id="app" class="app-container">
        <XyzCommonVue></XyzCommonVue>
        <router-view></router-view>
    </div>
</template>

<script>
import XyzCommonVue from 'xyz-common-vue';
import Index from './views/Index';
import Vue from 'vue';

export default {
    name: 'App',
    data() {
        return {};
    },
    components: {
        XyzCommonVue,
        Index
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
