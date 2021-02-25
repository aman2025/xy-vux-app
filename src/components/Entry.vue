<template>
    <div>
        <!-- entry -->
        <div class="entry">
            <a href="#">
                <i class="item01"></i>
                <span>功能名称01</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称02</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称03</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称04</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称05</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称06</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称07</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称08</span>
            </a>
        </div>
        <!-- //entry -->
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
/* entry */
.entry {
    background-color: #fff;
    display: flex;
    -webkit-box-align: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0.15rem 0 0.05rem;
}

.entry a {
    flex: 0 0 25%;
    text-align: center;
    padding-bottom: 0.12rem;
}

.entry a i {
    display: block;
    width: 0.32rem;
    height: 0.32rem;
    margin: 0 auto;
}

.entry a .item01 {
    background-image: url(../assets/icon-func01.png);
}
</style>
