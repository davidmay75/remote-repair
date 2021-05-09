import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import HelpHome from '../views/HelpHome.vue'
import MemberWelcome from '../views/MemberWelcome.vue'
import Resources from '../views/Resources.vue'
import Signup from '../views/Signup.vue'
import ProblemDetails from '../views/ProblemDetails.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    component: HelpHome
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: MemberWelcome
  },

  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/details/',
    name: 'Details',
    component: ProblemDetails,
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
