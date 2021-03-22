<template>
    <div>
        <div class="notice-container">
            <div v-for="(item, index) in contentData.rows" :key="index" class="notice-item" :class="{ readed: item.status == 'UNREAD' }" @click="linkto(item.detailUrl)">
                <div class="notice-item-title">
                    <i :class="{ 'icon-warn': item.level }"></i>
                    <span>{{ item.title }}</span>
                    <div v-show="item.badge" class="notice-item-title-num">
                        ( <em>{{ item.badge }}</em> )
                    </div>
                </div>
                <div class="notice-item-content">
                    <div class="notice-item-content-left">
                        <span v-for="(text, i) in item.tags" :key="i" class="notice-item-tag">{{ text }}</span>
                    </div>
                    <div class="notice-item-content-right">{{ item.time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import request from '../utils/request';

export default {
    components: {},
    props: ['contentUrl'],
    data() {
        return {
            contentData: { rows: [] }
        };
    },
    mounted() {
        this.getListOfTpl(this.contentUrl);
    },
    methods: {
        linkto(path) {
            path && this.$router.push(path);
        },
        // 门户模板是list数据
        getListOfTpl(url) {
            const data = {
                pageNum: 1,
                pageSize: 10
            };
            const requestTpl = (data) => request.post(url, data); // todo: mock环境用get，正式环境post
            requestTpl(data)
                .then((res) => {
                    this.contentData = res.result;
                    console.log(this.contentData);
                })
                .catch(() => {});
        }
    }
};
</script>
<style lang="scss">
.notice-container {
    padding: 0 1.5rem;
}
.notice-container .notice-item {
    padding: 1rem 0;
    border-bottom: 1px solid #f2f2f2;
}
.notice-container .notice-item.notice-item-category {
    margin-left: 1.5rem;
}
.notice-container .notice-item.notice-item-category .notice-item-title:after {
    content: '';
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: #f56565;
    position: absolute;
    top: 0.8rem;
    left: -1.5rem;
}
.notice-container .notice-item.notice-item-category.readed .notice-item-title:after {
    opacity: 0.5;
}
.notice-container .notice-item.notice-item-category.readed .notice-item-content .notice-item-content-right,
.notice-container .notice-item.notice-item-category.readed .notice-item-title {
    color: #aaa;
}
.notice-container .notice-item .notice-item-title {
    position: relative;
    display: flex;
    padding-bottom: 0.5rem;
    color: #333;
}
.notice-container .notice-item .notice-item-title .notice-item-title-num em {
    color: #f5a623;
}
.notice-container .notice-item .notice-item-title i {
    display: none;
    width: 2rem;
    height: 2rem;
    margin: 0.1rem 0 0 0;
}
.notice-container .notice-item .notice-item-title i.icon-warn {
    display: block;
    background-image: url(../assets/icon-warn.png);
    margin-right: 0.6rem;
}
.notice-container .notice-item .notice-item-content {
    display: flex;
}
.notice-container .notice-item .notice-item-content div {
    flex: 1;
}
.notice-container .notice-item .notice-item-content .notice-item-content-left {
    display: flex;
}
.notice-container .notice-item .notice-item-content .notice-item-content-right {
    text-align: right;
    color: #999;
    font-size: 1.2rem;
}
.notice-container .notice-item .notice-item-tag {
    height: 2.2rem;
    line-height: 2.2rem;
    border-radius: 1.1rem;
    padding: 0 1.2rem;
    background-color: #ecf3fc;
    margin-right: 1rem;
    font-size: 1.2rem;
    color: #3a90e2;
}
.notice-container .notice-item .notice-item-tag.tabColor02 {
    background-color: #fef6e9;
    color: #f5a92b;
}
</style>
