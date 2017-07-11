<style lang="less" scoped>
  #app{
    .top{
      display:flex;
      height:100px;
      text-align:center;
      background:#fff9ed;
      position:relative;
      .tLeft{
        flex:1;
        margin:20px 0;
        p{
          font-size:14px;
          line-height:30px;
          &:nth-child(1){
            color:#666;
          }
          &:nth-child(2){
            color:#333;
            font-weight:bold;
          }
        }
      }
      .tRight{
        flex:1;
        margin:20px 0;
        p{
          font-size:14px;
          line-height:30px;
          &:nth-child(1){
            color:#666;
          }
          &:nth-child(2){
            color:#333;
            font-weight:bold;
          }
        }
      }
    }
    .listData li{
      padding:0 25px 0 10px;
      height:40px;
      line-height:40px;
      display:flex;
      position:relative;
      span{
        color:#666;
        &:nth-child(1){
          flex:1;     
        }
        &:nth-child(2){
          width:120px;
          display:inline-block;
          text-align:right;
          position:relative;
          i{
            position:absolute;
            top:10px;right:-18px;
            display:inline-block;
            vertical-align:middle;
            width:18px;
            height:18px;
            background-image:url('../../assets/arrow_right.png');
            background-size:100% 100%;
            background-repeat:no-repeat;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="app">
    <C-title :data-prop="titleData"></C-title>
    <div class="top bor-T">
        <div class="tLeft">
            <p>欠款客户数</p>
            <p>300</p>
        </div>
        <div class="tRight">
            <p>欠款金额</p>
            <p>￥80,000,00</p>
        </div>
    </div>
    <ul class="listData">
      <li class="bor-T">
        <span>重庆市大利发超市</span>
        <span>￥80,000,00 <i></i> </span>
      </li>
      <li class="bor-T">
        <span>重庆市大利发超市</span>
        <span>￥80,00 <i></i> </span>
      </li>
      <li class="bor-T">
        <span>重庆市大利发超市</span>
        <span>￥80 <i></i> </span>
      </li>
    </ul>
  </div>
</template>

<script>
import cTitle from '@/components/commonTitle'
export default {
  name: 'jygkYsqk',
  data () {
    return {
      titleData: {
        title: '应收欠款'
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
    this.$Loading.finish();
  }
}
</script>


