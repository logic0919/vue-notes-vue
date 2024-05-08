<template>
  <div class="show1">
    <!-- 外部使用组件时，不传东西，则slot会显示后备内容
    外部使用组件时，传东西了，则slot整体会被换掉 -->
    <slot>show1的后备内容</slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .show1{
        width: 300px;
        height: 50px;
        border: 1px solid black;
    }
</style>