// 这里面存放的就是 vuex 相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
import part1 from '@/store/modules/part1'
import part2 from '@/store/modules/part2'
// 插件安装
Vue.use(Vuex)
// 创建仓库
const store = new Vuex.Store({
  modules: {
    part1,
    part2
  },
  // 严格模式
  // strict: true,
  state: {
    tilte: '标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 或者
  // state() {
  //   return {
  //     tilte: '标题'
  //   }
  // }
  mutations: {
    // 所有mutation函数，第一个参数都是 state
    // 这里面的函数不能有异步的
    add(state, n) {
      state.count += n
    },
    sub(state, n) {
      state.count -= n
    }
  },
  actions: {
    // 这里面的函数可以执行异步操作
    // 第一个参数都是 context
    waitadd(context, n) {
      setTimeout(() => {
        context.commit('add', n)
      }, 1000)
    },
    waitsub(context, n) {
      setTimeout(() => {
        context.commit('sub', n)
      }, 1000)
    }
  },
  getters: {
    // getters函数的第一个参数是 state
    // getters函数必须要有返回值
    filterlist(state) {
      return state.list.filter(item => item >= 5)
    },
    // getters函数的第二个参数是 getters，通过这个可以访问另一个getters中的数据
    filterlist1(state, getters) {
      return getters.filterlist.filter(item => item >= 8)
    }
  }
})
// 导出给main.js使用
export default store
