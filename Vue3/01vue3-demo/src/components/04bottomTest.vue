<script setup>
import {inject} from 'vue'
// 接收
const count = inject('count')
const changeCount=inject('changeCount')
</script>
<template>
    <div class="bottom">
        <h6>这是bottom-{{ count }}</h6>
        <button @click="changeCount(500)">修改爷级中的数据</button>
    </div>
</template>