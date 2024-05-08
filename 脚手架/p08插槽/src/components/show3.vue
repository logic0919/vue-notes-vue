<template>
  <div class="show3">
    <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>op</th>
        </tr>
        <tr v-for="(item,index) in list" :key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <!-- 给slot标签以添加属性的方法传值 -->
            <!-- 将所有的属性添加到一个对象里 -->
            <td><slot :row="item"></slot></td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    props:{
        list:Array
    }
}
</script>

<style>

</style>