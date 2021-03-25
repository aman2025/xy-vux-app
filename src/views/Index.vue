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
                <div v-for="(item, index) in tabData" :key="index" v-show="tabActive.index == index">
                    <component v-bind:is="pickTemp(item.contentTemp)" :contentUrl="item.contentUrl"></component>
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
import MenuBox from '../components/MenuBox';
import request from '../utils/request';

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
            tabData: [],
            tabActive: { name: '看板', index: this.$store.state.tabActiveIndex, color: '#3A90E2' },
            todoData: [
                {
                    id: 1,
                    title: '资金凭证审批',
                    number: 1,
                    isWarn: true,
                    time: '5分钟',
                    tabs: [
                        {
                            text: '标签01',
                            type: '1'
                        }
                    ]
                },
                {
                    id: 2,
                    title: '划款强制确认复核',
                    number: 2,
                    time: '10分钟',
                    tabs: [
                        {
                            text: '标签01',
                            type: '1'
                        }
                    ]
                },
                {
                    id: 3,
                    title: '直销退款申请复核',
                    number: 2,
                    time: '2021-01-08 10:00:00',
                    tabs: [
                        {
                            text: '标签01',
                            type: '1'
                        }
                    ]
                },
                {
                    id: 4,
                    title: '待办事项名称02',
                    time: '2021-01-08 10:00:00',
                    tabs: [
                        {
                            text: '标签02',
                            type: '2'
                        }
                    ]
                },
                {
                    id: 5,
                    title: '待办事项名称03',
                    time: '2021-01-08 10:00:00',
                    tabs: [
                        {
                            text: '标签02',
                            type: '2'
                        }
                    ]
                }
            ],
            noticeData: [
                {
                    id: 1,
                    title: '主板清算“数据录入”有新增代码和权益登记日',
                    time: '5分钟前',
                    category: '2',
                    readed: false,
                    path: './noticeDetail',
                    tabs: [
                        {
                            text: '资管业务',
                            type: '1'
                        }
                    ]
                },
                {
                    id: 2,
                    title: '融资融券清算‘数据录入”有新增代码',
                    time: '10分钟前',
                    category: '2',
                    path: './noticeDetail',
                    readed: false,
                    tabs: [
                        {
                            text: '资管业务',
                            type: '1'
                        }
                    ]
                },
                {
                    id: 3,
                    title: '主板清算“数据录入”有新增代码和权益登记',
                    time: '2021-01-08 1 0:00:00',
                    category: '2',
                    path: './noticeDetail',
                    readed: true,
                    tabs: [
                        {
                            text: '资管业务',
                            type: '1'
                        }
                    ]
                },
                {
                    id: 4,
                    title: '融资融券“数据录入”有新增代码',
                    time: '2021-01-07 10:00:00',
                    category: '2',
                    path: './noticeDetail',
                    readed: true,
                    tabs: [
                        {
                            text: '法人业务',
                            type: '2'
                        }
                    ]
                },
                {
                    id: 5,
                    title: '融资融券“数据录入”有新增代码',
                    time: '2021-01-06 10:00:00',
                    category: '2',
                    path: './noticeDetail',
                    readed: true,
                    tabs: [
                        {
                            text: '经纪业务',
                            type: '2'
                        }
                    ]
                }
            ]
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
            const url = '/mee/load-portlets';
            const data = {
                appName: this.$store.state.appName
            };
            const requestPortlets = (data) => request.post(url, data);
            requestPortlets(data).then((res) => {
                this.tabData = res.result; // todo: badge-label新通知提示
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
                    return 'Notice';
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
