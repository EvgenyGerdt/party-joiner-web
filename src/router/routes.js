import {createRouter, createWebHistory} from "vue-router";

import store from "../store";

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/profile/:id',
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/AuthView.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/reset',
      name: 'Reset',
      component: () => import('../views/ResetPasswordView.vue')
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      meta: {auth: true},
      component: () => import('../views/ProfileView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.auth);

    if (requireAuth && !store.getters["auth/isAuthenticated"]) {
        next('/login')
    } else {
        next()
    }
});

export default router;