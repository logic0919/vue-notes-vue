<template>
  <div class="App">
    <XtxShortCut></XtxShortCut>
    <XtxHeaderNa v-for='item in 3' :key='item'></XtxHeaderNa>
    <XtxBanner></XtxBanner>
    <!-- <XtxNewGoods></XtxNewGoods>
    <XtxHotBrand></XtxHotBrand>
    <XtxTopic></XtxTopic>
    <XtxFooter></XtxFooter> -->
  </div>
</template>

<script>
import XtxShortCut from "./components/XtxShortCut.vue";
import XtxHeaderNa from "./components/XtxHeaderNa.vue";
import XtxBanner from "./components/XtxBanner.vue";
export default {
  name: 'App',
  components: {
    XtxShortCut,
    XtxHeaderNa,
    XtxBanner
  }
};
</script>

<style>
</style>