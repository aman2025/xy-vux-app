<template>
    <div class="my-menu">
        <!-- my-menu -->
        <div class="sub-menu">
            <div class="sub-menu-item" v-for="(item, index) in myMenuData" :key="index" @click="goto(item.homeUrl)">
                <i></i>
                <span>{{ item.moduleName }}</span>
            </div>
        </div>
        <!-- //my-menu -->
    </div>
</template>

<script>
export default {
    components: {},
    props: ['myMenuData'],
    data() {
        return {};
    },
    computed: {},
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
.my-menu {
    height: 10rem !important;
}
</style>
