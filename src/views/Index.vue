<template>
    <div>
        <XHeader :title="title"></XHeader>
        <div class="indexHeader">新意科技有限公司</div>
        <!-- 菜单 -->
        <MenuBox />
        <!-- //菜单 -->
        <!-- 看板tab -->
        <div>
            <div class="tab-sticky">
                <tab :line-width="2" class="shadow-top" custom-bar-width="32px" :active-color="tabActive.color" v-model="tabActive.index">
                    <tab-item v-for="(item, index) in tabData" :key="index" :selected="tabActive.index == index" @on-item-click="changeTab(index)">{{ item.portletName }}</tab-item>
                </tab>
                <div v-for="(item, index) in tabData" :key="index">
                    <div v-if="tabActive.index == index">
                        <keep-alive>
                            <component v-bind:is="pickTemp(item.contentTemp)" :contentUrl="item.contentUrl"></component>
                        </keep-alive>
                    </div>
                </div>
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
import CustomTemp from '../components/CustomTemp';
import MenuBox from '../components/MenuBox';
import request from '../utils/request';
import { PageUtils } from '../utils/util';

export default {
    name: 'Index',
    components: {
        XHeader,
        TabItem,
        Tab,
        Notice,
        MenuBox,
        CustomTemp,
        Board
    },
    data() {
        return {
            title: '运营管理平台',
            tabData: [],
            tabActive: { name: '看板', index: this.$store.state.tabActiveIndex, color: '#3A90E2' }
        };
    },
    mounted() {
        this.loadPortlets();
    },
    methods: {
        changeTab(i) {
            // 当前选择的tab, 修改store中的值,并传递参数
            this.$store.commit('setTabActiveIndex', i);
        },
        // 获取我的门户
        loadPortlets() {
            const url = PageUtils.getServiceUrl('load-portlets');
            const data = {
                appName: this.$store.state.appName
            };
            const requestPortlets = (data) => request.post(url, data);
            requestPortlets(data).then((res) => {
                this.tabData = res.result || []; // todo: badge-label新通知提示
            });
        },
        // 根据模板显示组件
        pickTemp(type) {
            switch (type) {
                case 'menu':
                    return 'Board';
                case 'list':
                    return 'Notice';
                case 'category':
                    return 'Category';
                default:
                    return 'CustomTemp';
            }
        }
    }
};
</script>
<style lang="scss">
.tab-sticky {
    position: sticky;
    position: -webkit-sticky;
    top: 4.6rem;
    z-index: 99;
}
.indexHeader {
    height: 9rem;
    background-color: #0077dd;
    color: #fff;
    font-size: 1.8rem;
    padding: 1rem;
    letter-spacing: 0.2rem;
}
</style>
