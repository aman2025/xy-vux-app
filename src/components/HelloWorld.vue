<template>
    <div class="hello">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                des_hello: ''
            }
        },
        components: {},
        watch: {},
        mounted() {
            this.des_hello = this.$store.state.des_hello;
        },
        methods: {},
        created() {
        },
        computed: {}
    }
</script>

<style lang="scss">
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
