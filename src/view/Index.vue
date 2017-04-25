<template>
  <div id="index">
    <h3>{{ msg }}</h3> 
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Hello Wrold~'
    }
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