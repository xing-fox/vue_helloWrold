<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'iview/dist/styles/iview.css'
export default {
  name: 'Report'
}
</script>

<style> 
@import url('./origin_static/css/style.css');
body,html{
  background:#f1f1f1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background:#eee;
}
</style>
