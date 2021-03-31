<template>
    <div>
        <msg title="绑定失败" :description="description" :buttons="buttons" :icon="icon"></msg>
    </div>
</template>

<script>
import { Msg, XButton } from 'vux';

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
            this.$router.push('/');
        }
    }
};
</script>
<style lang="scss">
</style>
