<template>
    <div>
        <x-header :left-options="newLeftOptions">
            {{ title }}
            <a slot="left" v-show="hasclose">Close</a>
            <a slot="right" v-show="!noright">帮助</a>
        </x-header>
    </div>
</template>

<script>
import { XHeader } from 'vux';

export default {
    components: {
        XHeader
    },
    props: {
        title: String,
        hasclose: Boolean,
        noright: Boolean,
        leftOptions: Object
    },
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
</style>
