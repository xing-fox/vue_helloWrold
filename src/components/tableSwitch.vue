<template>
  <div id="app">
     <ul>
        <li v-for='(item,index) in dataProp.content' :style="item.state? dataProp.style : ''"  @click.stop="change(index)">{{ item.keyword }}</li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'tableSwitch',
  data () {
      return {
      }
  },
  props:{
      'dataProp':{
          type:Object
      }
  },
  methods: {
      change (arg) {
          for(var item of this.dataProp.content){
              item.state = false
          }
          this.dataProp.content[arg].state = true
          this.timechange(arg)
      },
      timechange (arg) {
          this.$emit('changeData',arg)
      }
  }
}
</script>

<style scoped>
    #app,ul{
        height:.5rem;
        box-sizing:border-box;
        display:flex;
    }
    ul{
        border:1px solid #bdbdbd;  
        border-radius:2px;    
    }    
    ul li{
        flex:1;
        width:.6rem;
        color:#707273;
        text-align:center;
        line-height:.5rem;
    }
</style>
