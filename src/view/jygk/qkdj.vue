<style lang="less" scoped>
  #app{
    ul .listData{
      display:flex;
      height:80px;
      position:relative;
      .cLeft{
        flex:1;
        color:#666;
        line-height:80px;
        text-align:center;
      }
      .cMid{
        flex:1;
          ul li{
            width:60px;
            height:30px;
            color:#fff;
            margin:25px auto;
            line-height:30px;
            text-align:center;
            &.color1{
              background:#ff6698;
            }
            &.color2{
              background:#00cd66;
            }
            &.color3{
              background:#6699ff;
            }
          }
      }
      .cRight{
        width:200px;
        height:80px;
        display:table;
        ul{
          display:table-cell;
          vertical-align:middle;
          li{
            margin-left:50px;
            text-align:left;
            &:last-child{
              color:#ff9000;
            }
          }
        }
      }
    }  
  }
</style>

<template>
  <div id="app">
    <C-title :data-prop="titleData"></C-title>
    <ul>
      <li class="listData bor-T">
        <div class="cLeft"> 
          <span>1月1日</span> 
        </div>
        <div class="cMid"> 
          <ul>
            <li class="color1">期初</li>
            <!--
            <li class="color2">订货会</li>
            <li class="color2">销售</li>
            <li class="color3">退货</li>
            <li class="color2">采购</li>
            -->
          </ul> 
        </div>
        <div class="cRight"> 
          <ul>
            <li>应收:￥3,000</li>
            <li>已收:￥31,000</li>
            <li>欠款:￥32,000</li>
          </ul> 
        </div>
      </li>
      <li class="listData bor-T">
        <div class="cLeft"> 
          <span>1月2日</span> 
        </div>
        <div class="cMid"> 
          <ul>
            <!--
            <li class="color1">期初</li>
            <li class="color2">订货会</li>
            <li class="color2">销售</li>
            <li class="color3">退货</li>
            --> 
            <li class="color2">采购</li>
          </ul> 
        </div>
        <div class="cRight"> 
          <ul>
            <li>应收:￥3,000</li>
            <li>已收:￥31,000</li>
            <li>欠款:￥32,000</li>
            <li>欠款:￥33,000</li>
          </ul> 
        </div>
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
        title: '欠款单据'
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
