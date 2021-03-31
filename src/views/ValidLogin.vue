<script>
    import axios from 'axios';
    import { PageUtils,getParameter } from '../utils/util';
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
                            alert(error.message);
                        }
                        return Promise.reject(new Error(error.message));
                    }else {
                        this.$store.state.login = true;
                        //已经登入，跳转到首页
                        redirect = redirect || '/index';
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
