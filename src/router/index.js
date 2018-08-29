import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // mode: 'history',  // 路径中没有#
  mode: 'hash', // 路径中增加了一个# 默认
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      },
      // 这样的home1不起作用
      alias: '/home1'
    },
    {
      path: '/Hi',
      component: Hi,
      children: [
        {path: '/', name: 'Hi', component: Hi},
        {path: 'hi1', name: 'hi1', component: Hi1},
        {path: 'hi2', name: 'hi2', component: Hi2}
      ]
    },
    // 参数传递
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      name: 'params',
      component: Params
      // beforeEnter: (to, from, next) => {
      //   console.log('转呗进入params路由模板');
      //   console.log(to) 
      //   console.log(from) 
      //   next(true)
      //   // next({path:'/'})  跳转至首页
      // }
    },
    // 重定向
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
