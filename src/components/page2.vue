<template>
    <div class="page2">
        <h1>这是page2</h1>
        <h2>描述:{{des2}}</h2>
        <button v-on:click="changePage">{{msg}}</button>
    </div>
</template>

<script>
    export default {
        name: 'page1',
        data() {
            return {
                msg: '切换至page1',
                des2: ''
            }
        },
        watch: {},
        mounted() {
            this.des2 = this.$store.state.page2_des;
        },
        methods: {
            changePage:function(){
                this.$router.push({
                    name: 'page1'
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
