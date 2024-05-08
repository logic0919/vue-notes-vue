<template>
  <div id="app">
    <keep-alive :include='["layout"]'>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="less">
.router-link-active{
  background-color: aquamarine;
}
</style>
