<template>
    <div>
        <XHeader :title="title"></XHeader>
        <!-- 命名空间 -->
        <group title="nacos命名空间列表">
            <cell title="a" is-link></cell>
            <cell v-for="item in namespaces" :key="item.namespaceShowName" is-link :title="item.namespaceShowName"></cell>
        </group>
        <br />
        <divider>分割线</divider>
        <br />
        <!-- 新建命名空间 -->
        <group title="新建命名空间">
            <x-input title="ID"></x-input>
            <x-input title="名称"></x-input>
            <x-input title="描述"></x-input>
        </group>
        <div @click="addNamespace" style="padding: 15px">
            <x-button type="primary">添加命名空间</x-button>
        </div>
        <!-- todo:nacos用户列表 -->
    </div>
</template>

<script>
import { Cell, Group, XInput, Divider, XButton } from 'vux';
import XHeader from '../components/XHeader';
import request from '../utils/request';

export default {
    components: {
        XHeader,
        Group,
        XInput,
        Divider,
        XButton,
        Cell
    },
    data() {
        return {
            title: 'Api',
            namespaces: []
        };
    },
    mounted() {
        this.getNamespace();
    },
    methods: {
        // 请求命名空间列表
        getNamespace() {
            const url = 'v1/console/namespaces';
            const params = {
                // 请求参数 confing.params
                id: 1
            };
            const requestNamespace = (params) => request.get(url, params);
            requestNamespace({ params })
                .then((res) => {
                    console.log(res);
                    this.namespaces = res.data;
                })
                .catch(() => {});
        },
        // 添加命名空间post请求，不成功，原nacos非axios请求
        addNamespace() {
            console.log('addNamespace...');
            const url = 'v1/console/namespaces';
            const nsData = { customNamespaceId: 1, namespaceName: 'ns1', namespaceDesc: 'miaoshu', namespaceId: 20 };
            const newNamespace = (data) => request.post(url, data);
            newNamespace(nsData)
                .then((res) => {
                    console.log(res);
                })
                .catch(() => {});
        }
    }
};
</script>

