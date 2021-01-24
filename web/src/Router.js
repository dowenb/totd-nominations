import Vue from 'vue';
import Router from 'vue-router';
import Nominations from './views/Nominations.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/Nominations'
    },
    {
      path: '/Nominations',
      name: 'Nominations',
      component: Nominations
    },
    {
      path: '/Nominations/new',
      name: 'new-Nomination',
      component: New
    },
    {
      path: '/Nominations/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/Nominations/:id/edit',
      name: 'edit',
      component: Edit
    }
   
  ]
});