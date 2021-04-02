<template>
    <div>
        <div class="notice-container">
            <!-- 分类 -->
            <div v-for="(value, key, index) in contentData" :key="index" class="notic-category">
                <h3 v-show="key && key != 'undefined'">{{ key }}</h3>
                <div v-for="(item, index) in value" :key="index" class="notice-item" :class="{ readed: item.status == 'READ' }" @click="linkto(item.detailUrl)">
                    <div class="notice-item-title">
                        <i v-if="['1', '2', '3'].includes(item.level)" :class="'icon-level0' + item.level"></i>
                        <i v-else class="icon-read"></i>
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

            <!-- 分类 -->
        </div>
    </div>
</template>

<script>
import request from '../utils/request';
import _ from 'lodash';

export default {
    name: 'Notice',
    components: {},
    props: ['contentUrl'],
    data() {
        return {
            contentData: {}
        };
    },
    mounted() {
        this.getListOfTpl(this.contentUrl);
        // 监听滚动，
        window.addEventListener('scroll', this.scrollEvent);
    },
    methods: {
        linkto(path) {
            // path && this.$router.push(path);
            window.location.href = path;
        },
        // 门户模板是list数据
        getListOfTpl(url) {
            const data = {
                pageNum: 1,
                pageSize: 10
            };
            const requestTpl = (data) => request.post(url, data);
            requestTpl(data)
                .then((res) => {
                    const result = res.result || {};
                    this.contentData = _.groupBy(result.rows, 'category');
                    this.total = result.total;
                    this.totalBadge = result.totalBadge;
                })
                .catch(() => {});
        },
        // 滚动到底部事件
        scrollEvent() {
            var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
            var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
            var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
            if (scr + clientHeight + 10 >= scrHeight) {
                console.log('a');
            }
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollEvent);
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
    width: 1.6rem;
    height: 1.6rem;
    margin: 0.3rem 0 0 0;
}
.notice-container .notice-item .notice-item-title i {
    display: block;
    margin-right: 0.6rem;
}
.notice-container .notice-item .notice-item-title i.icon-level01 {
    background-image: url(../assets/icon-level01.png);
}
.notice-container .notice-item .notice-item-title i.icon-level02 {
    background-image: url(../assets/icon-level02.png);
}
.notice-container .notice-item .notice-item-title i.icon-level03 {
    background-image: url(../assets/icon-level03.png);
}
.notice-container .notice-item .notice-item-title i.icon-read {
    background-image: url(../assets/icon-read.png);
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
.notice-container .notice-item.readed .notice-item-content,
.notice-container .notice-item.readed .notice-item-title {
    opacity: 0.39;
}
.notice-container .notic-category h3 {
    font-size: 1.6rem;
    font-weight: bold;
    color: #333;
    padding: 2.1rem 0.5rem 0.5rem 0;
}
</style>
