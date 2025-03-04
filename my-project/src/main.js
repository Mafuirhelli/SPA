import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

// Настройка axios для использования Bearer Token
axios.defaults.baseURL = 'https://jurapro.bhuser.ru/api-shop';
axios.interceptors.request.use((config) => {
    const token = store.state.user?.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Обработка ошибок API
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            store.commit('CLEAR_USER');
            router.push('/login');
        }
        return Promise.reject(error);
    }
);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');