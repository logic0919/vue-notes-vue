<script setup>
import { onMounted } from 'vue';

// setup中的函数
const fnSetup = () => {
    console.log('setup中的函数直接写');
}
fnSetup()

// 其他钩子函数可以重复写
onMounted(() => {
    console.log('onMounted函数1');
})
onMounted(() => {
    console.log('onMounted函数2');
})
</script>
<template>

</template>