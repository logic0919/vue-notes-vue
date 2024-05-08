<template>
  <div id="app">
    <input v-focus type="text" />
    <p v-color="color1">hei</p>
    <p v-color="color2">ha</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      color1: "red",
      color2: "skyblue",
    };
  },
  // 局部注册自定义指令，只能在当前组件里使用
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    color: {
      // 元素被添加到页面中时的逻辑
      inserted(el, binding) {
        // binding.value是指令的值
        el.style.color=binding.value
      },
      // 指令的值修改的时候触发
      update(el, binding) {
        el.style.color=binding.value
      },
    },
  },
};
</script>

<style>
</style>
