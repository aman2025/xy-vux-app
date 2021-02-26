<template>
    <div :class="{ 'my-swiper': menuType == 'my' }">
        <!-- sub-menu -->
        <swiper v-model="swiperItemIndex" dots-position="center" :show-dots="swiperItemTotal != 1">
            <swiper-item v-for="(item, i) in swiperItemTotal" :key="i">
                <div class="sub-menu">
                    <div class="sub-menu-item" v-for="(item, index) in singleSwiperData" :key="index" @click="goto(item.path)">
                        <i :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </swiper-item>
        </swiper>
        <!-- //sub-menu -->
    </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux';
export default {
    components: {
        Swiper,
        SwiperItem
    },
    props: ['subMenuData', 'menuType'],
    data() {
        return {
            swiperItemIndex: 0,
            number: 8
        };
    },
    computed: {
        swiperItemTotal: function () {
            // 根据二级菜单数据计算swiperItem个数
            return Math.ceil(this.subMenuData.length / this.number);
        },
        singleSwiperData: function () {
            // 计算当前swiperItem中的数据个数
            const swiperIndex = this.swiperItemIndex;
            return this.subMenuData.slice(swiperIndex * this.number, (swiperIndex + 1) * this.number);
        }
    },
    methods: {
        goto(path) {
            this.$router.push(path);
        }
    }
};
</script>
<style lang="scss">
/* sub-menu */
.sub-menu {
    background-color: #fff;
    display: flex;
    -webkit-box-align: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0.15rem 0 0.05rem;
}

.sub-menu .sub-menu-item {
    flex: 0 0 25%;
    text-align: center;
    padding-bottom: 0.12rem;
}

.sub-menu .sub-menu-item i {
    display: block;
    width: 0.32rem;
    height: 0.32rem;
    margin: 0 auto;
}

.sub-menu .sub-menu-item .item01 {
    background-image: url(../assets/icon-func01.png);
}
.sub-menu .sub-menu-item .item100 {
    background-image: url(../assets/icon-all.png);
}
.my-swiper .vux-slider .vux-swiper {
    height: 1rem !important;
}
</style>
