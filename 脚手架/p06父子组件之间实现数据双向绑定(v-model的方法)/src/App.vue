<template>
  <div id="app">
    <!-- 改变1 -->
    <Son v-model='op'></Son>
    {{op}}
  </div>
</template>

<script>
import Son from './components/Son.vue'

export default {
  name: 'App',
  components: {
    Son
  },
  data(){
    return {
      op:101,
    }
  },
}
</script>

<style>

</style>
