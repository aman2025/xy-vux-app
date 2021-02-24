import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        page1_des: '这是page1的store内容, /page1',
        page2_des: '这是page2的store内容, /page2',
        des_hello: '这是vuex中des_hello属性的内容'
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
});
