<template>
    <div>
        <div class="notice-container">
            <div v-for="item in noticeData" :key="item.id" class="notice-item" :class="{ 'notice-item-category': item.category == '2', readed: item.readed }" @click="linkto(item.path)">
                <div class="notice-item-title">
                    <i :class="{ 'icon-warn': item.isWarn }"></i>
                    <span>{{ item.title }}</span>
                    <div v-show="item.number" class="notice-item-title-num">
                        ( <em>{{ item.number }}</em> )
                    </div>
                </div>
                <div class="notice-item-content">
                    <div class="notice-item-content-left">
                        <span v-for="(t, i) in item.tabs" :key="i" class="notice-item-tab" :class="{ tabColor02: t.type == 2 }">{{ t.text }}</span>
                    </div>
                    <div class="notice-item-content-right">{{ item.time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['noticeData'],
    data() {
        return {};
    },
    methods: {
        linkto(path) {
            path && this.$router.push(path);
        }
    }
};
</script>
<style lang="scss">
.notice-container {
    padding: 0 0.15rem;
}
.notice-container .notice-item {
    padding: 0.1rem 0;
    border-bottom: 1px solid #f2f2f2;
}
.notice-container .notice-item.notice-item-category {
    margin-left: 0.15rem;
}
.notice-container .notice-item.notice-item-category .notice-item-title:after {
    content: '';
    display: block;
    width: 0.06rem;
    height: 0.06rem;
    border-radius: 50%;
    background-color: #f56565;
    position: absolute;
    top: 0.08rem;
    left: -0.15rem;
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
    padding-bottom: 0.05rem;
    color: #333;
}
.notice-container .notice-item .notice-item-title .notice-item-title-num em {
    color: #f5a623;
}
.notice-container .notice-item .notice-item-title i {
    display: none;
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.01rem 0 0 0;
}
.notice-container .notice-item .notice-item-title i.icon-warn {
    display: block;
    background-image: url(../assets/icon-warn.png);
    margin-right: 0.06rem;
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
    font-size: 0.12rem;
}
.notice-container .notice-item .notice-item-tab {
    height: 0.22rem;
    line-height: 0.22rem;
    border-radius: 0.11rem;
    padding: 0 0.12rem;
    background-color: #ecf3fc;
    margin-right: 0.1rem;
    font-size: 0.12rem;
    color: #3a90e2;
}
.notice-container .notice-item .notice-item-tab.tabColor02 {
    background-color: #fef6e9;
    color: #f5a92b;
}
</style>
