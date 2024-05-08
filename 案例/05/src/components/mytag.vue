<template>
  <div class="mytag">
    <input v-if=isshow type="text" v-focus @blur="isshow=false" @keyup.enter='enter' ref="inp">
    <p v-else @dblclick="clickhabdler">{{tag}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isshow:false
    }
  },
  methods:{
    clickhabdler(e){
      this.isshow=true
      this.$nextTick(()=>{
        this.$refs.inp.value=this.tag
      })
    },
    enter(e){
      this.$emit('enter',e.target.value)
      this.isshow=false
    }
  },
    props:{
      tag:String
    }
}
</script>

<style>
    input{
        width: 30px;
        height: 20px;
        outline: none;
    }
</style>