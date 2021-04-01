<template></template>
<script>
    import * as dd from 'dingtalk-jsapi';
    import { PageUtils,getParameter } from '../../utils/util';
    export default {
        name: 'ObtainAuthCode',
        created() {
            const corpId = getParameter('corpId');
            const appName = this.$store.state.appName;
            const terminal = this.$store.state.terminal;
            // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
            dd.ready(function() {
                dd.runtime.permission.requestAuthCode({
                    corpId: corpId,
                    onSuccess: function(result) {
                        var code = result.code;
                        window.location.href = PageUtils.getServiceUrl(`valid-bind?appName=${appName}&terminal=${terminal}&code=${code}`);
                    },
                    onFail : function(err) {
                        alert(JSON.stringify(err));
                    }
                });
            });
        }
    };
</script>
