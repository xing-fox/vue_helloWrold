<style lang="less" scoped>
  #app{
    background: #f1f1f1;
  }
  .content1{
    background:#fff;
    height:.9rem;
    margin-top:.88rem;
    position:relative;
    .title{
      color:#000;
      font-size:.32rem;
      margin-left:.2rem;
      line-height:.9rem;
    }
    .switch{
      position:absolute;
      top:.2rem;right:.1rem;
    }
  }
  .content2{
    width:100%;
    height:4rem;
    background:#fff;
    position:relative;
    #Container{
      width:4rem;
      max-width:50%;
      height:4rem;
    }
    .contRight{
      height:4rem;
      display:table;
      width:50%;
      position:absolute;
      top:0;right:0;
    }
    .contlist{
      display:table-cell;
      vertical-align: middle;
    }
    .contlist li{
      height:.48rem;
      line-height:.48rem;
      font-size:.24rem;
      padding-left:5px;
      color:#666;
      i{
        display:inline-block;
        margin-right:.2rem;
        width:.16rem;
        height:.16rem;
        border-radius:.8rem;
        vertical-align: middle;
        &.icon0{
          background:#ce8574;
        }
        &.icon1{
          background:#44aeff;
        }
        &.icon2{
          background:#97d978;
        }
        &.icon3{
          background:#ffd575;
        }
        &.icon4{
          background:#ff8985;
        }
        &.icon5{
          background:#8995e7;
        }
        &.icon6{
          background:#ff9000;
        }
        &.icon7{
          background:#ea8574;
        }
      }
      span{
        width:32%;
        display:inline-block;
        vertical-align:middle;
        &.span1{
          text-align:right;
        }
      }
    }
  }
  .content3{
    margin-top:.2rem;
    background:#fff;
    position:relative;
    .title{
      color:#000;
      font-size:.32rem;
      margin-left:.2rem;
      line-height:.9rem;
    }
    .switch{
      position:absolute;
      top:.2rem;right:.1rem;
    }
    .money{
      height:.8rem;
      line-height:.8rem;
      position:relative;
      display:flex;
      .mTime{
        width:2rem;
        font-size:.28rem;
        color:#3687e3;
        text-align:center;
        span{
            display:inline-block;
            vertical-align:middle;
          &.triangle{
            width: 0;
            height: 0;
            margin-left:2px;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 6px solid #3687e3;
          }
          &.triangle1{
            width: 0;
            height: 0;
            margin-left:2px;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 6px solid #3687e3;
          }
        }
        .timeSwitch{
          background:#fff;
          position:absolute;
          top:.8rem;left:0;
          z-index:10;
        }
      }
      .mIn{
        flex:2;
        color:#666;
        font-size:.28rem;
        font-weight:bold;
        text-align:center;
      }
      .mOut{
        flex:2;
        color:#666;
        font-size:.28rem;
        font-weight:bold;
        text-align:center;
      }
    }
    .mBut{
      width:2.6rem;
      margin:.1rem .4rem;
      display:flex;
      .active{
        color:#3687e3 !important;
        border:1px solid #3687e3 !important;
      }
      .bIn,.bOut{
        flex:1;
        margin:0 .2rem 0 0;
        height:.6rem;
        line-height:.6rem;
        border-radius:2px;
        color:#666;
        text-align:center;
        border:1px solid #999;
      }
    }
    .listTitle{
      color:#999;
      display:flex;
      font-size:.26rem;
        .rank,.money,.ratio{
          display:inline-block;
          height:.8rem;
          line-height:.8rem;
          flex:1;
          text-align:center;
        }
        .types{
          height:.8rem;
          line-height:.8rem;
          flex:3;
          text-align:left;
        }
    }
    .listData li{
      color:#666;
      font-size:.26rem;
      display:flex;
      position:relative;
        .rank,.money,.ratio{
          display:inline-block;
          height:.8rem;
          line-height:.8rem;
          flex:1;
          text-align:center;
        }
        .types{
          display:inline-block;
          height:.8rem;
          line-height:.8rem;
          flex:3;
          text-align:left;
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
        width:5rem;
        height:4.5rem;
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
</style>

<template>
  <div id="app">
    <C-title :data-prop="titleData"></C-title>
    <div class="content1 bor-T">
      <div class="title">账户余额</div>
      <div class="switch">
        <T-switch :data-prop="switchData" @changeData='reloadData'></T-switch>
      </div>
    </div>
    <div class="content2">
      <div id="Container"></div>
      <div class="contRight">
        <ul class="contlist">
          <li v-for="(item, index) in allData.balanceList"><i :class="'icon'+ index"></i><span>{{ item.account }}</span><span class='span1'>{{ item.amount }}</span></li>
        </ul>
      </div>
    </div>
    <div class="content3">
      <div class="title">收支概况</div>
      <div class="switch">
        <T-switch :data-prop="switchData1" @changeData='reloadData1'></T-switch>
      </div>
      <div class="money bor-T">
        <div class="mTime">
          <span @click="timeFunc">{{ timeChoise }}</span><span :class="{triangle: !showtimeList, triangle1: showtimeList}"></span>
          <div class="timeSwitch" v-if="showtimeList">
            <T-list :data-prop="timeSwitchData" @changeData='reloadtimeData'></T-list>
          </div>
        </div>
        <div class="mIn">收入: <span>{{ allData.totalCome }}</span></div>
        <div class="mOut">支出: <span>{{ allData.totalExpense }}</span></div>
      </div>
      <div class="mBut">
        <div class="bIn" :class="{active: srzcAction}" @click="srzc(1)">收入</div>
        <div class="bOut" :class="{active: !srzcAction}" @click="srzc(2)">支出</div>
      </div>
      <div class="listTitle">
        <span class="rank">排名</span>
        <span class="types">{{ typeLeixing }}</span>
        <span class="money">金额</span>
        <span class="ratio">环比</span>
      </div>
      <ul class="listData">
        <li class="bor-T" v-for="(item,index) in allData.comeList"> 
          <span class="rank"> {{ index }} </span>
          <span class="types"> {{ item.type }} </span>
          <span class="money"> {{ item.amount }} </span>
          <span class="ratio"> {{ item.rate }} </span>
        </li>
      </ul>
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
import tList from '@/components/timeList'
import cTitle from '@/components/commonTitle'
import tSwitch from '@/components/tableSwitch'
import Highcharts from 'highcharts'
import moment from 'moment'

export default {
  name: 'jygkZjfx',
  data () {
    return {
      titleData: {
        title: '资金分析'
      },
      allData: Object,
      showtimeList: false, //设置时间选择组件显隐
      switchData: Object, //设置switch所需要带的参数
      switchData1: Object, //设置switch所需要带的参数
      timeChoise: '本月', //默认时间设置
      timeSwitchData: Array,
      typeLeixing: '收入类型',
      timeSelectAction: false,
      zhyeSwitch: 1, //账户余额所传递参数
      szgkSwitch: 1, //收支概况所传递参数
      srzcSwitch: 1, //收入支出切换
      srzcAction: true,
      endTime: '',
      startTime: '',
      dateCode: 5
    }
  },
  created () {
    this.switchData = {
      content: [
        {
          keyword: '元',
          state: false
        },
        {
          keyword: '万元',
          state: true
        }
      ],
      style: `background:#3687e3;color:#fff`  
    }
    this.switchData1 = {
      content: [
        {
          keyword: '元',
          state: false
        },
        {
          keyword: '万元',
          state: true
        }
      ],
      style: `background:#3687e3;color:#fff`  
    } 
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
    this.init()
  },
  components: {
    'C-title': cTitle,
    'T-switch': tSwitch,
    'T-list': tList
  },
  methods: {
    init () {
        this.$http.post('/app/std_order/report/stdOrderSales_queryAccount.action',
          {
            'condition.balanceFlag': this.zhyeSwitch,
            'condition.surveyFlag': this.szgkSwitch,
            'condition.type': this.srzcSwitch,
            'dateCode': this.dateCode,
            'startDate': this.startTime,
            'endDate': this.endTime,
            'page.currentPage': 0,
            'page.recPerPage': 40
          },
          {emulateJSON: true}
        ).then((response) => {
          this.$store.dispatch('laodAsyncF')
          this.allData = response.body.data
          this.highchartFunc(this.allData.totalBalance)
        }, (response) => {
          return alert(response.body.message)
        })
    },
    timeFunc () {
      this.showtimeList = !this.showtimeList
    },
    reloadtimeData (state) {
      if(state==6){
        this.timeSelectAction = true
      }else{
        this.dateCode = state + 1
        this.reStart()
        this.showtimeList = false
        this.timeChoise = this.timeSwitchData[state].name
        for(var item of this.timeSwitchData){ //重置时间参数 
          item.action = false
        }
        this.timeSwitchData[state].action = true
      }
    },
    srzc (state) {
      this.typeLeixing = state == 1 ? '收入类型' : '支出类型'
      this.srzcSwitch = state == 1 ? 1 : 2
      this.srzcAction = state == 1 ? true : false
      this.reStart()
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
      let _endDataArray = this.endTime.split('-')
      let _startDataArrya = this.startTime.split('-')
      if (this.endTime == '' || this.startTime == ''){
        return alert('开始或结束时间不能为空')
      }else if(this.endTime < this.startTime){  
        setTimeout(()=>{
          return alert('结束时间必须大于开始时间')
        },500)
      }else if(moment(_endDataArray).diff(moment(_startDataArrya), 'days') > 365){
        setTimeout(()=>{
          return alert("查询范围不超过一年！")
        },500)
      }else{
        [this.timeSelectAction, this.showtimeList] = [false, false]
        this.timeChoise = _startDataArrya.join('').substr(4) +'-'+ _endDataArray.join('').substr(4)   
        this.dateCode = -1
        for(var item of this.timeSwitchData){
          item.action = false
        }
        this.timeSwitchData[6].action = true
        this.reStart()
      }
    },
    closeSelect () {
      [this.timeSelectAction, this.showtimeList] = [false, false]
    },
    reloadData (state) {
      this.zhyeSwitch = state == 0 ? 2 : 1 
      this.reStart()
    },
    reloadData1 (state) {
      this.szgkSwitch = state == 0 ? 2 : 1
      this.reStart()
    },
    reStart () {
      this.$store.dispatch('laodAsyncT')
      this.init()
    },
    highchartFunc (arg) {
      let arr1 = []
      for(var item of this.allData.balanceList){
        arr1.push(parseInt(item.amount.replace(/,/g,'')))
      }
      new Highcharts.Chart('Container', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        credits : { enabled : false },
        legend : { enabled : false },
        title: {
          text: '<span>'+ arg +'</span><br><span>总金额</span>',
          align: 'center',
          verticalAlign: 'middle',
          y: 0,
          style: {
            "fontSize" : '14px'
          }
        },
        colors:['#ce8574','#44aeff', '#97d978', '#ffd575', '#ff8985', '#8995e7', '#ff9000', '#ea8574'],
        tooltip: {
          pointFormat: '<b>{point.y}%</b>'
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
              distance: 0,
              style: {
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0px 1px 2px black'
              }
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%']
          }
        },
        series: [{
          type: 'pie',
          name: ' ',
          innerSize: '70%',
          data: arr1
        }]
      })
    }
  }
}
</script>
