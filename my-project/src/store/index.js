import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        cart: [],
        orders: [],
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        addToCart(state, product) {
            state.cart.push(product);
        },
        removeFromCart(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
        },
        addOrder(state, order) {
            state.orders.push(order);
        },
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('setUser', null);
        },
    },
});