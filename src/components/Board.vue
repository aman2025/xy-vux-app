<template>
    <div>
        <div class="board">
            <h3>分类一</h3>
            <div>
                <ul>
                    <li v-for="(item, index) in data01" :key="index" @click="linkto(item.path)">
                        <i></i>
                        <span>{{ item.title }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="board">
            <h3>分类二</h3>
            <div>
                <ul>
                    <li v-for="(item, index) in data02" :key="index">
                        <i></i>
                        <span>{{ item.title }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            data01: [
                { title: '运营执行情况总览', path: './boardDetail' },
                { title: '资金交收-证券', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '存管业务监控', path: './boardDetail' },
                { title: '清算业务监控', path: './boardDetail' }
            ],
            data02: [
                { title: '监控名称01', path: './boardDetail' },
                { title: '监控名称02', path: './boardDetail' },
                { title: '监控名称03', path: './boardDetail' },
                { title: '监控名称04', path: './boardDetail' }
            ]
        };
    },
    methods: {
        linkto(path) {
            path && this.$router.push(path);
        }
    }
};
</script>
<style lang="scss">
.board {
    padding: 1rem 1.5rem;
}
.board h3 {
    font-weight: normal;
    font-size: 1.4rem;
    padding-bottom: 1rem;
}
.board ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.board ul li {
    flex: 0 0 calc(50% - 1rem);
    border-radius: 0.6rem;
    background-color: #eeeeee;
    color: #666;
    margin-right: 1rem;
    margin-bottom: 0.8rem;
    padding: 1rem 0 1rem 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
}
.board ul li:nth-child(2n) {
    margin-right: 0;
}
.board ul li i {
    width: 2rem;
    height: 2rem;
    background-image: url(../assets/icon-i01.png);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0.3rem 0.8rem 0 0;
}
.board ul li span {
    padding: 0.2rem 0 0;
}
</style>
