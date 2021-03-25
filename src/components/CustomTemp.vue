<template>
    <div>
        <div v-html="contentData"></div>
    </div>
</template>

<script>
import request from '../utils/request';
import { formatTreeData, PageUtils, getBaseUrl } from '../utils/util';

export default {
    name: 'customtemp',
    components: {},
    props: ['contentUrl'],
    data() {
        return {
            contentData: ''
        };
    },
    mounted() {
        // 没有模板，contentUrl返回的是HTML片段，需拼接页面网关
        this.getCustomOfTpl(getBaseUrl() + PageUtils.getPageGateWay() + this.contentUrl);
    },
    methods: {
        // 门户模板是custom数据
        getCustomOfTpl(url) {
            const requestTpl = () => request.post(url);
            requestTpl()
                .then((res) => {
                    if (typeof res == 'string') {
                        this.contentData = res;
                    }
                })
                .catch(() => {});
        }
    }
};
</script>
<style lang="scss">
</style>
