<template>
    <div class="menu">
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
                <MyMenu :myMenuData="myMenuData" />
            </div>
        </div>
    </div>
</template>

<script>
import SubMenu from '../components/SubMenu';
import MyMenu from '../components/MyMenu';
import request from '../utils/request';

export default {
    components: {
        SubMenu,
        MyMenu
    },
    props: [],
    data() {
        return {
            menus: [],
            activeId: this.$store.state.menuActiveId,
            myMenuData: [
                {
                    moduleCode: 'func01-m',
                    moduleName: '功能名称01-m',
                    parentModuleCode: 'myMenu',
                    homeUrl: '/mobile-page/func01-m.html',
                    iconUrl: '/mobile-page/func01-m.ico'
                }
            ],
            myMenuName: '我的'
        };
    },
    mounted() {
        // 获取菜单
        this.getMenu();
    },
    computed: {
        subMenuData: function () {
            const _this = this;
            var curMenus = this.menus.find(function (m) {
                return m.moduleCode == _this.activeId;
            });
            return (curMenus && curMenus.children) || [];
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
            const url = 'https://mockapi.eolinker.com/SutL6fnebf3f5cc51d7c280161df78cb41f31295b541957/load-authorized-modules';
            const data = {
                appName: 'bms'
            };
            const requestMenu = (data) => request.post(url, data);
            requestMenu(data)
                .then((res) => {
                    console.log(3);
                    this.menus = this.formatTreeData(res.result);
                })
                .catch(() => {});
        },
        // 转成树形机构
        formatTreeData(list) {
            var i,
                l,
                key = 'moduleCode',
                parentKey = 'parentModuleCode';
            if (!key || key == '' || !list) return [];
            if (Array.isArray(list)) {
                var r = [];
                var tmpMap = {};
                for (i = 0, l = list.length; i < l; i++) {
                    tmpMap[list[i][key]] = list[i]; // 引用值修改
                }
                for (i = 0, l = list.length; i < l; i++) {
                    if (tmpMap[list[i][parentKey]] && list[i][key] != list[i][parentKey]) {
                        if (!tmpMap[list[i][parentKey]].children) {
                            tmpMap[list[i][parentKey]].children = [];
                        }
                        tmpMap[list[i][parentKey]].children.push(list[i]);
                    } else {
                        r.push(list[i]);
                    }
                }
                return r;
            } else {
                return [list];
            }
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
