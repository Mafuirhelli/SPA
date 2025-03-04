import Vue from 'vue';
import Router from 'vue-router';
import Catalog from '@/views/Catalog.vue';
import Registration from '@/views/Registration.vue';
import Authentication from '@/views/Authentication.vue';
import Cart from '@/views/Cart.vue';
import Orders from '@/views/Orders.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Catalog },
        { path: '/register', component: Registration },
        { path: '/login', component: Authentication },
        { path: '/cart', component: Cart },
        { path: '/orders', component: Orders },
    ],
});