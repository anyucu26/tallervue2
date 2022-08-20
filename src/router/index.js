import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '../inicioview.vue'
import Create from '../Createproductos.vue'
import Index from '../indexproductos.vue'
import Update from '../Updateproductos.vue'
import dashboard from '../dashboard.Admin.vue'
import iniciosesion from '../iniciosesionusuario.vue'
import rolusuario from '../rolusuario.vue'
import dashboardusuario from '../dashboardusuario.vue'
import siderbar from '../siderbar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
    {
      path: '/Inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Update',
      name: 'Update',
      component: Update
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/iniciosesion',
      name: 'iniciosesion',
      component: iniciosesion
    },
    {
      path: '/rolusuario ',
      name: 'rolusuario ',
      component: rolusuario 
    },
    {
      path: '/dashboardusuario',
      name: 'dashboardusuario',
      component: dashboardusuario
    },
    {
      path: '/Inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/siderbar',
      name: 'siderbar',
      component: siderbar
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
