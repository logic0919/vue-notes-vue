<script setup>
import { useCounterStore } from '@/store/counter';
const counterStore = useCounterStore()
</script>

<template>
    <div>
        <h3>Son2子组件-{{ counterStore.count }}</h3>
        <button @click="counterStore.addCount">修改count</button>
    </div>
</template>

<style scoped></style>
