<template>
  <div id="app">
    <BaseA></BaseA>
    <BaseB></BaseB>
  </div>
</template>

<script>
import BaseA from './components/BaseA.vue'
import BaseB from './components/BaseB.vue'

export default {
  name: 'App',
  components: {
    BaseA,
    BaseB
  }
}
</script>

<style>

</style>
