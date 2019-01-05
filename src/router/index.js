import Vue from 'vue'
import Router from 'vue-router'
import Sign_in from '@/components/Sign_in'
import HelloVue from '@/components/d/HelloVue'
import Sign_up from '@/components/signup/Sign_up'

Vue.use(Router)

export default new Router({
mode:'history',  
routes: [
    {
      path: '/',
      name: 'Sign_in',
      component: Sign_in
    },
    {
        path:'/d',
        name:'HelloVue',
        component:HelloVue
    },
    {
        path:'/signup',
        name:'Sign_up',
        component:Sign_up
    }
  ]
})
