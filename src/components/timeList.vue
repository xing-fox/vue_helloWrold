<style lang="less" scoped>
  ul{
    li{
      width:2rem;
      height:.8rem;
      line-height:.8rem;
      text-align:center;
      font-size:.28rem;
      color:#333;
      position:relative;
        &.active{
          color:#ff9008;
        }      
    }
  }
</style>

<template>
  <div id="tList">
    <ul>
      <li v-for="(item,index) in dataProp" class="bor-B" :class="{ active: item.action }" @click="change(index)">{{ item.name }}</li>
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
