<template>
    <div>
        <XHeader :title="title"></XHeader>
        <div class="indexHeader">新意科技有限公司</div>
        <!-- 菜单 -->
        <MenuBox />
        <!-- //菜单 -->
        <!-- 看板tab -->
        <tab :line-width="2" class="shadow-top" custom-bar-width="32px" :active-color="tabActive.color" v-model="tabActive.index">
            <tab-item :badge-label="item.tnum" :selected="tabActive.index == index" v-for="(item, index) in tabData" @on-item-click="changeTab(index)" :key="index">{{ item.tname }}</tab-item>
        </tab>
        <div>
            <div v-show="tabActive.index == 0">
                <!-- 看板 -->
                <Board />
            </div>
            <div v-show="tabActive.index == 1">
                <!-- 待办 -->
                <Notice :noticeData="todoData" />
            </div>
            <div v-show="tabActive.index == 2">
                <!-- 通知 -->
                <Notice :noticeData="noticeData" />
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
    methods: {
        changeTab(i) {
            this.$store.state.tabActiveIndex = i;
        }
    }
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
