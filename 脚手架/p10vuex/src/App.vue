<template>
  <div id="app">
    <h1>根组件</h1>
    <input type="text" />
    <Son1></Son1>
    <hr />
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'

export default {
  name: 'app',
  created () {
    console.log(this.$store)
  },
  data: function () {
    return {}
  },
  components: {
    Son1,
    Son2
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
