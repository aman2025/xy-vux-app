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
                <span>功能名称01</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称01</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称01</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称01</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称01</span>
            </a>
            <a href="#">
                <i class="item01"></i>
                <span>功能名称01</span>
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
}

.entry a {
    margin-top: 0.2rem;
    flex: 0 0 25%;
    text-align: center;
    font-size: 0.22rem;
    color: #7d7979;
}

.entry a i {
    display: block;
    width: 0.72rem;
    height: 0.72rem;
    margin: 0 auto 0;
}

.entry a .item01 {
    background-image: url(../assets/icon-func01.png);
}
</style>
