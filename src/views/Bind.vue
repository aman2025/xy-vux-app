<template>
    <div>
        <group title="绑定平台账号">
            <!-- 登录 -->
            <x-input title="用户名" v-model="account.userCode"></x-input>
            <x-input title="密码" type="password" v-model="account.password"></x-input>
        </group>
        <div @click="bindAccount" style="padding: 15px">
            <x-button type="primary">绑定</x-button>
        </div>
        <toast v-model="toastVisible" type="text" @on-hide="onHide">{{ toastText }}</toast>
    </div>
</template>

<script>
import { Toast, XInput, XButton, Group } from 'vux';
import request from '../utils/request';
import { PageUtils } from '../utils/util';

export default {
    name: 'Bind',
    components: {
        XInput,
        XButton,
        Group,
        Toast
    },
    data() {
        return {
            account: { userCode: '', password: '' },
            toastVisible: false,
            toastText: '',
            toastCode: '',
            errorCode: ''
        };
    },
    methods: {
        // post保存
        bindAccount() {
            const url = PageUtils.getServiceUrl('bind');
            const terminal = this.$store.state.terminal;
            const data = {
                userCode: this.account.userCode,
                password: this.account.password,
                terminal: terminal
            };
            const requestBind = (data) => request.post(url, data);
            requestBind(data).then((res) => {
                this.toastVisible = true;
                this.toastCode = res.retCode;
                if (res.retCode == 0) {
                    this.toastText = '绑定成功';
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
