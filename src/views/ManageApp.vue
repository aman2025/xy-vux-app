<template>
    <div>
        <XHeader :title="title" :hasclose="true" :hassave="true" :left-options="leftOptions" headerType="line"></XHeader>
        <div class="manage-app-wrap">
            <div class="manage-app shadow-bottom">
                <h3>我的应用</h3>
                <AppList :apps="myMenuData.children" v-model="exChangeData" extype="del" />
                <divider>最多添加11个应用</divider>
            </div>
            <div class="manage-app shadow-top">
                <h3>全部应用</h3>
                <AppList v-for="item in allMenuData" v-model="exChangeData" extype="add" :apps="item.children" :key="item.moduleCode" :title="item.moduleName" @changeTitle="item.moduleName = ''" />
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
    },
    watch: {
        exChangeData: function (newVal, oldVal) {
            const { data, type } = newVal;
            const curModuleCode = data.moduleCode;
            // const curMenu = this.allMenuData.find((o) => o.moduleCode == data.parentModuleCode);
            // todo: this.allMenuData 已经没有了 收藏过的对象，所以找不到
            const curMenu = this.allMenuData.filter((item) => {
                return item.children.find((o) => {
                    console.log(o.moduleCode); //
                    return o.moduleCode == curModuleCode;
                });
            });
            console.log(curMenu);

            if (type == 'add') {
                this.myMenuData.children.push(data); // 我的应用
                curMenu && this.removeData(curMenu.children, curModuleCode);
            } else {
                this.removeData(this.myMenuData.children, curModuleCode); // 我的应用
                curMenu && curMenu.children.push(data);
            }
        }
    },
    methods: {
        // 获取我的菜单
        getMyMenu() {
            const url = 'https://mockapi.eolinker.com/SutL6fnebf3f5cc51d7c280161df78cb41f31295b541957/load-favorites';
            const data = {
                appName: 'bms'
            };
            const requestMyMenu = (data) => request.post(url, data); // requestMyMen() 返回一个promise
            requestMyMenu(data)
                .then((res) => {
                    const menusData = formatTreeData(res.result, 'moduleCode', 'parentModuleCode');
                    // todo: 查找我的 moduleCode: "mymenu"前后端约定; curMenu = menuData[0]一样
                    var curMenu = menusData.find(function (m) {
                        return m.moduleCode == 'mymenu';
                    });
                    if (curMenu && curMenu.children) {
                        this.myMenuData = curMenu;
                    }
                })
                .then(() => {
                    this.getAllMenu(this.myMenuData.children);
                });
        },
        // 获取所有菜单
        getAllMenu(favritesData) {
            const url = 'https://mockapi.eolinker.com/SutL6fnebf3f5cc51d7c280161df78cb41f31295b541957/load-authorized-modules';
            const data = {
                appName: 'bms'
            };
            const requestAllMenu = (data) => request.post(url, data);
            requestAllMenu(data).then((res) => {
                this.allMenuData = formatTreeData(res.result, 'moduleCode', 'parentModuleCode');
                // 根据moduleCode过滤已收藏的
                // console.log(this.allMenuData);
                // console.log(favritesData);
                favritesData.forEach((item) => {
                    var mcode = item.moduleCode;
                    this.allMenuData.forEach((o) => {
                        var arr = o.children;
                        var idx = arr.findIndex((obj) => obj.moduleCode === mcode);
                        if (idx !== -1) {
                            arr.splice(idx, 1);
                        }
                    });
                });
            });
        },
        // 移除
        removeData(data, code) {
            data.splice(
                data.findIndex((o) => o.moduleCode == code),
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
