<template>
    <div>
        <XHeader :title="title" :hasclose="true" :hassave="true" :left-options="leftOptions" headerType="line" @save="save"></XHeader>
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
import Vue from 'vue';
import { Divider, ConfirmPlugin } from 'vux';
import XHeader from '../components/XHeader';
import AppList from '../components/AppList';
import request from '../utils/request';
import _ from 'lodash';
import { formatTreeData } from '../utils/util';
Vue.use(ConfirmPlugin);

export default {
    name: 'Index',
    components: {
        XHeader,
        Divider,
        AppList,
        ConfirmPlugin
    },
    data() {
        return {
            title: '管理我的应用',
            myMenuData: { children: [] }, //我的二级菜单
            allMenuData: [],
            originMenuData: [],
            exChangeData: {}, // 合并es6扩展
            leftOptions: { showBack: false }
        };
    },
    mounted() {
        this.getMyMenu();
    },
    watch: {
        exChangeData: function (newVal, oldVal) {
            const { data, type, selected } = newVal;
            const curModuleCode = data.moduleCode;
            // todo： 测试数据为空情况，有没有报错
            const curIndex = _.findIndex(this.originMenuData, (item) => {
                // item.moduleCode
                return item.children.find((o) => {
                    return o.moduleCode == curModuleCode;
                });
            });

            if (type == 'add') {
                this.myMenuData.children.push(data); // 我的应用
                const curAllMenu = this.allMenuData[curIndex];
                curAllMenu && this.removeData(curAllMenu.children, curModuleCode);
            } else {
                this.removeData(this.myMenuData.children, curModuleCode); // 我的应用
                this.allMenuData[curIndex].children.push(data);
            }
        }
    },
    methods: {
        // 获取我的收藏夹
        getMyMenu() {
            const url = '/load-favorites';
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
            const url = '/load-authorized-modules';
            const data = {
                appName: 'bms'
            };
            const requestAllMenu = (data) => request.post(url, data);
            requestAllMenu(data).then((res) => {
                this.allMenuData = formatTreeData(res.result, 'moduleCode', 'parentModuleCode');
                this.originMenuData = _.cloneDeep(this.allMenuData);
                // 根据moduleCode过滤已收藏的
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
        },
        // 保存
        save() {
            console.log('sss..');
            var _this = this;
            this.$vux.confirm.show({
                title: '是否保存吗?',
                onCancel() {
                    _this.$router.go(-1);
                },
                onConfirm() {
                    _this.updateMyMenu();
                }
            });
        },
        // post保存
        updateMyMenu() {
            const url = '/update-favorites';
            const data = {
                appName: 'bms',
                favorites: 'm0001' // todo：对接后用实际子菜单
            };
            const requestMyMenu = (data) => request.post(url, data); // requestMyMen() 返回一个promise
            requestMyMenu(data).then((res) => {
                if (res.retCode == 0) {
                    alert('更新成功'); // 用toast，返回上一级
                }
            });
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
