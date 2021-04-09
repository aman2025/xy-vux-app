import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuActiveId: '999',
        tabActiveIndex: 0,
        isLoad: false,
        appName: '',
        terminal : ''
    },
    getters: {},
    mutations: {
        setTabActiveIndex(state, i) {
            state.tabActiveIndex = i;
        },
        setMenuActiveId(state, id) {
            state.menuActiveId = id;
        },
        setIsLoad(state, visible) {
            state.isLoad = visible;
        },
        setAppName(state, name) {
            state.appName = name;
        },
        setTerminal(state, name) {
            state.terminal = name;
        }
    },
    actions: {},
    modules: {}
});
