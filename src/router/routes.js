import {createRouter, createWebHistory} from "vue-router";

import AuthView from "../views/AuthView.vue";
import RegisterView from "../views/RegisterView.vue";
import ResetPasswordView from "../views/ResetPasswordView.vue";

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        component: AuthView
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    },
    {
      path: '/reset',
      name: 'Reset',
      component: ResetPasswordView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;