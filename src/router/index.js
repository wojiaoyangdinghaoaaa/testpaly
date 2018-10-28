import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import RegistNum from '@/components/RegistNum'
import Regist from '@/components/Regist'
import Home from '@/components/Home'
import Tab from '@/components/Tab'
import shop from '@/components/shop'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import Setting from '@/components/Setting'
import Money from '@/components/Money'
import MyTask from '@/components/MyTask'
import VipStatus from '@/components/VipStatus'
import Enjoy from '@/components/Enjoy'
import Upgrade from '@/components/Upgrade'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/RegistNum',
      name: 'RegistNum',
      component: RegistNum
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/Tab',
      component: Tab,
      children:[
        { path: '/', component: Home},
        { path: '/shop', component: shop},
        { path: '/Mine', component: Mine}
      ]
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/Money',
      name: 'Money',
      component: Money
    },
    {
      path: '/MyTask',
      name: 'MyTask',
      component: MyTask
    },
    {
      path: '/VipStatus',
      name: 'VipStatus',
      component: VipStatus
    },
    {
      path: '/Enjoy',
      name: 'Enjoy',
      component: Enjoy
    },
    {
      path: '/Upgrade',
      name: 'Upgrade',
      component: Upgrade
    }
  ]
})
