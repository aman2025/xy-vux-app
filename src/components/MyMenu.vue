<template>
    <div class="my-menu">
        <!-- my-menu -->
        <div class="sub-menu">
            <div class="sub-menu-item" v-for="item in myMenuData.slice(0, 7)" :key="item.moduleCode" @click="goto(item.homeUrl)">
                <i :style="item.iconUrl ? 'background-image:url(' + item.iconUrl + ')' : ''"></i>
                <span>{{ item.moduleName }}</span>
            </div>
            <div class="sub-menu-item" @click="goto(allItem.homeUrl)">
                <i class="icon-allmenu"></i>
                <span>{{ allItem.moduleName }}</span>
            </div>
        </div>
        <!-- //my-menu -->
    </div>
</template>

<script>
import request from '../utils/request';
import { formatTreeData, PageUtils } from '../utils/util';

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
                homeUrl: '/ManageApp'
            }
        };
    },
    computed: {},
    mounted() {
        this.getMyMenu();
    },
    methods: {
        goto(homeUrl) {
            if (homeUrl.indexOf('ManageApp') == -1) {
                const url = window.location.href;
                const base_url = url.split('?')[0];
                window.location.href = base_url + PageUtils.getPageGateWay() + homeUrl;
            } else {
                this.$router.push(homeUrl);
            }
        },
        // 获取我的菜单
        getMyMenu() {
            const url = '/mee/load-favorites';
            const data = {
                appName: this.$store.state.appName
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

.sub-menu .sub-menu-item i {
    background-image: url(../assets/icon-func01.png);
}
.sub-menu .sub-menu-item .icon-allmenu {
    background-image: url(../assets/icon-all.png);
}
.my-menu {
    height: 18rem !important;
}
</style>
