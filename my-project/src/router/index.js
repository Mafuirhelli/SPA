import Vue from 'vue';
import Router from 'vue-router';
import Catalog from '@/views/Catalog.vue';
import Registration from '@/views/Registration.vue';
import Authentication from '@/views/Authentication.vue';
import Cart from '@/views/Cart.vue';
import Orders from '@/views/Orders.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Catalog },
        { path: '/register', component: Registration },
        { path: '/login', component: Authentication },
        { path: '/cart', component: Cart, meta: { requiresAuth: true } },
        { path: '/orders', component: Orders, meta: { requiresAuth: true } },
    ],
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isAuthenticated = !!router.app.$store.state.user;

    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;