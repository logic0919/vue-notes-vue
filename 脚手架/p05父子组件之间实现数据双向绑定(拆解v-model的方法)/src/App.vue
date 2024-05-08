<template>
  <div id="app">
    <Son :op='op' :msg='msg' @opchange='op=$event' @inpchange='msg=$event'></Son>
    {{op}}
    {{msg}}
  </div>
</template>

<script>
// v-model本质:
// V-model => :value + @input
import Son from './components/Son.vue'

export default {
  name: 'App',
  components: {
    Son
  },
  data(){
    return {
      op:101,
      msg:'hello'
    }
  },
  methods:{
    // opchange(value){
    //   this.op=value
    // },
    // inpchange(value){
    //   this.msg=value
    // }
  }
}
</script>

<style>

</style>
