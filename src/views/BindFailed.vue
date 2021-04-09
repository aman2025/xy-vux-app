<template>
    <div>
        <msg title="账户异常" :description="description" :buttons="buttons" :icon="icon"></msg>
        <toast v-model="toastVisible" type="text" @on-hide="onHide">{{ toastText }}</toast>
    </div>
</template>

<script>
 import { Toast,Msg, XButton } from 'vux';
import request from '../utils/request';
import {PageUtils} from "../utils/util";

export default {
    name: 'Bind',
    components: {
        Msg,
        XButton,
        Toast
    },
    data() {
        return {
            icon: 'warn',
            description:'该账号已经被锁定或冻结,请联系管理员!',
            toastVisible: false,
            toastText: '',
            toastCode: '',
            errorCode: '',
            buttons: [
                {
                    type: 'primary',
                    text: '重新绑定',
                    onClick: this.toUnBind.bind(this)
                },
                // {
                //     type: 'default',
                //     text: '退出',
                //     onClick: this.toLogout.bind(this)
                // }
            ]
        };
    },
    methods: {
        toUnBind() {
            const url = PageUtils.getServiceUrl('un-bind');
            const terminal = this.$store.state.terminal;
            const data = {
                terminal: terminal || ''
            };
            const requestUnBind = (data) => request.post(url, data);
            requestUnBind(data).then((res) => {
                this.toastVisible = true;
                this.toastCode = res.retCode;
                if (res.retCode == 0) {
                    this.toastText = '解绑成功';
                } else {
                    this.errorCode = res.error.code || '';
                    this.toastText = res.error.message || '';
                }
            });

        },
        // toast隐藏后触发
        onHide() {
            if (this.toastCode == 0 || this.errorCode == 'BIZ.AUTH_CODE_EXPIRE') {
                //成功后跳转
                this.$router.push('/');
            }
        }
    }
};
</script>
<style lang="scss">
</style>
