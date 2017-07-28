<style lang="less" scoped>
  #app{
    background:#f1f1f1;  
    .tab{  
      height:50px;
      background:#eee;
      margin-top:.88rem;
      line-height:50px;  
      display:flex;
      position:relative;
      .tTime{
        flex:1;
        text-align:left;
        margin-left:20px;
        span{
            display:inline-block;
            vertical-align:middle;
          &.triangle{
            width: 0;
            height: 0;
            margin-left:2px;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 6px solid #777;
          }
          &.triangle1{
            width: 0;
            height: 0;
            margin-left:2px;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 6px solid #777;
          }
        }
        .timeSwitch{
          background:#eee;
          position:absolute;
          top:40px;left:0;
          z-index:10;
        }
      }
      .tIntro{
        flex:1;
        text-align:right;
        margin-right:20px;  
      }
    }
    .lsList{
      height:40px;
      line-height:40px;
      background:#fffdf1;  
      display:flex;
      font-size:14px;
      i{
        display:inline-block;
        width:40px;
        height:40px;
        background-image:url('../../assets/flowtime.png');
        background-repeat:no-repeat;
        background-size:50% 50%;
        background-position:center center;
      }
      .text{
        flex:1;
        margin-left:5px;
      }
      .num{
        width:60px;
        font-size:16px;
        text-align:right;
        margin-right:15px;
        font-weight:bold;
      }
    }
    .listData{
      background:#fff;  
      li{
        padding:5px 0 5px 10px;
        color:#999;  
        position:relative;
        p{
          line-height:20px;
          font-size:14px;
          span{
            margin-right:20px;  
          }
          &:first-child{
            color:#333;
          }
          &.name{
            width:5rem;
            overflow:hidden; 
            display:-webkit-box; 
            -webkit-line-clamp:1; 
            text-overflow:ellipsis;
            -webkit-box-orient:vertical;
          }
          &.addr{
            width:7rem;
            overflow:hidden; 
            display:-webkit-box; 
            -webkit-line-clamp:1; 
            text-overflow:ellipsis;
            -webkit-box-orient:vertical;
          }
        }
        .time{
          font-size:14px;
          position:absolute;
          top:5px;
          right:12px;
          color:#ff9000;
        } 
      }
    }
    .choiseSelect{
      width:100%;
      height:100%;
      position:relative;
      position:fixed;
      top:0;
      left:0;
      z-index:100;
      background:rgba(0,0,0,.5);
      .selectBox{
        width:250px;
        height:160px;
        position:absolute;
        top:50%;
        left:50%;
        margin:-80px 0 0 -125px;
        background:#fff;
        .close{
          width:20px;
          height:20px;
          position:absolute;
          top:0px;
          right:2px;
          font-size:22px;
        }
        .choiseTime{
          width:150px;
          height:30px;
          line-height:30px;
          border:1px solid #aaa;
          border-radius:2px;
          margin:10px 0 20px 50px;
          padding-left:10px;
          box-sizing:border-box;
        }
        p{
          font-size:14px;  
          margin:0 10px;
          line-height:40px;  
        }
        button{
          width:80px;
          height:30px;
          border:1px solid #999;
          margin:0 0 0 85px;
        }
      }
    } 
  } 
</style>

<template>
  <div id="app">
    <C-title :data-prop="titleData"></C-title>
    <div class="tab bor-T">
      <div class="tTime">
        <span  @click="timeFunc">{{ timeChoise }}未下单</span><span :class="{triangle: !showtimeList, triangle1: showtimeList}"></span>
        <div class="timeSwitch" v-if="showtimeList">
          <T-list :data-prop="timeSwitchData" @changeData='reloadtimeData'></T-list>
        </div>
      </div>
      <div class="tIntro">注:不显示从未下单客户</div>
    </div>
    <div class="lsList">
      <i class="icon"></i>
      <span class="text">流失客户数</span>
      <span class="num">{{ allDataNum }} 家</span>
    </div>
    <ul class="listData">
      <li class="bor-T" v-for="item in allDataList">
        <p class="name">{{ item.name }}</p>
        <p class="addr">{{ item.addr || '...' }}</p>
        <p> <span>最后下单日期:{{ item.time }}</span> <span>下单金额:{{ item.amount }}</span> </p>
        <p>客户经理:{{ item.manager_name }}</p>
        <div class="time">{{ item.days }}天未下单</div>
      </li>
    </ul>
    <div class="choiseSelect" v-if="timeSelectAction">
      <div class="selectBox">
        <p>自定义天数</p>
        <div class="close" @click="closeSelect">x</div>
        <input class="choiseTime" ref="inputTime" type="number" placeholder="请输入时间">
        <button @click="timeSure">确定</button>
      </div>  
    </div>
  </div>
</template>

<script>
import cTitle from '@/components/commonTitle'
import tList from '@/components/timeList'
export default {
  name: 'index',
  data () {
    return {
      titleData: {
        title: '流失客户分析'
      },
      showtimeList: false,
      timeChoise: '7天',
      timeSwitchData: Array,
      timeSelectAction: false,
      condiCode: 1,
      condiDay: 1,
      pageCurrentPage: 0,
      pageRecPerPage: 10,
      allData: Object,
      allDataList: [],
      allDataNum: 0
    }
  },
  components: {
    'C-title': cTitle,
    'T-list': tList
  },
  methods: {
    init () {
      this.$http.post('/app/std_order/report/stdOrderSales_queryLossCustomers.action',
        {
          'condition.code': this.condiCode,
          'condition.day': this.condiDay,
          'page.currentPage': this.pageCurrentPage,
          'page.recPerPage': this.pageRecPerPage 
        },
        {emulateJSON: true}
      ).then((response) => {
        this.$store.dispatch('laodAsyncF')
        this.allDataList = (this.allDataList).concat(response.body.data.cmList)
        this.allData = response.body.data
        this.allDataNum = response.body.data.num
      }, (response) => {
        return alert(response.body.message)
      })
    },
    timeFunc () {
      this.showtimeList = !this.showtimeList
    },
    reloadtimeData (state) {
      if(state == 6){
        this.timeSelectAction = true
      }else{
        [this.timeSelectAction, this.showtimeList] = [false, false]
        this.condiCode = state+1
        this.timeChoise = this.timeSwitchData[state].name
        this.reStart(state) 
      }
    },
    timeSure () {
      if((/^\+?[1-9][0-9]*$/).test(this.$refs.inputTime.value)){
        [this.timeSelectAction, this.showtimeList] = [false, false]
        this.timeChoise = this.$refs.inputTime.value + '天'
        this.condiDay = this.$refs.inputTime.value
        this.condiCode = -1
        this.reStart(6)
      }else{
        return alert('您输入的格式不正确~')
      }
    },
    closeSelect () {
      [this.timeSelectAction, this.showtimeList] = [false, false]
    },
    reStart (state) {
      this.allDataList = []
      this.pageCurrentPage = 0
      for(var item of this.timeSwitchData){
          item.action = false
      }
      this.timeSwitchData[state].action = true
      this.$store.dispatch('laodAsyncT')
      this.init()
    },
    onScroll () {
      if( (window.scrollY) + 10 > (document.body.scrollHeight) - (window.screen.height) ){
        if( (this.pageCurrentPage+1) == parseInt(this.allDataList.length/this.pageRecPerPage) ){
          this.pageCurrentPage++
          this.$store.dispatch('laodAsyncT')
          this.init()
        }
      }
    }  
  },
  created () {
    this.timeSwitchData = [
      {
        name: '7天',
        action: true,
        type: 1
      },{
        name: '10天',
        action: false,
        type: 2
      },{
        name: '15天',
        action: false,
        type: 3
      },{
        name: '30天',
        action: false,
        type: 4
      },{
        name: '60天',
        action: false,
        type: 5
      },{
        name: '90天',
        action: false,
        type: 6
      },{
        name: '自定义时间',
        action: false,
        type: -1
      }
    ]
    window.addEventListener('scroll',()=>{
      this.onScroll()
    })
    this.init()
  }
}
</script>
