<template>
    <div>
        <XHeader :title="title" :left-options="leftOptions"></XHeader>
        <div>
            <x-button type="default">index</x-button>
        </div>
    </div>
</template>

<script>
import { XButton } from 'vux';
import XHeader from '../components/XHeader';
export default {
    name: 'Index',
    components: {
            XButton,
            XHeader
        },
    data() {
        return {
            title: '运营管理平台'
        }
    }
}
</script>
<style lang="scss">
</style>
