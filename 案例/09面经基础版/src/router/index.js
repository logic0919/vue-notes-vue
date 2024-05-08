import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout.vue'
import detail from '@/views/detail.vue'
import list from '@/views/list.vue'
import like from '@/views/like.vue'
import my from '@/views/my.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/list'
  },
  {
    path: '/layout',
    component: layout,
    children: [
      {
        path: '/list',
        component:list
      },
      {
        path: '/like',
        component:like
      },
      {
        path:'/my',
        component:my
      }
    ]
  },
  {
    path: '/detail',
    component:detail
  },
]

const router = new VueRouter({
  routes
})

export default router
