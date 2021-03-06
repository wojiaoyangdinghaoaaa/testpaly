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
import Active from '@/components/Active'
import VipStatus from '@/components/VipStatus'
import MomeyDetail from '@/components/MomeyDetail'
import Address from '@/components/Address'
import Inform from '@/components/Inform'
import Question from '@/components/Question'
import Help from '@/components/Help'
import InformDetail from '@/components/InformDetail'
import Service from '@/components/Service'
import AboultUs from '@/components/AboultUs'
import Newbie from '@/components/Newbie'
import FAQ from '@/components/FAQ'
import CheckTime from '@/components/CheckTime'
import CheckNoPass from '@/components/CheckNoPass'
import CheckMoney from '@/components/CheckMoney'
import CheckNopush from '@/components/CheckNopush'
import CheckFreeze from '@/components/CheckFreeze'
import CheckAdvan from '@/components/CheckAdvan'
import CheckNoChange from '@/components/CheckNoChange'
import CheckService from '@/components/CheckService'
import AddressAdd from '@/components/AddressAdd'
import Adver from '@/components/Adver'
import Belle from '@/components/Belle'
import Magic from '@/components/Magic'



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
      path: '/Active',
      name: 'Active',
      component: Active
    },
    {
      path: '/VipStatus',
      name: 'VipStatus',
      component: VipStatus
    },
    {
      path: '/MomeyDetail',
      name: 'MomeyDetail',
      component: MomeyDetail
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/Inform',
      name: 'Inform',
      component: Inform
    },
    {
      path: '/Question',
      name: 'Question',
      component: Question
    },
    {
      path: '/Help',
      name: 'Help',
      component: Help 
    },
    {
      path: '/InformDetail',
      name: 'InformDetail',
      component: InformDetail
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/AboultUs',
      name: 'AboultUs',
      component: AboultUs
    },
    {
      path: '/Newbie',
      name: 'Newbie',
      component: Newbie
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/CheckTime',
      name: 'CheckTime',
      component: CheckTime
    },
    {
      path: '/CheckNoPass',
      name: 'CheckNoPass',
      component: CheckNoPass
    },
    {
      path: '/CheckMoney',
      name: 'CheckMoney',
      component: CheckMoney 
    },
    {
      path: '/CheckNopush',
      name: 'CheckNopush',
      component: CheckNopush 
    },
    {
      path: '/CheckFreeze',
      name: 'CheckFreeze',
      component: CheckFreeze 
    },
    {
      path: '/CheckAdvan',
      name: 'CheckAdvan',
      component: CheckAdvan
    },
    {
      path: '/CheckNoChange',
      name: 'CheckNoChange',
      component: CheckNoChange
    },
    {
      path: '/CheckService',
      name: 'CheckService',
      component: CheckService
    },
    {
      path: '/AddressAdd',
      name: 'AddressAdd',
      component: AddressAdd
    },
    {
      path: '/Adver',
      name: 'Adver',
      component: Adver
    },
    {
      path: '/Belle',
      name: 'Belle',
      component: Belle
    },
    {
      path: '/Magic',
      name: 'Magic',
      component: Magic
    },
    {
        path: '*',
        redirect: '/'
    }
    
  ]
})



