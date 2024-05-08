<template>
  <div class="main">
    <table>
      <tr>
        <slot name='head'></slot>
      </tr>
      <tr v-for="(item, index) in list" :key="item.id">
        <slot name='body' :inf1='item' :inf2='index'></slot>
      </tr>
    </table>
  </div>
</template>

<script>
import mytag from "./mytag.vue";
export default {
  name: "Main",
  components: {
    mytag
  },
  props: {
    list: Array,
  },
};
</script>

<style>
</style>