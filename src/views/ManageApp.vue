<template>
    <div>
        <XHeader :title="title" :hasclose="true" :hassave="true" :left-options="leftOptions"></XHeader>
        <div class="manage-app-wrap">
            <div class="manage-app shadow-bottom">
                <h3>我的应用</h3>
                <AppList :apps="myApps.data" :title="myApps.title" :selected="true" />
                <divider>最多添加11个应用</divider>
            </div>
            <div class="manage-app shadow-top">
                <h3>全部应用</h3>
                <AppList :apps="zhiGuanApps.data" :title="zhiGuanApps.title" />
                <AppList :apps="faRenApps.data" :title="faRenApps.title" />
            </div>
        </div>
    </div>
</template>

<script>
import { Divider } from 'vux';
import XHeader from '../components/XHeader';
import AppList from '../components/AppList';
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
            myApps: {
                data: [{ name: '资管业务' }, { name: '法人业务' }, { name: '经纪业务' }, { name: 'PB业务' }, { name: '法人系统' }, { name: '资金结算' }],
                title: ''
            },
            zhiGuanApps: {
                data: [{ name: '业务名称01' }, { name: '业务名称02' }, { name: '业务名称03' }, { name: '业务名称04' }, { name: '业务名称05' }, { name: '业务名称06' }, { name: '业务名称07' }, { name: '业务名称08' }],
                title: '资管业务'
            },
            faRenApps: {
                data: [{ name: '业务名称01' }, { name: '业务名称02' }, { name: '业务名称03' }, { name: '业务名称04' }, { name: '业务名称05' }, { name: '业务名称06' }, { name: '业务名称07' }, { name: '业务名称08' }],
                title: '法人业务'
            },
            leftOptions: { showBack: false }
        };
    }
};
</script>
<style lang="scss">
.manage-app-wrap {
    border-top: 1px solid #ccc;
}
.manage-app {
    padding: 0.1rem;
}
.manage-app h3 {
    font-size: 0.16rem;
    font-weight: bold;
    color: #333;
    padding: 0 0 0.1rem;
}
</style>
