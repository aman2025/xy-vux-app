<template>
    <div>
        <div class="notice-container">
            <div class="notice-item">
                <div class="notice-item-title">
                    <i class="icon-warn"></i>
                    <span>资金凭证审批</span>
                    <div class="notice-item-title-num">(<em>5</em>)</div>
                </div>
                <div class="notice-item-content">
                    <div class="notice-item-content-left">
                        <span class="notice-item-tab">标签01</span>
                    </div>
                    <div class="notice-item-content-right">5分钟</div>
                </div>
            </div>
            <div class="notice-item">
                <div class="notice-item-title">
                    <i></i>
                    <span>划款强制确认复核</span>
                    <div class="notice-item-title-num">(<em>2</em>)</div>
                </div>
                <div class="notice-item-content">
                    <div class="notice-item-content-left">
                        <span class="notice-item-tab">标签01</span>
                    </div>
                    <div class="notice-item-content-right">10分钟</div>
                </div>
            </div>
            <div class="notice-item">
                <div class="notice-item-title">
                    <i></i>
                    <span>直销退款申请复核</span>
                    <div class="notice-item-title-num">(<em>2</em>)</div>
                </div>
                <div class="notice-item-content">
                    <div class="notice-item-content-left">
                        <span class="notice-item-tab">标签01</span>
                    </div>
                    <div class="notice-item-content-right">2021-01-08 10:00:00</div>
                </div>
            </div>
            <div class="notice-item">
                <div class="notice-item-title">
                    <i></i>
                    <span>待办事项名称02</span>
                    <div class="notice-item-title-num">(<em>3</em>)</div>
                </div>
                <div class="notice-item-content">
                    <div class="notice-item-content-left">
                        <span class="notice-item-tab type02">标签02</span>
                    </div>
                    <div class="notice-item-content-right">2021-01-08 10:00:00</div>
                </div>
            </div>
            <div class="notice-item">
                <div class="notice-item-title">
                    <i></i>
                    <span>待办事项名称03</span>
                    <div class="notice-item-title-num">(<em>8</em>)</div>
                </div>
                <div class="notice-item-content">
                    <div class="notice-item-content-left">
                        <span class="notice-item-tab type02">标签02</span>
                    </div>
                    <div class="notice-item-content-right">2021-01-08 10:00:00</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { XHeader } from 'vux';

export default {
    components: {
        
    },
    props: {
    },
    data() {
        return {
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss">
.notice-container {
    padding: 0;
}
.notice-container .notice-item {
    padding: 0.1rem 0.1rem;
    border-bottom: 1px solid #f2f2f2;
}
.notice-container .notice-item .notice-item-title {
    display: flex;
    padding-bottom: 0.1rem;
    color: #333;
}
.notice-container .notice-item .notice-item-title .notice-item-title-num {
    color: #f5a623;
}
.notice-container .notice-item .notice-item-title .icon-warn {
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.04rem 0.06rem 0 0;
    background-image: url(../assets/icon-warn.png);
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
    font-size: 0.14rem;
}
.notice-container .notice-item .notice-item-tab {
    height: 0.26rem;
    line-height: 0.26rem;
    border-radius: 0.13rem;
    padding: 0 0.15rem;
    background-color: #ecf3fc;
    margin-right: 0.1rem;
    font-size: 0.14rem;
    color: #3a90e2;
}
.notice-container .notice-item .notice-item-tab.type02 {
    background-color: #fef6e9;
    color: #f5a92b;
}
</style>
