<template>
  <div id="index">
    <h3>{{ msg }}</h3> 
  </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      msg: 'Hello Wrold~'
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  },
  created () {
    this.$Loading.finish(); //数据请求完毕，进度加载完成
  }
}
</script>

<style scoped>
  h3{
    text-align:center
  }
</style>
