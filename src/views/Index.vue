<template>
    <div>
        <XHeader :title="title"></XHeader>
        <div class="indexHeader">新意科技有限公司</div>
        <!-- 菜单 -->
        <MenuBox />
        <!-- //菜单 -->
        <!-- 看板tab -->
        <tab :line-width="2" class="shadow-top" custom-bar-width="32px" :active-color="tabActive.color" v-model="tabActive.index">
            <tab-item :badge-label="item.tnum" :selected="tabActive.name === item.tname" v-for="(item, index) in tabData" @click="tabActive.name = item.tname" :key="index">{{ item.tname }}</tab-item>
        </tab>
        <div>
            <div v-show="tabActive.index == 0">
                <!-- 看板 -->
                <Board />
            </div>
            <div v-show="tabActive.index == 1">
                <!-- 待办 -->
                <Notice />
            </div>
            <div v-show="tabActive.index == 2">
                <!-- 通知 -->
                <Notice />
            </div>
        </div>
        <!-- // 看板tab -->
    </div>
</template>

<script>
import { Tab, TabItem } from 'vux';
import XHeader from '../components/XHeader';
import Board from '../components/Board';
import Notice from '../components/Notice';
import MenuBox from '../components/MenuBox';
export default {
    name: 'Index',
    components: {
        XHeader,
        TabItem,
        Tab,
        Notice,
        MenuBox,
        Board
    },
    data() {
        return {
            title: '运营管理平台',
            tabData: [
                { tname: '看板', tnum: '' },
                { tname: '待办', tnum: '' },
                { tname: '通知', tnum: '1' }
            ],
            tabActive: { name: '看板', index: 0, color: '#3A90E2' }
        };
    },
    methods: {}
};
</script>
<style lang="scss">
.indexHeader {
    height: 0.9rem;
    background-color: #0077dd;
    color: #fff;
    font-size: 0.18rem;
    padding: 0.1rem;
    letter-spacing: 0.02rem;
}
</style>
