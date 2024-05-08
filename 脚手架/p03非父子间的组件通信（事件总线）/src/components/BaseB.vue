<template>
  <div class="baseB">
    我是B组件(发布方)
    <button @click='clickSend'>发送</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
    methods:{
        clickSend(){
            Bus.$emit('sendMsg','这是发送的消息')
        }
    }
}
</script>

<style>
    .baseB{
        width: 200px;
        height: 100px;
        border: 1px solid black;
    }
</style>