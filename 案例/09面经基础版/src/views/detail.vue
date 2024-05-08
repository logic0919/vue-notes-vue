<template>
  <div class="detail" v-if='this.content'>
    <h1>这里是面经详情</h1>{{content}}
    <button @click='$router.back()'>back</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      content:''
    }
  },
  async created(){
    const res=await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${this.$route.query.id}`)
    this.content=res.data.result.content
  }
}
</script>

<style>

</style>