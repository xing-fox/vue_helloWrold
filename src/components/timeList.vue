<style lang="less" scoped>
  ul{
    li{
      height:40px;
      line-height:40px;
      text-align:center;
      font-size:16px;
      color:#333;
        &.active{
          color:#ff9008;
        }      
    }
  }
</style>

<template>
  <div id="tList">
    <ul>
      <li v-for="(item,index) in dataProp" :class="{ active: item.action }" @click="change(index)">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tList',
  props: {
    'dataProp': {
      type: Array
    }
  },
  methods: {
    change (arg) {
      this.$emit('changeData',arg)
    }
  }
}
</script>

