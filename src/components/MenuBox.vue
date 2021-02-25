<template>
    <div class="menu">
        <div class="menu-box">
            <div class="menu-my" :class="{ 'menu-selected': activeId == '999' }" @click="changeMenu('999')">我的</div>
            <div class="menu-container">
                <div class="menu-list">
                    <div class="menu-item" :class="{ 'menu-selected': item.id == activeId }" @click="changeMenu(item.id)" v-for="item in menus" :key="item.id">{{ item.level1 }}</div>
                </div>
            </div>
        </div>
        <div class="menu-content">
            <div v-show="activeId == '1'">菜单名称01</div>
            <div v-show="activeId == '2'">菜单名称02</div>
            <div v-show="activeId == '3'">菜单名称03</div>
            <div v-show="activeId == '4'">菜单名称04</div>
            <div v-show="activeId == '5'">菜单名称05</div>
            <div v-show="activeId == '6'">菜单名称06</div>
            <div v-show="activeId == '999'">我的</div>
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
                {id: '1', level1: '菜单名称01', subMenu: []},
                {id: '2', level1: '菜单名称02', subMenu: []},
                {id: '3', level1: '菜单名称03', subMenu: []},
                {id: '4', level1: '菜单名称04', subMenu: []},
                {id: '5', level1: '菜单名称05', subMenu: []},
                {id: '6', level1: '菜单名称06', subMenu: []}
                ],
            activeId: '2'
        };
    },
    methods: {
        changeMenu(id){
            if(id == '999'){
               this.activeId = '999'
            }else{
                this.activeId = id
            }
        }
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
    height: 0.28rem;
    line-height: 0.28rem;
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
    line-height: 0.28rem;
    text-align: center;
    white-space: nowrap;
}
.menu-selected {
    background-color: #1280f1;
    color: #fff;
}
</style>
