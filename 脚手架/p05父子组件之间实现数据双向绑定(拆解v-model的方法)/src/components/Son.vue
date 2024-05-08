<template>
  <div class="son">
    <select :value=op @change="opchange">
        <option value="100">北京</option>
        <option value="101">上海</option>
        <option value="102">西安</option>
        <option value="103">深圳</option>
    </select>
    <input type="text" :value=msg @input='inpchange'>
  </div>
</template>

<script>
export default {
  props:{
    'op':Number,
    'msg':String
  },
  methods:{
    opchange(e){
      this.$emit('opchange',Number(e.target.value))
    },
    inpchange(e){
      this.$emit('inpchange',e.target.value)
    }
  }
}
</script>

<style>

</style>