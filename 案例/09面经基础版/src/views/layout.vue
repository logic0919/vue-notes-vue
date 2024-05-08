<template>
  <div class="layout">
    <div class="derect">
      <div class="go"><router-link to="/list">list</router-link></div>
      <div class="go"><router-link to="/like">like</router-link></div>
      <div class="go"><router-link to="/my">user</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "layout",
};
</script>

<style>
.router-link-active {
  background-color: orange;
}
.derect {
  width: 200px;
}
.go {
  display: inline-block;
  width: 50px;
}
</style>