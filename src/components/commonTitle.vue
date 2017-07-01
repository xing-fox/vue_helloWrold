<style scoped>
  #cTitle{
    height:44px;
    line-height:44px;
    background:#fff;
    text-align:center;
    font-size:18px;
    color:#1a1a1a;
    position:relative;
  }
  .icon_left{
    display:inline-block;
    width:44px;
    height:44px;
    position:absolute;
    top:0;left:0;
    z-index:1;
    background-image:url('../assets/arrow_left.png');
    background-size:70% 70%;
    background-repeat:no-repeat;
    background-position:center center;
  }
</style>

<template>
  <div id="cTitle">
    <i class="icon_left" @click="backReturn"></i>
    <span>{{ dataProp.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'content',
  props: {
    'dataProp': {
      type: Object
    }
  },
  computed: {
  },
  methods: {
    backReturn () {
      window.location.go(-1)
    }
  },
  created () {
  }
}
</script>
