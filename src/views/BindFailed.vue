<template>
    <div>
        <msg title="绑定失败" :description="description" :buttons="buttons" :icon="icon"></msg>
    </div>
</template>

<script>
import { Msg, XButton } from 'vux';
import {PageUtils} from "../utils/util";

export default {
    name: 'Bind',
    components: {
        Msg,
        XButton
    },
    data() {
        return {
            icon: 'warn',
            description:'该账号已经被锁定或冻结,请联系管理员!',
            buttons: [
                {
                    type: 'primary',
                    text: '重新绑定',
                    onClick: this.toBind.bind(this)
                },
                {
                    type: 'default',
                    text: '退出',
                    onClick: this.toLogout.bind(this)
                }
            ]
        };
    },
    methods: {
        toBind() {
            this.$router.push('/bind');
        },
        toLogout() {
            // this.$router.push('/');
            const appName = getParameter('appName');
            const terminal = getParameter( 'terminal');
            const redirectBasePath = PageUtils.getPageUrl("");
            location.href = PageUtils.getServiceUrl(`logout?appName=${appName}&terminal=${terminal}&redirectBasePath=${redirectBasePath}`)
        }
    }
};
</script>
<style lang="scss">
</style>
