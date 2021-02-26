<template>
    <div>
        <XHeader :title="title" headerType="line" :noright="true"></XHeader>
        <div style="padding: 0.1rem">
            <img src="../assets/detail01.png" />
        </div>
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
