<template>
  <div class='son'>
    姓名:<span>{{name}}</span><hr>
    年龄:<span>{{age}}</span><hr>
    座驾:<span>{{car?'是':'否'}}</span><hr>
    <button @click="changeFn">修改座驾信息</button>
  </div>
</template>

<script>
export default {
  methods:{
    // 修改数据的思路：
    // 1.点击触发子组件中的函数
    // 2.函数中有触发父组件自定义事件的语句
    // 3.父组件中有对应事件的处理函数，在该函数中修改数据，然后页面因响应式而自动更新
    changeFn(){
      // 第一个参数是触发的事件，第二个参数是传的参数
      this.$emit('changeEvent',false)
    }
  },
  
    // 在子组件里用props接收数据，第一种是数组形式
    // props:['name','age','car'],

    
    // 第二种是对象形式，可以对传来的数据进行校验
    props:{
        'name':String,
        'age':Number,
        'car':Boolean
    }


    // 第三种，最完整
    // props:{
    //     'name':{
    //         type:String,
    //         // 是否必填
    //         required:true,
    //         // 如果没有填，默认值
    //         default:'你猜'
    //     },
    //     'age':{
    //         type:Number,
    //         required:true,
    //         // 自定义校验函数
    //         validator(value){
    //             return value>0&&value<100
    //         }
    //     },
    //     'car':{
    //         type:Boolean
    //     }
    // }
}
</script>

<style scoped>
    .son{
        width: 200px;
        height: 200px;
        border: 1px solid black;
    }
</style>