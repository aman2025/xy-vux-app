<template>
    <div>
        <div class="app-list">
            <h3 v-show="title">{{ title }}</h3>
            <div>
                <ul>
                    <li v-for="(item, index) in apps" :key="index">
                        <i></i>
                        <span>{{ item.name }}</span>
                        <em :class="{ 'icon-delete': selected }"></em>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['apps', 'title', 'selected'],
    data() {
        return {};
    },
    methods: {}
};
</script>
<style lang="scss">
.app-list {
    padding: 0 0 1rem;
}
.app-list h3 {
    font-weight: normal;
    font-size: 1.4rem;
    padding-bottom: 1rem;
}
.app-list ul {
    display: flex;
    flex-flow: row wrap;
}
.app-list ul li {
    flex: 0 0 calc(25% - 0.75rem);
    border-radius: 0.6rem;
    background-color: #eeeeee;
    color: #666;
    margin-right: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    position: relative;
}
.app-list ul li:nth-child(4n) {
    margin-right: 0;
}

.app-list ul li i {
    width: 4rem;
    height: 4rem;
    background-image: url(../assets/icon-func01.png);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 auto;
}
.app-list ul li em {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    width: 1.6rem;
    height: 1.6rem;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 auto;
    background-image: url(../assets/add.png);
}
.app-list ul li em.icon-delete {
    background-image: url(../assets/delete.png);
}
.app-list ul li span {
    padding: 0.2rem 0 0;
}
</style>
