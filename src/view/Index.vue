<style scoped>
</style>

<template>
  <div id="app">
  <C-title :data-prop="titleData"></C-title>
  </div>
</template>

<script>  
import cTitle from '@/components/commonTitle'
export default {
  name: 'Index',
  data () {
    return {
      titleData: {
        title: '报表'
      }
    }
  },
  components: {
    'C-title': cTitle
  },
  created () {
    let flag = this.$route.query.urlFlag
    if(flag == 1){
      this.$router.push('/jygk/zjfx');
    }
    if(flag ==2){
      this.$router.push('/jygk/kcfx');  
    }
    if(flag ==3){
      this.$router.push('/jygk/ysqk');    
    }
    if(flag ==4){
      this.$router.push('/jygk/yfgysk');    
    }
    if(flag ==5){
      this.$router.push('/jygk/ysqk');   
    }
    if(flag ==6){
      this.$router.push('/jygk/dhhy'); 
    }
    if(flag ==7){
      this.$router.push('/jygk/cgfx');    
    }
    if(flag ==8){
      this.$router.push('/jygk/xsmlfx');   
    }
    if(flag ==9){
      this.$router.push('/jygk/khlsfx'); 
    }
  }
}
</script>
