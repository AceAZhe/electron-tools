<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-tools'
  }
</script>

<style>
  /* CSS */
  @import url("assets/css/index.css");
  #app{
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    height: 100%;
  }
</style>
