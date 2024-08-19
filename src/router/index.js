import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AuthPage from '@/views/AuthPage.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [{
    path: '/auth',
    name: 'auth-login',
    component: AuthPage,
    meta: {
      guest: true
    } // Only for guests
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      requiresAuth: true
    } // Requires authentication
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated'];
  console.log('isAuthenticated:', isAuthenticated); // Проверка значения

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'auth-login' });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (isAuthenticated) {
      next({ name: 'home' });
    } else {
      next();
    }
  } else {
    next();
  }
});
    


export default router;