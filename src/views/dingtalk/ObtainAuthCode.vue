<script>
    import * as dd from 'dingtalk-jsapi';
    import { PageUtils,getParameter } from '../../utils/util';
    export default {
        name: 'ObtainAuthCode',
        created() {
            const query = window.location.search;
            const corpId = getParameter(query, 'corpId');
            const appName = getParameter(query, 'appName');
            // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
            dd.ready(function() {
                dd.runtime.permission.requestAuthCode({
                    corpId: corpId,
                    onSuccess: function(result) {
                        var code = result.code;
                        window.location.href = PageUtils.getServiceUrl("valid-bind?appName=" + appName + "&code=" + code);
                    },
                    onFail : function(err) {
                        alert(err);
                    }
                });
            });
        }
    };
</script>
