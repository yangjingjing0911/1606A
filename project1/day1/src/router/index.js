import Vue from 'vue'
import Router from 'vue-router';
import Index from '../components/index';
import Login from '../components/login';
import Register from '../components/register';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
