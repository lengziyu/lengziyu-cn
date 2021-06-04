import VueRouter from 'vue-router'

export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },{
    path: '/about',
    name: 'About',
    component: () => import('@/views/about.vue'),
  },{
    path: '/life',
    name: 'Life',
    component: () => import('@/views/life.vue'),
  },{
    path: '/work',
    name: 'Work',
    component: () => import('@/views/work.vue'),
  },
  {
    path: '/photo',
    name: 'Photo',
    component: () => import('@/views/photo.vue'),
  },{
    path: '/photo/imgView',
    name: 'PhotoImgView',
    component: () => import('@/views/photo/imgView.vue'),
  },{
    path: '/utils',
    name: 'Utils',
    component: () => import('@/views/utils.vue'),
  },
  {
    path: '/utils/compres',
    name: 'UtilsCompres',
    component: () => import('@/views/utils/compres.vue'),
  },
  {
    path: '/utils/bookkeeping',
    name: 'UtilsBookkeeping',
    component: () => import('@/views/utils/bookkeeping.vue'),
  },{
    path: '/utils/createQrcode',
    name: 'UtilsCreateQrcode',
    component: () => import('@/views/utils/createQrcode.vue'),
  },
  { path: '*', component: () => import('@/views/404') }
]

export default new VueRouter({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
