<template>
    <div>
        <XHeader :title="title"></XHeader>
        <div class="indexHeader">新意科技有限公司</div>
        <!-- 功能名称 -->
        <Entry />
        <!-- //功能名称 -->
        <!-- 看板tab -->
        <tab :line-width="2" custom-bar-width="32px" :active-color="tabActive.color" v-model="tabActive.index">
            <tab-item :badge-label="item.tnum" :selected="tabActive === item.tname" v-for="(item, index) in tabData" @click="tabActive = item.tname" :key="index">{{ item.tname }}</tab-item>
        </tab>
        <div>
            <div v-show="tabActive.index == 0">
                <Board />
            </div>
            <div v-show="tabActive.index == 1">b</div>
            <div v-show="tabActive.index == 2">c</div>
        </div>
        <!-- // 看板tab -->
    </div>
</template>

<script>
import { Tab, TabItem  } from 'vux';
import XHeader from '../components/XHeader';
import Board from '../components/Board';
import Entry from '../components/Entry';
export default {
    name: 'Index',
    components: {
            XHeader,
            TabItem,
            Tab,
            Entry,
            Board
        },
    data() {
        return {
            title: '运营管理平台',
            tabData: [{tname: '看板', tnum: ''}, {tname: '待办', tnum: ''}, {tname: '通知', tnum: '1'}],
            tabActive: {name: '看板', index: 0, color: '#3A90E2'}
        }
    }
}
</script>
<style lang="scss">
.indexHeader {
    height: 80px;
    background-color: #0077dd;
    color: #fff;
    font-size: 16px;
    padding: 10px;
}
</style>
