<template>
    <div>
        <msg title="绑定失败" :description="description" :buttons="buttons" :icon="icon"></msg>
    </div>
</template>

<script>
import Vue from 'vue';
import { Msg, XButton } from 'vux';
import request from '../utils/request';
import { PageUtils } from '../utils/util';

export default {
    name: 'Bind',
    components: {
        Msg,
        XButton
    },
    data() {
        return {
            description: '该账号已经被锁定或冻结,请联系管理员!',
            icon: 'warn',
            buttons: [
                {
                    type: 'primary',
                    text: '绑定',
                    onClick: this.toBind.bind(this)
                },
                {
                    type: 'default',
                    text: '首页',
                    onClick: this.toHome.bind(this)
                }
            ]
        };
    },
    methods: {
        toBind() {
            this.$router.push('/bind');
        },
        toHome() {
            this.$router.push('/index');
        }
    }
};
</script>
<style lang="scss">
</style>
