<style scoped>
  #cTitle{
    height:.88rem;
    width:100%;
    line-height:.88rem;
    text-align:center;
    font-size:.38rem;
    background:#fff;
    color:#1a1a1a;
    position:fixed;
    top:0;left:0;
    z-index:10000;
  }
  .icon_left{
    display:inline-block;
    width:.88rem;
    height:.88rem;
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
  data () {
    return {
      backFlag: this.$route.query.backflag
    }
  },
  props: {
    'dataProp': {
      type: Object
    }
  },
  methods: {
    backReturn () {
      if(this.backFlag == 1 ){
        window.history.go(-1)
      }else{
        wq.wqload.wqClosePage()
      }
    }
  }
}
</script>
