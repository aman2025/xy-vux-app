<template>
    <div>
        <!-- sub-menu -->
        <swiper v-model="swiperItemIndex" dots-position="center" :show-dots="swiperItemTotal != 1">
            <swiper-item v-for="(item, i) in swiperItemTotal" :key="i">
                <div class="sub-menu">
                    <div class="sub-menu-item" v-for="(item, index) in singleSwiperData" :key="index" @click="goto(item.homeUrl)">
                        <i :class="item.icon"></i>
                        <span>{{ item.moduleName }}</span>
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
            // 根据二级菜单数据计算swiperItem个数, this.subMenuData 异步获取, 默认空数组
            if (this.subMenuData.length) {
                return Math.ceil(this.subMenuData.length / this.number);
            }
        },
        singleSwiperData: function () {
            // 计算当前swiperItem中的数据个数
            const swiperIndex = this.swiperItemIndex;
            if (this.subMenuData.length) {
                return this.subMenuData.slice(swiperIndex * this.number, (swiperIndex + 1) * this.number);
            }
        }
    },
    methods: {
        goto(homeUrl) {
            this.$router.push(homeUrl);
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
    padding: 1.5rem 0 0.5rem;
}

.sub-menu .sub-menu-item {
    flex: 0 0 25%;
    text-align: center;
    padding: 0 0.5rem 1.2rem;
}

.sub-menu .sub-menu-item i {
    display: block;
    width: 3.2rem;
    height: 3.2rem;
    margin: 0 auto;
}

.sub-menu .sub-menu-item .item01 {
    background-image: url(../assets/icon-func01.png);
}
.sub-menu .sub-menu-item .item100 {
    background-image: url(../assets/icon-all.png);
}
.my-swiper .vux-slider .vux-swiper {
    height: 10rem !important;
}
</style>
