<template>
    <div class="menu-box">
        <div class="menu-my">我的</div>
        <div class="menu-container">
            <div class="menu-list">
                <div class="menu-item" v-for="item in menus" :key="item.id">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    props: [],
    data() {
        return {
            menus: [
                {id: '1', name: '菜单名称01'},
                {id: '2', name: '菜单名称02'},
                {id: '3', name: '菜单名称03'},
                {id: '4', name: '菜单名称04'},
                {id: '5', name: '菜单名称05'},
                {id: '6', name: '菜单名称06'}
                ]
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss">
.menu-box {
    margin-top: -0.28rem;
    position: relative;
}
.menu-box .menu-my {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.6rem;
    text-align: center;
    z-index: 9;
    color: #fff;
}
.menu-box .menu-container {
    overflow: auto;
    background-color: rgba(0, 113, 225, 0.1);
    padding: 0 0 0 0.6rem;
    color: #fff;
}
.menu-box .menu-container .menu-list {
    display: flex;
    -webkit-box-align: center;
    justify-content: flex-start;
    overflow: auto;
}
.menu-box .menu-container .menu-list .menu-item {
    flex: 0 0 1rem;
    height: 0.28rem;
    text-align: center;
    white-space: nowrap;
}
</style>
