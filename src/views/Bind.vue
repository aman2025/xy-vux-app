<template>
    <div>
        <div>绑定</div>
        <toast v-model="toastVisible" @on-hide="onHide">{{ toastText }}</toast>
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vux';
import request from '../utils/request';

export default {
    name: 'Bind',
    components: {
        Toast
    },
    data() {
        return {
            toastVisible: false,
            toastText: '',
            toastCode: ''
        };
    },
    mounted() {
        this.bindAccount();
    },
    methods: {
        // post保存
        bindAccount() {
            const url = '/mee/bind';
            const data = {
                userCode: 'bms',
                password: 'm0001'
            };
            const requestBind = (data) => request.post(url, data); //
            requestBind(data).then((res) => {
                this.toastVisible = true;
                this.toastCode = res.retCode;
                if (res.retCode == 0) {
                    this.toastText = '绑定成功';
                } else {
                    this.toastText = '绑定失败，授权码失效';
                }
            });
        },
        // toast隐藏后触发
        onHide(code) {
            if (toastCode == 0) {
                //成功后跳转
                this.$router.go(-1);
            } else {
                //失败后跳转
                this.$router.go(-1);
            }
        }
    }
};
</script>
<style lang="scss">
.manage-app-wrap {
    border-top: 1px solid #ccc;
}
.manage-app {
    padding: 1rem;
}
.manage-app h3 {
    font-size: 1.6rem;
    font-weight: bold;
    color: #333;
    padding: 0 0 1rem;
}
</style>
