<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'iview/dist/styles/iview.css'
export default {
  name: 'app'
}
</script>

<style> 
@import url('./origin_static/css/style.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
}
</style>
