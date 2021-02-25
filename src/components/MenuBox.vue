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
            <div v-for="item in menus" :key="item.id" v-show="activeId == item.id">
                <SubMenu :subMenuData="subMenuData.level2" />
            </div>
            <div v-show="activeId == '999'">
                <SubMenu :subMenuData="subMenuData.level2" />
            </div>
        </div>
    </div>
</template>

<script>
import SubMenu from '../components/SubMenu';

export default {
    components: {
        SubMenu
    },
    props: [],
    data() {
        return {
            menus: [
                {
                    id: '1',
                    level1: '菜单名称01',
                    level2: [
                        { icon: 'item01', name: '01功能01' },
                        { icon: 'item01', name: '01功能02' },
                        { icon: 'item01', name: '01功能03' },
                        { icon: 'item01', name: '01功能04' },
                        { icon: 'item01', name: '01功能05' },
                        { icon: 'item01', name: '01功能06' },
                        { icon: 'item01', name: '01功能07' },
                        { icon: 'item01', name: '01功能08' }
                    ]
                },
                {
                    id: '2',
                    level1: '菜单名称02',
                    level2: [
                        { icon: 'item01', name: '02功能01' },
                        { icon: 'item01', name: '02功能02' },
                        { icon: 'item01', name: '02功能03' },
                        { icon: 'item01', name: '02功能04' },
                        { icon: 'item01', name: '02功能05' }
                    ]
                },
                {
                    id: '3',
                    level1: '菜单名称03',
                    level2: [
                        { icon: 'item01', name: '03功能01' },
                        { icon: 'item01', name: '03功能02' },
                        { icon: 'item01', name: '03功能03' },
                        { icon: 'item01', name: '03功能04' },
                        { icon: 'item01', name: '03功能05' }
                    ]
                },
                {
                    id: '4',
                    level1: '菜单名称04',
                    level2: [
                        { icon: 'item01', name: '04功能01' },
                        { icon: 'item01', name: '04功能02' },
                        { icon: 'item01', name: '04功能03' },
                        { icon: 'item01', name: '04功能04' },
                        { icon: 'item01', name: '04功能06' },
                        { icon: 'item01', name: '04功能06' }
                    ]
                },
                {
                    id: '5',
                    level1: '菜单名称05',
                    level2: [
                        { icon: 'item01', name: '05功能01' },
                        { icon: 'item01', name: '05功能02' },
                        { icon: 'item01', name: '05功能03' },
                        { icon: 'item01', name: '05功能04' },
                        { icon: 'item01', name: '05功能05' },
                        { icon: 'item01', name: '05功能06' },
                        { icon: 'item01', name: '05功能07' },
                        { icon: 'item01', name: '05功能08' }
                    ]
                },
                {
                    id: '6',
                    level1: '菜单名称06',
                    level2: [
                        { icon: 'item01', name: '06功能01' },
                        { icon: 'item01', name: '06功能02' },
                        { icon: 'item01', name: '06功能03' },
                        { icon: 'item01', name: '06功能04' },
                        { icon: 'item01', name: '06功能06' },
                        { icon: 'item01', name: '06功能06' }
                    ]
                }
            ],
            activeId: '2',
            myMenus: {
                level2: [
                    { icon: 'item01', name: '我的功能01' },
                    { icon: 'item01', name: '我的功能02' },
                    { icon: 'item01', name: '全部' }
                ]
            }
        };
    },
    computed: {
        subMenuData: function () {
            console.log(this);
            const _this = this;
            if (this.activeId == '999') {
                return this.myMenus;
            } else {
                return this.menus.find(function (m) {
                    return m.id == _this.activeId;
                });
            }
        }
    },
    methods: {
        changeMenu(id) {
            if (id == '999') {
                this.activeId = '999';
            } else {
                this.activeId = id;
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
