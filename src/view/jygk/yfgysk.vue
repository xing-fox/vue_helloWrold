<style lang="less" scoped>
  #app{
    .top{
      display:flex;
      height:100px;
      margin-top:.88rem;
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
      position:relative;
      a{
        width:100%;
        display:flex;
        position:relative;
      }
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
            <p>{{ dataJson.num }}</p>
        </div>
        <div class="tRight">
            <p>欠款金额</p>
            <p>￥{{ dataJson.totalAmount }}</p>
        </div>
    </div>
    <ul class="listData">
      <li class="bor-T" v-for="item in dataJsonList">
        <router-link :to="{ path: '/jygk/qkdjk', query: { Id: item.id, backflag: 1 } }">
          <span :data-id="item.id">{{ item.name }}</span>
          <span>￥{{ item.amount }} <i></i> </span>
        </router-link>
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
        title: '应付供应商款'
      },
      dataJson: Object,
      dataJsonList: [],
      currentPages: 0,
      recPerPage: 15 //请求num
    }
  },
  components: {
    'C-title': cTitle
  },
  methods:{
    init () {
      this.$http.post('/app/std_order/report/stdOrderSales_queryShouldPayment.action',
        {
          'page.currentPage': this.currentPages,
          'page.recPerPage': this.recPerPage
        },
        {emulateJSON: true}
      ).then((response) => {
        this.$store.dispatch('laodAsyncF')
        this.dataJson = response.body.data
        this.dataJsonList = (this.dataJsonList).concat(response.body.data.cmList)
      }, (response) => {
        return alert(response.body.message)
      })
    },
    onScroll () {
      if( (window.scrollY) + 10 > (document.body.scrollHeight) - (window.screen.height) ){
        if( (this.currentPage+1) == parseIn(this.dataJsonList.length/this.recPerPage) ){
          this.currentPage++
          this.$store.dispatch('laodAsyncT')
          this.init()
        }
      }
    }
  },
  created () {
    document.addEventListener('scroll',this.onScroll,false)
    this.init()
  },
  beforeRouteLeave: (to, from, next) => {
    document.removeEventListener('scroll',this.onScroll,false)
    next()
  }
}
</script>
