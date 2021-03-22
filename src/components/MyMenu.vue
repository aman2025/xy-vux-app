<template>
    <div class="my-menu">
        <!-- my-menu -->
        <div class="sub-menu">
            <div class="sub-menu-item" v-for="item in myMenuData.slice(0, 7)" :key="item.moduleCode" @click="goto(item.homeUrl)">
                <i></i>
                <span>{{ item.moduleName }}</span>
            </div>
            <div class="sub-menu-item" @click="goto(allItem.homeUrl)">
                <i></i>
                <span>{{ allItem.moduleName }}</span>
            </div>
        </div>
        <!-- //my-menu -->
    </div>
</template>

<script>
import request from '../utils/request';
import { formatTreeData } from '../utils/util';

export default {
    name: 'MyMenu',
    components: {},
    props: [],
    data() {
        return {
            myMenuData: [], //children
            allItem: {
                moduleCode: 'funcAll',
                moduleName: '全部',
                homeUrl: '/ManageApp',
                iconUrl: '/mobile-page/func-all.ico'
            }
        };
    },
    computed: {},
    mounted() {
        this.getMyMenu();
    },
    methods: {
        goto(homeUrl) {
            this.$router.push(homeUrl);
        },
        // 获取我的菜单
        getMyMenu() {
            const url = '/load-favorites';
            const data = {
                appName: 'bms'
            };
            const requestMyMenu = (data) => request.post(url, data);
            requestMyMenu(data)
                .then((res) => {
                    const curMenu = formatTreeData(res.result, 'moduleCode', 'parentModuleCode');
                    // 我的--只有一个父级
                    if (curMenu.length && curMenu[0].children) {
                        this.myMenuData = curMenu[0].children || [];
                    }
                })
                .catch(() => {});
        }
    }
};
</script>
<style lang="scss">
/* sub-menu */
.sub-menu {
    background-color: #fff;
    display: flex;
    -webkit-box-align: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 1.5rem 0 0.5rem;
}

.sub-menu .sub-menu-item {
    flex: 0 0 25%;
    text-align: center;
    padding: 0 0.5rem 1.2rem;
}

.sub-menu .sub-menu-item i {
    display: block;
    width: 3.2rem;
    height: 3.2rem;
    margin: 0 auto;
}

.sub-menu .sub-menu-item .item01 {
    background-image: url(../assets/icon-func01.png);
}
.sub-menu .sub-menu-item .item100 {
    background-image: url(../assets/icon-all.png);
}
.my-menu {
    height: 18rem !important;
}
</style>
