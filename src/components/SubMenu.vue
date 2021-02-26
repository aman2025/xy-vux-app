<template>
    <div>
        <!-- sub-menu -->
        <div class="sub-menu">
            <!-- <button @click="goto">goto</button> -->
            <a href="#" v-for="(item, index) in subMenuData" :key="index">
                <i :class="item.icon"></i>
                <span @click="goto">{{ item.name }}</span>
            </a>
        </div>
        <!-- //sub-menu -->
    </div>
</template>

<script>
export default {
    components: {},
    props: ['subMenuData'],
    data() {
        return {};
    },
    methods: {
        goto() {
            this.$router.push('./manageApp');
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

.sub-menu a {
    flex: 0 0 25%;
    text-align: center;
    padding-bottom: 0.12rem;
}

.sub-menu a i {
    display: block;
    width: 0.32rem;
    height: 0.32rem;
    margin: 0 auto;
}

.sub-menu a .item01 {
    background-image: url(../assets/icon-func01.png);
}
.sub-menu a .item100 {
    background-image: url(../assets/icon-all.png);
}
</style>
