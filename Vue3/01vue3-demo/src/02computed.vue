<script setup>
import { ref, computed } from 'vue';

const list = ref([1, 2, 3, 4, 5, 6])
const listComputed = computed(() => {
    return list.value.filter((item) => item > 3)
})
</script>

<template>
    <br>
    {{ list }}
    <br>
    {{ listComputed }}
</template>