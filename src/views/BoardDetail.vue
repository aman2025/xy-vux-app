<template>
    <div>
        <XHeader :title="title" headerType="line" :noright="true"></XHeader>
        <div style="padding: 1rem">详情页面</div>
    </div>
</template>

<script>
import XHeader from '../components/XHeader';
export default {
    name: 'Index',
    components: {
        XHeader
    },
    data() {
        return {
            title: '监控主题'
        };
    }
};
</script>
<style lang="scss">
</style>
