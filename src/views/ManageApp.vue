<template>
    <div>
        <XHeader :title="title" :hasclose="true" :hassave="true" :left-options="leftOptions" headerType="line"></XHeader>
        {{ exChangeData }}
        <div class="manage-app-wrap">
            <div class="manage-app shadow-bottom">
                <h3>我的应用</h3>
                <AppList :apps="myMenuData.children" v-model="exChangeData" extype="del" />
                <divider>最多添加11个应用</divider>
            </div>
            <div class="manage-app shadow-top">
                <h3>全部应用</h3>
                <AppList v-for="item in allMenuData" v-model="exChangeData" extype="add" :apps="item.children" :key="item.moduleCode" :title="item.moduleName" />
            </div>
        </div>
    </div>
</template>

<script>
import { Divider } from 'vux';
import XHeader from '../components/XHeader';
import AppList from '../components/AppList';
import request from '../utils/request';
import { formatTreeData } from '../utils/util';
export default {
    name: 'Index',
    components: {
        XHeader,
        Divider,
        AppList
    },
    data() {
        return {
            title: '管理我的应用',
            myMenuData: { children: [] }, //我的二级菜单
            allMenuData: [],
            exChangeData: {}, // 合并es6扩展
            leftOptions: { showBack: false }
        };
    },
    mounted() {
        this.getMyMenu();
        this.getAllMenu();
    },
    watch: {
        exChangeData: function (newVal, oldVal) {
            const { data, type } = newVal;
            const curModuleCode = data.parentModuleCode;
            if (data.parentModuleCode) {
                if (type == 'add') {
                    this.myMenuData.children.push(data);
                } else {
                    this.removeData(this.myMenuData.children, curModuleCode);
                }
            }

            // let curMenu = this.allMenuData.find((o) => o.moduleCode == curModuleCode);
            // curMenu && this.removeData(curMenu.children, curModuleCode);
        }
    },
    methods: {
        // 获取我的菜单
        getMyMenu() {
            const url = 'https://mockapi.eolinker.com/SutL6fnebf3f5cc51d7c280161df78cb41f31295b541957/load-favorites';
            const data = {
                appName: 'bms'
            };
            const requestMyMenu = (data) => request.post(url, data);
            requestMyMenu(data)
                .then((res) => {
                    const menusData = formatTreeData(res.result, 'moduleCode', 'parentModuleCode');
                    // 查找我的 moduleCode: "mymenu"，前后端约定
                    var curMenu = menusData.find(function (m) {
                        return m.moduleCode == 'mymenu';
                    });
                    if (curMenu && curMenu.children) {
                        this.myMenuData = curMenu;
                    }
                })
                .catch(() => {});
        },
        // 获取所有菜单
        getAllMenu() {
            const url = 'https://mockapi.eolinker.com/SutL6fnebf3f5cc51d7c280161df78cb41f31295b541957/load-authorized-modules';
            const data = {
                appName: 'bms'
            };
            const requestAllMenu = (data) => request.post(url, data);
            requestAllMenu(data)
                .then((res) => {
                    this.allMenuData = formatTreeData(res.result, 'moduleCode', 'parentModuleCode');
                    // todo: 我的中的菜单，在所有菜单中要删除
                })
                .catch(() => {});
        },
        removeData(data, code) {
            data.splice(
                data.findIndex((o) => o.parentModuleCode == code),
                1
            );
        }
    }
};
</script>
<style lang="scss">
.manage-app-wrap {
    border-top: 1px solid #ccc;
}
.manage-app {
    padding: 1rem;
}
.manage-app h3 {
    font-size: 1.6rem;
    font-weight: bold;
    color: #333;
    padding: 0 0 1rem;
}
</style>
