<template>
  <div class="SonA">A子组件组件
    <Grand></Grand>
  </div>
</template>

<script>
import Grand from './Grand.vue'
export default {
  name: "App",
  components: {
    Grand
  },
};
</script>

<style>
.SonA {
  width: 200px;
  height: 200px;
}
</style>