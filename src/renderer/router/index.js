import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/pages/home').default,
      children: [
        {
          path: "/",
          redirect:"/pythontest"
        },
        {
          path: 'instructions',
          name: 'instructions',
          component: require('@/pages/instructions/index').default,
        },{
          path: 'pythontest',
          name: 'pythontest',
          component: require('@/pages/pythonTest/index').default,
        },{
          path: 'unittest',
          name: 'unittest',
          component: require('@/pages/unitTest/index').default,
        },{
          path: 'debugtest',
          name: 'debugtest',
          component: require('@/pages/debugTest/index').default,
        },{
          path: 'apitest',
          name: 'apitest',
          component: require('@/pages/apiDoc/index').default,
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
