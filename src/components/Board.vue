<template>
    <div>
        <div class="board">
            <h3>分类一</h3>
            <div>
                <ul>
                    <li>
                        <i></i>
                        <span>运营执行情况总览</span>
                    </li>
                    <li>
                        <i></i>
                        <span>资金交收-证券</span>
                    </li>
                    <li>
                        <i></i>
                        <span>存管业务监控</span>
                    </li>
                    <li>
                        <i></i>
                        <span>清算业务监控</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="board">
            <h3>分类二</h3>
            <div>
                <ul>
                    <li>
                        <i></i>
                        <span>监控名称01</span>
                    </li>
                    <li>
                        <i></i>
                        <span>监控名称02</span>
                    </li>
                    <li>
                        <i></i>
                        <span>监控名称03</span>
                    </li>
                    <li>
                        <i></i>
                        <span>监控名称04</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    props: {},
    data() {
        return {
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss">
.board {
    padding: 10px 15px;
}
.board h3 {
    font-weight: normal;
    font-size: 16px;
    padding-bottom: 10px;
}
.board ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.board ul li {
    flex: 0 0 calc(50% - 10px);
    border-radius: 6px;
    background-color: #eeeeee;
    color: #666;
    margin-right: 10px;
    margin-bottom: 8px;
    padding: 15px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
}
.board ul li:nth-child(2n) {
    margin-right: 0;
}
.board ul li i {
    width: 22px;
    height: 22px;
    background-image: url(../assets/icon-i01.png);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 3px 8px 0 0;
}
</style>
