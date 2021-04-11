<template>

</template>
<script>
    import axios from 'axios';
    import { PageUtils,getParameter } from '../utils/util';
    import Vue from 'vue';
    import { AlertPlugin } from 'vux';
    Vue.use(AlertPlugin);
    export default {
        name: 'ValidLogin',
        created() {
            var redirect = getParameter("redirect");
            axios.post(PageUtils.getServiceUrl("valid-login"),{})
                .then((res)=>{
                    const { error, retCode } = res.data;
                    if (retCode != 0) {
                        if (error.code == 'BIZ.UN_AUTHN') {
                            //未登入 ，跳转到 登入页面
                            window.location.href =  PageUtils.geLoginUrl();
                        } else {
                            Vue.$vux.alert.show({
                                title: '提示',
                                content: error.message
                            });
                        }
                        return Promise.reject(new Error(error.message));
                    }else {
                        this.$store.state.login = true;
                        //已经登入，跳转到首页
                        redirect = redirect || '/';
                        this.$router.push(redirect);
                    }
                })
                .catch((error)=>{
                    console.log(error)  //  错误处理 相当于error
                })
        },
        mounted() {
        }
    };
</script>
