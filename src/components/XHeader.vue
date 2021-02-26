<template>
    <div>
        <x-header :left-options="newLeftOptions" :class="{ 'header-line': headerType == 'line' }">
            {{ title }}
            <a slot="left" v-show="hasclose" @click="close">取消</a>
            <a slot="right" v-show="hassave" @click="save">{{ '保存' }}</a>
            <a slot="right" v-show="hassave ? false : !noright">{{ '帮助' }}</a>
        </x-header>
    </div>
</template>

<script>
import Vue from 'vue';
import { XHeader, ConfirmPlugin } from 'vux';
Vue.use(ConfirmPlugin);
export default {
    components: {
        XHeader,
        ConfirmPlugin
    },
    props: ['title', 'hasclose', 'hassave', 'noright', 'headerType', 'leftOptions'],
    computed: {
        newLeftOptions: function () {
            // 自定义返回文字和是否显示返回图标
            return this.leftOptions ? this.leftOptions : { backText: '' };
        }
    },
    data() {
        return {};
    },
    methods: {
        // helpCenter() {
        //     this.$router.push('./helpCenter');
        // }
        save() {
            var _this = this;
            this.$vux.confirm.show({
                title: '是否保存吗?',
                onCancel() {},
                onConfirm() {
                    _this.$router.go(-1);
                }
            });
        },
        close() {
            this.$router.go(-1);
        }
    }
};
</script>
<style lang="scss">
$color: #333;
.vux-header {
    background-color: #fff !important;
}
.vux-header .vux-header-left a,
.vux-header .vux-header-left button,
.vux-header .vux-header-right a,
.vux-header .vux-header-right button,
.vux-header .vux-header-title {
    color: $color !important;
}
.vux-header .vux-header-left .left-arrow:before {
    border-color: $color !important;
}
.header-line {
    border-bottom: 1px solid #ccc;
}
</style>
