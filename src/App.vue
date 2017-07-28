<template>
  <div id="app"> 
    <S-loading></S-loading>
    <router-view></router-view> 
  </div>
</template>

<script>
import 'iview/dist/styles/iview.css'
import sLoading from '@/components/svgLoading'
export default {
  name: 'Report',
  components: {
    'S-loading': sLoading
  }
}
</script>

<style> 
@import url('./origin_static/css/style.css');
#app{
  width:100%;
  height:100%;
}
body,html{
  background:#f1f1f1;
}
.bor-T:before{
  content: '';
  width:100%;
  height:0;
  border-top:1px solid #ccc;
  position:absolute;
  top:0;left:0;
  -webkit-transform:scale(0.5);
  -webkit-transform-origin:0 0;
  transform:scaleY(0.5);
  transform-origin:0 0;
}
.bor-B:after{
  content: '';
  width:100%;
  height:0;
  border-bottom:1px solid #ccc;
  position:absolute;
  bottom:0;left:0;
  -webkit-transform:scale(0.5);
  -webkit-transform-origin:0 0;
  transform:scaleY(0.5);
  transform-origin:0 0;
}
</style>
