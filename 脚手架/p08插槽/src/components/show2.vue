<template>
  <div class="show2">
    <!-- 具名插槽 -->
    <div><slot name='name'>show2的后备内容</slot></div>
    <div><slot name='age'>show2的后备内容</slot></div>
    <div><slot name='hobby'>show2的后备内容</slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .show2{
        width: 300px;
        height: 80px;
        border: 1px solid red;
    }
</style>