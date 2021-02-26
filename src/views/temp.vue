<template>
    <div>
        <XHeader :title="title"></XHeader>
        <div class="temp">
            功能页
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
           title: '功能页'
        };
    }
};
</script>
<style lang="scss">
.temp{
    border-top: 1px solid #ccc;
    padding:20px 0 0;
    text-align: center;
}
</style>
