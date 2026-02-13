import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Layout
import DefaultLayout from '../DefaultLayout.vue';

// Pages
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue'; // your 404 page

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
