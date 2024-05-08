<script setup>
import { reactive,ref} from 'vue';

const state = reactive({
    count: 0
})
const addOne = () => {
    state.count++
}

const count = ref(0)
const addTwo = () => {
    count.value += 2
}

const obj = ref({
    count: 0
})
const addThree = () => {
    obj.value.count += 3
}
</script>

<template>
    {{ state.count }}
    <button @click="addOne">reactive实现+1</button>
    {{ count }}
    <button @click="addTwo">ref实现简单类型+2</button>
    {{ obj.count }}
    <button @click="addThree">ref实现复杂类型中的属性+3</button>
</template>