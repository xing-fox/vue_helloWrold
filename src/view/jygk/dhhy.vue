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
        padding:0 15px 0 10px;
        height:40px;
        display:flex;
        line-height:40px;
        position:relative;
        span{
        color:#666;
        &:nth-child(1){
            flex:1;
            overflow:hidden; 
            display:-webkit-box; 
            -webkit-line-clamp:1; 
            text-overflow:ellipsis;
            -webkit-box-orient:vertical;     
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
            <p>客户数</p>
            <p>{{ dataJson.num }}</p>
        </div>
        <div class="tRight">
            <p>预收金额</p>
            <p>￥{{ dataJson.totalAmount }}</p>
        </div>
    </div>
    <ul class="listData">
      <li class="bor-T" v-for="item in dataJsonList">
          <span :data-id="item.id">{{ item.name }}</span>
          <span>￥{{ item.amount }}</span>
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
        title: '订货会余额'
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
      this.$http.post('/app/std_order/report/stdOrderSales_queryBookBalance.action',
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
        if( (this.currentPage+1) == parseInt(this.dataJsonList.length/this.recPerPage) ){
          this.currentPage++
          this.$store.dispatch('laodAsyncT')
          this.init()
        }
      }
    }
  },
  created () {
    window.addEventListener('scroll',()=>{
      this.onScroll()
    })
    this.init()
  }
}
</script>
