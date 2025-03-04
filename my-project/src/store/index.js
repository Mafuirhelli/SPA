import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        cart: [],
        orders: [],
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        CLEAR_USER(state) {
            state.user = null;
        },
        SET_CART(state, cart) {
            state.cart = cart;
        },
        SET_ORDERS(state, orders) {
            state.orders = orders;
        },
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('/login', credentials);
                commit('SET_USER', { token: response.data.data.user_token });
            } catch (error) {
                throw new Error(error.response?.data?.error?.message || 'Ошибка авторизации');
            }
        },
        async register({ commit }, userData) {
            try {
                const response = await axios.post('/signup', userData);
                commit('SET_USER', { token: response.data.data.user_token });
            } catch (error) {
                throw new Error(error.response?.data?.error?.message || 'Ошибка регистрации');
            }
        },
        async logout({ commit }) {
            await axios.get('/logout');
            commit('CLEAR_USER');
        },
        async fetchCart({ commit }) {
            const response = await axios.get('/cart');
            commit('SET_CART', response.data.data);
        },
        async fetchOrders({ commit }) {
            const response = await axios.get('/order');
            commit('SET_ORDERS', response.data.data);
        },
    },
});