import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/index1',
      children:[
        {
          path: 'index1',
          name: 'index',
          component: ()=>import('@/components/index'),
        },
        {
          path: 'index2',
          name: 'shopCar',
          component: ()=>import('@/components/shopCar'),
        },
        {
          path: 'index3',
          name: 'order',
          component: ()=>import('@/components/order'),
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: ()=>import('@/components/register'),
        },
        {
          path: '/forget',
          name: 'forget',
          component: ()=>import('@/components/forget'),
        },
      ]
    },
    
    {
      path: '/example',
      name: 'example',
      component: ()=>import('@/components/example'),
    }
  ]
})
