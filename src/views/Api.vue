<template>
    <div>
        <XHeader :title="title"></XHeader>
        <!-- 命名空间 -->
        <group title="nacos命名空间列表">
            <cell v-for="item in namespaces" :key="item.namespaceShowName" is-link :title="item.namespaceShowName"></cell>
        </group>
        <br />
    </div>
</template>

<script>
import { Cell, Group, XButton } from 'vux';
import XHeader from '../components/XHeader';
import request from '../utils/request';

export default {
    components: {
        XHeader,
        Group,
        XButton,
        Cell
    },
    data() {
        return {
            title: '命名空间',
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
                // 请求参数 ?id=1&&
                id: 1
            };
            const requestNamespace = (config) => request.get(url, config); //get的第二个参数与config合并
            requestNamespace({
                params,
                beforeSend: () => {
                    console.log(2);
                }
            }) // params 合并到对应 config.param
                .then((res) => {
                    this.namespaces = res.data;
                })
                .catch(() => {});
        }
    }
};
</script>

