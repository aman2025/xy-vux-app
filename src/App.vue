<template>
    <div id="app">
        <XyzCommonVue></XyzCommonVue>
        <img src="./assets/logo.png">
        <div>
            <button v-on:click="vuxConfirm">调用vux的confirm方法</button>
        </div>
        <HelloWorld/>
    </div>
</template>

<script>
    import XyzCommonVue from 'xyz-common-vue';
    import HelloWorld from './components/HelloWorld'
    import Vue from 'vue'
    import {ConfirmPlugin} from 'vux'
    Vue.use(ConfirmPlugin);

    export default {
        name: 'App',
        data() {
            return {};
        },
        components: {
            XyzCommonVue,
            HelloWorld,
            ConfirmPlugin
        },
        watch: {},
        mounted() {
        },
        methods: {
            vuxConfirm: function(){
                this.$vux.confirm.show({
                    title: '确定吗????',
                    onCancel () {
                    },
                    onConfirm () {}
                })
            }
        },
        created() {
        },
        computed: {}
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
</style>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
