<style lang="less" scoped>
  #app{
    background:#f1f1f1;  
    .tab{  
      height:40px;
      background:#eee;
      line-height:40px;  
      display:flex;
      position:relative;
      .tTime{
        flex:1;
        text-align:left;
        margin-left:20px;
      }
      .tIntro{
        flex:1;
        text-align:right;
        margin-right:20px;  
      }
    }
    .lsList{
      height:50px;
      background:#fff;  
    }
    .listData{
      margin-top:2px;
      background:#fff;  
      li{
        padding:10px 20px;
        color:#999;  
        position:relative;
        p{
          line-height:18px;
          span{
            margin-right:20px;  
          }
          &:first-child{
            color:#333;  
            font-size:14px;
          }
        }
        .time{
          position:absolute;
          top:10px;
          right:20px;
          color:#ff9000;
          font-weight:bold;
        } 
      }
    }  
  } 
</style>

<template>
  <div id="app">
    <C-title :data-prop="titleData"></C-title>
    <div class="tab bor-T">
      <div class="tTime">商品排行榜</div>
      <div class="tIntro">注:不现实从未下单客户</div>
    </div>
    <div class="lsList"></div>
    <ul class="listData">
      <li class="bor-B">
        <p>好又多超市</p>
        <p>南京市建邺区云龙路8号</p>
        <p> <span>最后下单时间：2017-05-05</span> <span>下单金额：5000</span> </p>
        <p>客户经理:张三</p>
        <div class="time">10天未下单</div>
      </li>
      <li class="bor-B">
        <p>好又多超市</p>
        <p>南京市建邺区云龙路8号</p>
        <p> <span>最后下单时间：2017-05-05</span> <span>下单金额：5000</span> </p>
        <p>客户经理:张三</p>
        <div class="time">10天未下单</div>
      </li>
    </ul>
  </div>
</template>

<script>
import cTitle from '@/components/commonTitle'

export default {
  name: 'index',
  data () {
    return {
      titleData: {
        title: '流失客户分析'
      }
    }
  },
  components: {
    'C-title': cTitle
  },
  mounted () {    
  },
  methods: {
  },
  created () {
    this.$Loading.finish()
  }
}
</script>
