<template>
  <div class="baseA">
    我是A组件(接收方)
    <p>{{msg}}</p>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
    data(){
        return {
            msg:'',
        }
    },
    created(){
        // 监听事件
        Bus.$on('sendMsg',(msg)=>{
            this.msg=msg
        })
    }
}
</script>

<style>
    .baseA{
        width: 200px;
        height: 100px;
        border: 1px solid black;
    }
</style>