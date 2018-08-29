import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'

Vue.use(Router)

export default new Router({
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
    },
    // 重定向
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }
  ]
})
