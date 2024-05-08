<template>
  <div class="list">
    <h1>列表页</h1>
    <div class='con' v-for='item in articles' :key='item.id' @click='$router.push({path:`/detail?id=${item.id}`})'>{{item.stem}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            articles:[]
        }
    },
    async created(){
        const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
        this.articles=res.data.result.rows
    }
}
</script>

<style>
.con{
  font-size:20px;
  height: 300px;
}
</style>