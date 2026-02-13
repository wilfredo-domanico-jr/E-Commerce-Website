import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Layout
import DefaultLayout from '../DefaultLayout.vue';
import AuthenticationLayout from '../AuthenticationLayout.vue';

// Pages
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

// Authentication

import Login from '../views/Auth/Login.vue';
import Signup from '../views/Auth/Signup.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
      },
    ],
  },

  // Authentication routes 
  {
    path: '/',
    component: AuthenticationLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
       {
        path: 'signup',
        name: 'Signup',
        component: Signup,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;