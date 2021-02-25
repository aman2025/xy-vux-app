<template>
    <div>
        <div class="app-list">
            <h3 v-show="title">{{ title }}</h3>
            <div>
                <ul>
                    <li v-for="(item, index) in apps" :key="index">
                        <i></i>
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['apps', 'title'],
    data() {
        return {};
    },
    methods: {}
};
</script>
<style lang="scss">
.app-list {
    padding: 0 0 0.1rem;
}
.app-list h3 {
    font-weight: normal;
    font-size: 0.14rem;
    padding-bottom: 0.1rem;
}
.app-list ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
}
.app-list ul li {
    flex: 0 0 calc(25% - 0.1rem);
    border-radius: 0.06rem;
    background-color: #eeeeee;
    color: #666;
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    padding: 0.1rem 0.05rem;
}
.app-list ul li:nth-child(4n) {
    margin-right: 0;
    flex: 0 0 25%;
}
.app-list ul li i {
    width: 0.4rem;
    height: 0.4rem;
    background-image: url(../assets/icon-func01.png);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 auto;
}
.app-list ul li span {
    padding: 0.02rem 0 0;
}
</style>
