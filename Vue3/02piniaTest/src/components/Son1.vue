<script setup>
import { useCounterStore } from '@/store/counter';
const counterStore = useCounterStore()
</script>

<template>
    <div>
        <h3>Son1子组件-{{ counterStore.msg }}</h3>
        <button @click="counterStore.msgChange">修改msg</button>
    </div>
</template>

<style scoped></style>
