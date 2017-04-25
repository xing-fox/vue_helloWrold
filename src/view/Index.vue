<template>
  <div id="index">
    <h3>{{ msg }}</h3> 
  </div>
</template>

<script>  
import $ from 'jquery'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Hello Wrold~'
    }
  },
  created () { 
    this.$Loading.finish(); //数据请求完毕，进度加载完成
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
  font-weight: normal;
} 
</style>
