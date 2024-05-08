<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Main from './components/main.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  // 局部注册
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  width: 400px;
  padding: 20px;
  background-color: skyblue;
  height: 600px;
  margin:0px auto;
}
</style>
