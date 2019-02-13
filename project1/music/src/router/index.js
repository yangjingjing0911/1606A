import Vue from 'vue'
import Router from 'vue-router';
import Finds from '../components/finds';
import Recommend from '../components/recommend';
import Anchor from '../components/anchor';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Finds,
      children:[
        {
          path:'recommend',
          component:Recommend
        },
        {
          path:'anchor',
          component:Anchor
        }
      ]
    }
  ]
})
