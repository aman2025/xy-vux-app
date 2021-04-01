<template>
    <div class="menu" v-if="menuVisible">
        <div class="menu-box">
            <div class="menu-my" :class="{ 'menu-selected': activeId == '999' }" @click="changeMenu('999')">{{ myMenuName }}</div>
            <div class="menu-container">
                <div class="menu-list">
                    <div class="menu-item" :class="{ 'menu-selected': item.moduleCode == activeId }" @click="changeMenu(item.moduleCode)" v-for="item in menus" :key="item.moduleCode">{{ item.moduleName }}</div>
                </div>
            </div>
        </div>
        <div class="menu-content shadow-bottom">
            <div v-for="item in menus" :key="item.moduleCode" v-show="activeId == item.moduleCode">
                <SubMenu :subMenuData="subMenuData" />
            </div>
            <div v-show="activeId == '999'">
                <MyMenu />
            </div>
        </div>
    </div>
</template>

<script>
import SubMenu from '../components/SubMenu';
import MyMenu from '../components/MyMenu';
import request from '../utils/request';
import { formatTreeData, PageUtils } from '../utils/util';

export default {
    name: 'MenuBox',
    components: {
        SubMenu,
        MyMenu
    },
    props: [],
    data() {
        return {
            menus: [],
            activeId: this.$store.state.menuActiveId,
            myMenuName: '我的',
            menuVisible: true
        };
    },
    mounted() {
        // 获取菜单
        this.getMenu();
    },
    computed: {
        subMenuData: function () {
            const _this = this;
            var curMenu = this.menus.find(function (m) {
                return m.moduleCode == _this.activeId;
            });
            return (curMenu && curMenu.children) || [];
        }
    },
    methods: {
        changeMenu(code) {
            if (code == '999') {
                this.activeId = '999';
            } else {
                this.activeId = code;
            }
            // 修改全局state，当前选中的菜单
            this.$store.commit('setMenuActiveId', code);
        },
        // 获取菜单
        getMenu() {
            const url = PageUtils.getServiceUrl('load-authorized-modules');
            const data = {
                appName: this.$store.state.appName
            };
            const requestMenu = (data) => request.post(url, data);
            requestMenu(data)
                .then((res) => {
                    if (res.retCode == 0 && res.result) {
                        this.menus = formatTreeData(res.result, 'moduleCode', 'parentModuleCode');
                    } else {
                        // 没有菜单项，隐藏
                        this.menuVisible = false;
                    }
                })
                .catch(() => {});
        }
    }
};
</script>
<style lang="scss">
.menu-box {
    margin-top: -3.3rem;
    position: relative;
}
.menu-box .menu-my {
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    text-align: center;
    z-index: 9;
    height: 3.2rem;
    line-height: 3.2rem;
    color: #fff;
}
.menu-box .menu-container {
    overflow: auto;
    background-color: rgba(4, 72, 139, 0.16);
    padding: 0 0 0 6rem;
    color: #fff;
}
.menu-box .menu-container .menu-list {
    display: flex;
    -webkit-box-align: center;
    justify-content: flex-start;
    overflow: auto;
}
.menu-box .menu-container .menu-list .menu-item {
    flex: 0 0 10rem;
    height: 3.2rem;
    line-height: 3.2rem;
    text-align: center;
    white-space: nowrap;
}
.menu-selected {
    background-color: #1280f1;
    color: #fff;
}
</style>
