// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import moment from 'moment' 

Vue.use(VueCookie);

Vue.filter('datefmt',function(input,fmtstring){       //转换时间戳
  
  return moment(input).format(fmtstring)
  
});

Vue.config.productionTip = false



// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('userId');
  if(!role && to.path !== '/' && to.path !== '/RegistNum' && to.path !== '/Regist'){
      next('/');
  }else{
      next();
  }
})





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mounted () {
    this.$el.style.height = '100%'
  },
  components: { App },
  template: '<App/>'
})
