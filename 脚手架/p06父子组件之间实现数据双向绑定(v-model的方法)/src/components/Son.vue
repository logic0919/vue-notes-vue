<template>
  <div class="son">
    <!-- 改变2 -->
    <select :value=value @change="opchange">
        <option value="100">北京</option>
        <option value="101">上海</option>
        <option value="102">西安</option>
        <option value="103">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  props:{
    // 改变3
    value:Number,
  },
  methods:{
    opchange(e){
        // 改变4
      this.$emit('input',Number(e.target.value))
    },
  }
}
</script>

<style>

</style>