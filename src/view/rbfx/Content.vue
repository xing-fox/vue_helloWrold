<style lang="less" scoped>
.titleShow{
  height:40px;
  background:#fff;
  position:relative;
  .timeshoise{
    height:20px;
    line-height:20px;
    font-size:14px;
    color:#333;
    position:absolute;
    top:10px;left:20px;
  }
}
</style>

<template>
  <div id="app">
    <C-title :data-prop="titleData"></C-title>
    <div class="titleShow">
      <div class="timeshoise">{{ timeChoise }}<i></i></div>
    </div>
  </div>
</template>

<script>
import cTitle from '@/components/commonTitle'
export default {
  name: 'content',
  data () {
    return {
      titleData: {
        title: '日报分析'
      },
      timeChoise: '今日'
    }
  },
  created () {
    this.$Loading.finish();
  },
  components: {
    'C-title': cTitle
  },
  methods: {
  }
}
</script>
