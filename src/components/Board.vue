<template>
    <div>
        <div class="board" v-for="item in contentData" :key="item.moduleCode">
            <h3>{{ item.moduleName }}</h3>
            <div>
                <ul>
                    <li v-for="(obj, index) in item.children" :key="index" @click="linkto(obj.homeUrl)">
                        <i :style="obj.iconUrl ? 'background-image:url(' + getIconUrl(obj.iconUrl) + ')' : ''"></i>
                        <span>{{ obj.moduleName }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import request from '../utils/request';
import { formatTreeData,PageUtils } from '../utils/util';

export default {
    components: {},
    props: ['contentUrl'],
    data() {
        return {
            contentData: [{ children: [] }]
        };
    },
    mounted() {
        // 获取菜单
        this.getMenuOfTpl(this.contentUrl);
    },
    methods: {
        linkto(path) {
            if(path.charAt(0) == '/') {
                path = path.substr(1);
            }
            window.location.href =  PageUtils.getPageGateWay() + path;
            // path && this.$router.push(path);
        },
        getIconUrl(iconUrl) {
            if(iconUrl.charAt(0) == '/') {
                iconUrl = iconUrl.substr(1);
            }
          return  PageUtils.getPageGateWay() + iconUrl;
        },
        // 门户模板是menu数据
        getMenuOfTpl(url) {
            const requestTpl = () => request.post(url);
            requestTpl()
                .then((res) => {
                    this.contentData = formatTreeData(res.result, 'moduleCode', 'parentModuleCode');
                })
                .catch(() => {});
        }
    }
};
</script>
<style lang="scss">
.board {
    padding: 1rem 1.5rem;
}
.board h3 {
    font-weight: normal;
    font-size: 1.4rem;
    padding-bottom: 1rem;
}
.board ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.board ul li {
    flex: 0 0 calc(50% - 1rem);
    border-radius: 0.6rem;
    background-color: #eeeeee;
    color: #666;
    margin-right: 1rem;
    margin-bottom: 0.8rem;
    padding: 1rem 0 1rem 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
}
.board ul li:nth-child(2n) {
    margin-right: 0;
}
.board ul li i {
    width: 2rem;
    height: 2rem;
    background-image: url(../assets/icon-i01.png);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0.3rem 0.8rem 0 0;
}
.board ul li span {
    padding: 0.2rem 0 0;
}
</style>
