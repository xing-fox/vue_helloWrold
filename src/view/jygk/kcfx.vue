<style lang="less" scoped>
  #app{
    .input{
      width:100%;
      height:44px;
      background:#ddd;
      position:relative;
      input{
          -webkit-disappearance:none;
        width:92%;
        height:30px;
        margin:7px 4%;
        border:1px solid #bbb;
        border-radius:4px;
        background:#fff;
      }  
      .icon{
        width:100%;
        line-height:44px;
        position:absolute;
        top:0;left:0;
        text-align:center;
        color:#999;
        font-size:14px;
        img{
            width:14px;
            margin-right:3px;
            vertical-align:middle;
        }
        span{
          vertical-align:middle;
        }
      }
    }
    .listData{
      ul li{
        width: 100%;
        height:70px; 
        position:relative; 
        .liLeft{
          float: left;  
          display: table;
          width: 75%;
          height:70px;
          color:#888;
          padding:0 10px 0 15px;
          box-sizing:border-box;
          p{
            display: table-cell;
            vertical-align: middle;
            span{
              margin-right:5px;
              color:#666;
            }
          }
        }
        .liRight{
          float: right;
          width: 25%;
          margin:15px 0;
          div{
            line-height:20px;
            &:nth-child(1){
              color:#666;
            }
            &:nth-child(2){
              color:#999;;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div id="#app">
    <C-title :data-prop="titleData"></C-title>
    <div class="input bor-T bor-B" @click="InputFunc">
      <input type="text" ref="Input">
      <div class="icon" v-show="searchIcon"> <img src="../../assets/search.png" alt=""><span>搜索</span> </div>
    </div>
    <div class="listData">
      <ul>
        <li class="bor-B">
          <div class="liLeft">
            <p><span>垂直居中</span>通过display转化成为表格的形式，再采用垂直居中的方法得到需要的结果</p>
          </div>
          <div class="liRight">
            <div class="rightMoney">成本:￥50</div>
            <div class="rightNum">数量:12件</div>
          </div>
        </li>
        <li class="bor-B">
          <div class="liLeft">
            <p><span>垂直居中</span>通过display转化成为表格的形式，再采用垂直居中的方法得到需要的结果</p>
          </div>
          <div class="liRight">
            <div class="rightMoney">成本:￥50</div>
            <div class="rightNum">数量:12件</div>
          </div>
        </li>
        <li class="bor-B">
          <div class="liLeft">
            <p><span>垂直居中</span>通过display转化成为表格的形式，再采用垂直居中的方法得到需要的结果</p>
          </div>
          <div class="liRight">
            <div class="rightMoney">成本:￥50</div>
            <div class="rightNum">数量:12件</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cTitle from '@/components/commonTitle'
export default {
  name: 'jygkKcfx',
  data () {
    return {
      titleData: {
        title: '库存成本'
      },
      searchIcon: true
    }
  },
  components: {
    'C-title': cTitle
  },
  methods: {
    InputFunc () {
      this.searchIcon = false
      this.$refs.Input.focus()
    }
  },
  created () { 
    this.$Loading.finish();
  }
}
</script>
