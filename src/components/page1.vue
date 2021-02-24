<template>
    <div class="page1">
        <h1>这是page1</h1>
        <h2>描述:{{des1}}</h2>
        <button v-on:click="changePage">{{msg}}</button>
    </div>
</template>

<script>
    export default {
        name: 'page1',
        data() {
            return {
                msg: '切换至page2',
                des1: ''
            }
        },
        watch: {},
        mounted() {
            this.des1 = this.$store.state.page1_des;
        },
        methods: {
            changePage:function(){
                this.$router.push({
                    name: 'page2'
                })
            }
        },
        created() {
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>

</style>
