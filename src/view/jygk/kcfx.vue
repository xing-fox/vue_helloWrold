<style lang="less" scoped>
  #app{
    .input{
      width:100%;
      height:44px;
      margin-top:.88rem;
      background:#ddd;
      position:relative;
      input{
        -webkit-disappearance:none;
        -o-disappearance:none;
        width:92%;
        height:30px;
        margin:7px 4%;
        padding-left:5px;
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
        height:80px; 
        position:relative; 
        .liLeft{
          float: left;  
          display: table;
          width: 70%;
          height:80px;
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
          width: 30%;
          overflow:hidden;
          margin:15px 0;
          div{
            line-height:20px;
            &:nth-child(1){
              color:#666;
            }
            &:nth-child(2){
              color:#999;
              width:100%;
              height:20px;
              overflow:hidden;
            }
          }
        }
      }
    }
    .notice{
      width:100%;
      background:#f1f1f1;
      padding:.4rem 0;
      text-align:center;
      font-size:.32rem;
      color:#666;
    }
  }
</style>

<template>
  <div id="#app">
    <C-title :data-prop="titleData"></C-title>
    <div class="input bor-T bor-B" @click="InputFunc">
      <input ref="Input" v-model="searchJson">
      <div class="icon" v-show="searchIcon"> <img src="../../assets/search.png" alt=""><span>搜索</span> </div>
    </div>
    <div v-if="noticeShow" class="notice">暂无数据...</div>
    <div class="listData">
      <ul>
        <li class="bor-B" v-for="item in searchData">
          <div class="liLeft">
            <p><span>{{ item.name }}</span>{{ item.spec }}</p>
          </div>
          <div class="liRight">
            <div class="rightMoney">成本:￥{{ item.amount }}</div>
            <div class="rightNum">数量:{{ item.num }}</div>
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
      searchIcon: true, //小图标显示
      searchJson: '', //关键字
      searchData: [], //数据datalist
      noticeShow: false, //notice没有数据
      currentPage: 0, //当前翻页 
      recPerPage: 10 //请求num
    }
  },
  components: {
    'C-title': cTitle
  },
  watch: {
    searchJson () {
      this.searchData = []
      this.currentPage = 0
      this.init()
    }
  },
  methods: {
    InputFunc () {
      this.searchIcon = false
      this.$refs.Input.focus()
    },
    init () {
      this.$http.post('/app/std_order/report/stdOrderSales_queryCost.action',
        {
          'condition.search': this.searchJson,
          'page.currentPage': this.recPerPage
        },
        {emulateJSON: true}
      ).then((response) => {
        this.$store.dispatch('laodAsyncF')
        this.searchData = (this.searchData).concat(response.body.data.pdList)
        this.noticeShow = this.searchData.length ? false : true
      }, (response) => {
        return alert(response.body.message)
      })
    },
    onScroll () {
      if( (window.scrollY) + 10 > (document.body.scrollHeight) - (window.screen.height) ){
        if( (this.currentPage+1) == parseInt(this.searchData.length/this.recPerPage) ){
          this.currentPage++
          this.init()
          this.$store.dispatch('laodAsyncT')
        }
      }
    }
  },
  created () {
    this.init()
    window.addEventListener('scroll',()=>{
      this.onScroll()
    })
  }
}
</script>
