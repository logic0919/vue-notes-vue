<template>
  <div id="app">
    <!-- <div class="footer_wrap">
      <a href="#/find">发现音乐</a>
      <a href="#/my">我的</a>
      <a href="#/friend">朋友</a>
    </div> -->
    <!-- router-link可以自动给当前导航添加两个高亮类名 -->
    <!-- 可以用router-link代替a标签，可以实现高亮效果，如下 -->
    <!-- 跳转传参的语法：
    1.查询参数传参
    to="/path?参数名1=值&参数名2=值"
    获取：$route.query.参数名
    2.动态路由传参
    要配置动态路由
    to="path/参数值"
    获取：$route.params.参数名 -->
    <div class="footer_wrap">
      <router-link to="/find?a=1&b=2">发现音乐</router-link>
      <router-link to="/my/params1">我的</router-link>
      <router-link to="/friend">朋友</router-link>
      <button @click='gofind'>gofind</button>
      <button @click='gomy'>gomy</button>
    </div>
    <div class="top">
      <!-- 匹配的组件所展示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data(){
    return {
      a:1+2,
    }
  },
  methods:{
    gofind(){
      this.$router.push({
      //     name:'find',
      //     query:{
      //       a:3,
      //       b:4
      //   },
        // 或
        path:'/find',
        query:{
          a:3,
          b:4
        }
        // 或
        // path:'/find?a=3&b=4'
      })
    },
    gomy(){
      this.$router.push({
        path:'my/params2'
      })
      // 或
      this.$router.push({
        name:'my',
        params:{
          words:'params2',
        }
      })
    }
      // 通过路径跳转
      // 1.this.$router.push('路由路径')
      // 2.this.$router.push({
      //   path:'路由路径'
      // })

      // 通过路由名字跳转
      // this.$router.push({
      //   name:'路由路径'
      // })
  }
};
</script>

<style>
/* 模糊匹配 */
/* .router-link-active{
  background-color: aquamarine;
} */
/* 精确匹配 */
/* .router-link-exact-active{
  background-color: aquamarine;
} */
/* 以上是没有换名字时 */

/* 以下为换名字之后 */
/* 模糊匹配 */
.high{
  background-color: aquamarine;
}
/* 精确匹配 */
/* .exactHigh{
  background-color: aquamarine;
} */
</style>
