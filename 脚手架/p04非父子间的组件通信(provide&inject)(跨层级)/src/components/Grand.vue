<template>
  <div class="grand">
    孙子组件
    {{name}}<hr>
    {{inf.age}}<hr>
    {{inf.hobby}}
  </div>
</template>

<script>
export default {
    // 接收数据
    inject:['name','inf']
}
</script>

<style>
    .grand{
        width: 150px;
        height: 100px;
        background-color: pink;
    }
</style>