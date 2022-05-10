import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { isRuntimeOnly } from 'vue'
import { h, resolveComponent } from 'vue'

const RouteView = {
  name: 'RouteView',
  render: () => h(resolveComponent('router-view')),
}
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('@/views/Home.vue'),
  //   meta: {
  //     title: '首页',
  //   },
  // },
  // {
  //   path: '/systemManagement',
  //   redirect: '/userManagement',
  //   name: 'systemManagement',
  //   meta: {
  //     title: '系统管理',
  //   },
  //   children: [
  //     {
  //       path: '/userManagement',
  //       name: 'userManagement',
  //       component: () => import('@/views/systemManagement/UserManagement.vue'),
  //       meta: {
  //         title: '用户管理',
  //       },
  //     },
  //     {
  //       path: '/roleManagement',
  //       name: 'roleManagement',
  //       component: () => import('@/views/systemManagement/RoleManagement.vue'),
  //       meta: {
  //         title: '角色管理',
  //       },
  //     },
  //   ],
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const addRoutes = (arr) => {
  for (let k of arr) {
    if (!router.hasRoute(k.name)) {
      // if (!k.children) {
      let route = {
        path: k.path,
        name: k.name,
        hidden: true,
        meta: { title: k.title },
      }
      if (k.component) {
        route.component = () => import('@/views/' + k.component + '.vue') || RouteView
        console.log('@/views/' + k.component + '.vue', 'objk')
      }
      if (k.redirect) {
        route.redirect = k.redirect
      }

      router.addRoute(route)
      if (k.children && k.children.length > 1) {
        addRoutes(k.children)
      }
      // }
      // if (k.children && k.children.length > 1) {
      //   addRoutes(k.children)
      // }
      // else {
      //   router.addRoute(k.children)
      // }

      // let obj = k
      // if (k.component) {
      //   obj.component = () => import('@/views/' + k.component + '.vue') || RouteView
      // }
      // router.addRoute(obj)
      // console.log(obj, 'objk')
    }

    // else {
    //   if (k.children) {
    //     router.addRoute(k.children)
    //   }
    // }
  }
}
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('TOKEN')
  if (token) {
    // 登录过就不能访问登录界面，需要中断这一次路由守卫，执行下一次路由守卫，并且下一次守卫的to是主页
    if (to.path === '/login') {
      next({ path: '/' })
    }
    if (router.getRoutes().length > 1 || to.name != null) {
      //放行
      next()
    } else {
      const menuList = store.state.userInfo.menuList
      // console.log(menuList, 'menuList')
      addRoutes(menuList)
      // console.log(router.getRoutes(), '___900')
      // 如果 addRoutes 并未完成，路由守卫会一层一层的执行执行，直到 addRoutes 完成，找到对应的路由
      next({ ...to, replace: true })
    }
  } else {
    if (to.path !== '/login') {
      next({ path: '/logn' })
    } else {
      next()
    }
  }
  // if (to.path == '/login') {
  //   const userInfo = {}
  //   store.commit('SET_TOKEN', '')
  //   store.commit('SET_USERINFO', userInfo)
  //   next()
  // } else {
  //   if (!token) {
  //     next({ path: '/login' })
  //   } else {
  //     const menuList = store.state.userInfo.menuList
  //     console.log(menuList, 'menuList')
  //     addRoutes(menuList)
  //     console.log(router.getRoutes(), '___900')
  //     // if (to.path == '/') {
  //     //   next({ path: '/home' })
  //     // } else {
  //     next()
  //     // }
  //   }
  // }
})
export default router
