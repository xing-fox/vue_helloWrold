<style lang="less" scoped>
  #app{
    .tab{
      height:.88rem;
      margin-top:.88rem;
      font-size:.28rem;
      background:#eee;
      line-height:.88rem;  
      display:flex;
      position:relative;
      .tgoods{
        flex:1;
        text-align:left;
        padding-left:.3rem;
        position:relative;
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
        .goodSwitch{
          background:#eee;
          position:absolute;
          top:.8rem;left:0;
          z-index:10;
        }
      }
      .tTime{
        width:2rem;
        text-align:center;
        position:relative;
        span{
            display:inline-block;
            max-width:1.6rem;
            height:.88rem;
            overflow:hidden;
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
          top:.8rem;right:0;
          z-index:10;
        }
      }
      .tUnit{
        width:2rem;
        text-align:center;
        position:relative;
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
        .unitSwitch{
          background:#eee;
          position:absolute;
          top:.8rem;left:0;
          z-index:10;
        }
      }
    }
    .tabList{
      height:1.6rem;  
      display:flex;
      border-top:1px solid #ccc;
      .list2{
          flex:1.5 !important;
      }
      .list1,.list2{
        flex:1;
        padding:.4rem 0;
        text-align: center;
        border-bottom:1px solid #ccc;
        p{
          color:#999;  
          line-height:.4rem;  
          &:last-child{
            font-size:.28rem;
            color:#333;
          }
        }
        &.active{ 
          border-bottom:none;
          border-right:1px solid #ccc;
          border-left:1px solid #ccc;
        }
      }
    }
    .listData{
      li{
        height:1rem;
        line-height:1rem;  
        display:flex;  
        position:relative;
        .icon{
          width:1rem;
          position:relative;
          .img1{
            display:inline-block;
            width:1rem;
            height:1rem;
            background-image:url('../../assets/jp.png');
            background-repeat:no-repeat;
            background-size:50% 65%;
            background-position:center center;
          }
          .img2{
            display:inline-block;
            width:1rem;
            height:1rem;
            background-image:url('../../assets/yp.png');
            background-repeat:no-repeat;
            background-size:50% 65%;
            background-position:center center;
          }
          .img3{
            display:inline-block;
            width:1rem;
            height:1rem;
            background-image:url('../../assets/tp.png');
            background-repeat:no-repeat;
            background-size:50% 65%;
            background-position:center center;
          }
          span{
            display:inline-block;
            width:.48rem;
            height:.48rem;
            color:#fff;
            margin:0 .26rem;
            border-radius:.24rem;
            line-height:.48rem;
            text-align:center;
            background:#3687e3;  
          }
        }
        .content{
          flex:1;
          margin: .1rem 0;
          line-height:.8rem;
          overflow:hidden; 
          display:-webkit-box; 
          -webkit-line-clamp:1;
          box-sizing:border-box; 
          text-overflow:ellipsis;
          -webkit-box-orient:vertical;
          p{
            line-height:.4rem;
            font-size:.26rem;
          }
        }
        .content1{
          margin:.1rem 0 .1rem .3rem;
        }
        .price{
          width:2rem;
          text-align:center;
        }
        .num{
          width:2rem;
          text-align:center;
        }
      }  
    }
    .sort{
      width:1.2rem;
      height:1.2rem;
      position:fixed;
      bottom:.6rem;
      right:.6rem;
      z-index:10;
      img{
        width:100%;
        height:100%;  
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
        width:5rem;
        height:5rem;
        position:absolute;
        top:50%;
        left:50%;
        margin:-2rem 0 0 -2.5rem;
        background:#fff;
        .close{
          width:.4rem;
          height:.4rem;
          position:absolute;
          top:0px;
          right:2px;
          font-size:.44rem;
        }
        p{
          font-size:.28rem;  
          margin:0 .2rem;
          line-height:.8rem;  
        }
        button{
          width:1.6rem;
          height:.6rem;
          border:1px solid #999;
          margin:0 0 0 1.7rem;
        }
      }
    }
    .noticetitle{
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
  <div id="app">
    <C-title :data-prop="titleData"></C-title>
    <div class="tab bor-T">
      <div class="tgoods">
        <span @click="goodsFunc">{{ goodsChoise }}</span><span :class="{triangle: !showgoodsList, triangle1: showgoodsList}"></span>
        <div class="goodSwitch" v-if="showgoodsList">
          <T-list :data-prop="goodSwitchData" @changeData='reloadgoodsData'></T-list>
        </div>
      </div>
      <div class="tTime">
        <span  @click="timeFunc">{{ timeChoise }}</span><span :class="{triangle: !showtimeList, triangle1: showtimeList}"></span>
        <div class="timeSwitch" v-if="showtimeList">
          <T-list :data-prop="timeSwitchData" @changeData='reloadtimeData'></T-list>
        </div>
      </div>
      <div class="tUnit">
        <span  @click="unitFunc">{{ unitChoise }}</span><span :class="{triangle: !showunitList, triangle1: showunitList}"></span>
        <div class="unitSwitch" v-if="showunitList">
          <T-list :data-prop="unitSwitchData" @changeData='reloadunitData'></T-list>
        </div>
      </div>
    </div>
    <div class="tabList">
      <div class="list1" :class="{active: tabFlag == 1}" @click="tabFlagFunc(1)">
        <p>采购数量</p>
        <p>{{ allData.totalNum }}</p>
      </div>
      <div class="list2" :class="{active: tabFlag == 2}" @click="tabFlagFunc(2)">
        <p>采购金额</p>
        <p>￥{{ allData.totalAmount }}</p>
      </div>
    </div>
    <div class="noticetitle" v-if="noticeShow">暂无数据...</div>
    <ul class="listData">
      <li class="bor-B" v-for="(item, index) in allDataBalanceList">
        <div class="icon" v-if="index<3">
          <i :class="'img'+(index+1)"></i> 
        </div>
        <div class="icon" v-else> <span>{{index+1}}</span> </div>
        <div class="content" v-if="contFlag" v-show="index<10"> <span>{{item.name}}</span>{{item.ext}}</div>
        <div class="content" v-else :class="{'content1': index >9 }"><p>{{item.name}}</p><p>{{item.ext}}</p></div>
        <div class="price" v-if="!dataTypeShow">￥{{item.amount}}</div>
        <div class="num" v-else>{{item.num}}</div>
      </li>
    </ul>
    <div class="sort" @click="sortFunc">
      <img src="../../assets/sort.png" alt="">
    </div>
    <div class="choiseSelect" v-if="timeSelectAction">
      <div class="selectBox">
        <p>选择时间</p>
        <div class="close" @click="closeSelect">x</div>
        <Date-picker type="date" :clearable="false" @on-change="input1Time" placeholder="开始时间" style="width: 200px;margin:10px auto;"></Date-picker>
        <Date-picker type="date" :clearable="false" @on-change="input2Time" placeholder="结束时间" style="width: 200px;margin:20px auto;"></Date-picker>
        <button @click="timeSure">确定</button>
      </div>  
    </div>
  </div>
</template>

<script>  
import cTitle from '@/components/commonTitle'
import tList from '@/components/timeList'
import moment from 'moment'
export default {
  name: 'Jygkcgfx',
  data () {
    return {
      titleData: {
        title: '采购分析'
      },
      goodSwitchData: [], //商品排行榜选项
      showgoodsList: false, //商品排行榜tab显隐
      goodsChoise: '商品排行榜',
      timeSwitchData: [], //时间排行榜选项
      showtimeList: false, //时间排行榜tab显隐
      timeChoise: '本月',
      unitSwitchData: [], //单位排行榜选项
      showunitList: false, //单位排行榜tab显隐
      unitChoise: '万元',
      contFlag: true,
      dataTypeShow: true,
      timeSelectAction: false, //自定义时间显隐
      startTime: '',
      endTime: '',
      tabFlag: 1,
      noticeShow: false,
      allData: Object, //总的数据
      allDataBalanceList: [],
      dataContent: 1, //统计内容
      dataFlag: 1, //统计方式
      dataSort: 1, //排序方式
      dataType: 1, //统计类型
      dataDatacode: 5, //时间代码
      dataCurrentpage: 0, //当前页面
      dataRecprepage: 12 //每页显示多少条
    }
  },
  components: {
    'C-title': cTitle,
    'T-list': tList
  },
  methods: {
    init () {
      this.$http.post('/app/std_order/report/stdOrderSales_queryPurchase.action',
        {
          'condition.content': this.dataContent,
          'condition.flag': this.dataFlag,
          'condition.sort': this.dataSort,
          'condition.type': this.dataType,
          'dateCode': this.dataDatacode,
          'page.currentPage': this.dataCurrentpage,
          'page.recPerPage': this.dataRecprepage,
          'startDate': this.startTime,
          'endDate': this.endTime
        },
        {emulateJSON: true}
      ).then((response) => {
        this.$store.dispatch('laodAsyncF')
        this.allDataBalanceList = (this.allDataBalanceList).concat(response.body.data.balanceList)
        this.noticeShow = this.allDataBalanceList.length ? false : true
        this.allData = response.body.data
      }, (response) => {
        return alert(response.body.message)
      })
    },
    goodsFunc () {
      [this.showtimeList, this.showunitList] = [false, false]
      this.showgoodsList = !this.showgoodsList
    },
    reloadgoodsData (state) {
      this.dataCurrentpage = 0
      this.contFlag = state == 0 ? true : false
      this.dataType = state + 1
      this.showgoodsList = false
      this.goodsChoise = this.goodSwitchData[state].name
      for(var item of this.goodSwitchData){
        item.action = false
      }
      this.goodSwitchData[state].action = true //重置时间参数
      this.allData = []
      this.allDataBalanceList = []
      this.init()
    },
    timeFunc () {
      [this.showgoodsList, this.showunitList] = [false, false]
      this.showtimeList = !this.showtimeList
    },
    reloadtimeData (state) {
      if(state == 6){ //自定义时间
        this.timeSelectAction = true
      }else{
        this.dataCurrentpage = 0
        this.allData = []
        this.allDataBalanceList = []
        this.dataDatacode = state+1
        this.showtimeList = false
        this.timeChoise = this.timeSwitchData[state].name
        this.init()
        for(var item of this.timeSwitchData){
            item.action = false
        }
        this.timeSwitchData[state].action = true //重置时间参数
      }
    },
    unitFunc () {
      [this.showtimeList, this.showgoodsList] = [false, false]
      this.showunitList = !this.showunitList
    },
    reloadunitData (state) {
      this.dataCurrentpage = 0
      this.showunitList = false
      this.unitChoise = this.unitSwitchData[state].name
      for(var item of this.unitSwitchData){
        item.action = false
      }
      this.unitSwitchData[state].action = true //重置时间参数
      this.dataFlag = this.dataFlag == 1 ? 2 : 1
      this.allData = []
      this.allDataBalanceList = []
      this.init()  
    },
    input1Time (state) {
      this.startTime = state
    },
    input2Time (state) {
      this.endTime = state
      if(this.endTime < this.startTime){  
        setTimeout(()=>{
          alert('结束时间必须大于开始时间')
        },500)
      }
    },
    timeSure () {
      if (this.endTime == '' || this.startTime == ''){
        return alert('开始或结束时间不能为空')
      }else{
        [this.timeSelectAction, this.showtimeList]=[false, false]
      }

      let _endDataArray = this.endTime.split('-')
      let _startDataArrya = this.startTime.split('-')
      if (this.endTime == '' || this.startTime == ''){
        return alert('开始或结束时间不能为空')
      }
      if(this.endTime < this.startTime){  
        setTimeout(()=>{
          return alert('结束时间必须大于开始时间')
        },500)
      }
      if(moment(_endDataArray).diff(moment(_startDataArrya), 'days') > 365){
        setTimeout(()=>{
          return alert("查询范围不超过一年！")
        },500)
      }else{
        [this.timeSelectAction, this.showtimeList] = [false, false]
        this.timeChoise = _startDataArrya.join('').substr(4) +'-'+ _endDataArray.join('').substr(4)
        this.dataCurrentpage = 0
        this.dataDatacode = -1
        for(var item of this.timeSwitchData){
            item.action = false
        }
        this.timeSwitchData[6].action = true
        this.allData = []
        this.allDataBalanceList = []
        this.init()
      }

    },
    closeSelect () {
      [this.timeSelectAction, this.showtimeList] = [false, false]
    },
    tabFlagFunc (state) {
      this.dataCurrentpage = 0
      this.tabFlag = state
      this.dataTypeShow = state == 1 ? true : false
      this.dataContent = state
      this.allData = []
      this.allDataBalanceList = []
      this.init()
    },
    sortFunc () {
      this.dataCurrentpage = 0
      this.dataSort = this.dataSort == 1 ? 2 : 1
      this.allData = []
      this.allDataBalanceList = []
      this.init()  
    },
    onScroll () {
      if( (window.scrollY) + 10 > (document.body.scrollHeight) - (window.screen.height) ){
        if( (this.dataCurrentpage+1) == parseInt(this.allDataBalanceList.length/this.dataRecprepage) ){
          this.dataCurrentpage++
          this.init()
        }
      }
    }
  },
  created () {
    this.goodSwitchData = [
      {
        name: '商品排行榜',
        action: true,
        type: 0
      },{
        name: '业务员排行榜',
        action: false,
        type: 1
      },{
        name: '客户排行榜',
        action: false,
        type: 2
      }
    ]
    this.timeSwitchData = [
      {
        name: '今日',
        action: false,
        type: 0
      },{
        name: '昨日',
        action: false,
        type: 1
      },{
        name: '本周',
        action: false,
        type: 2
      },{
        name: '上周',
        action: false,
        type: 3
      },{
        name: '本月',
        action: true,
        type: 4
      },{
        name: '上月',
        action: false,
        type: 5
      },{
        name: '自定义时间',
        action: false,
        type: 6
      }  
    ]
    this.unitSwitchData = [
      {
        name: '元',
        action: false,
        type: 0
      },{
        name: '万元',
        action: true,
        type: 1
      }
    ]
    window.addEventListener('scroll',()=>{
      this.onScroll()
    })
    this.init()
  }
}
</script>
