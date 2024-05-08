<script setup>
// 注意: 由于写了 setup，所以无法直接配置 props 选项
// 所以: 此处需要借助于“编译器宏” 函数接收子组件传递的数据

// 对于props传递过来的数据money，模板中可以直接使用money，而在script中要使用props.money
const props = defineProps({
    money:Number
})

// 子改父
// 在emit中，数组中写的是在父组件中会触发的事件名
const emit = defineEmits(['subMoney'])
const sunFn = () => {
    emit('subMoney',5)
}
</script>

<template>
    <header>
        <h2>{{ money }}</h2>
        <button @click="sunFn">子花钱</button>
    </header>
</template>