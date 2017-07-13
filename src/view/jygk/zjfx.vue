<style lang="less" scoped>
  #app{
    background: #f1f1f1;
  }
  .content1{
    background:#fff;
    height:45px;
    position:relative;
    .title{
      color:#000;
      font-size:16px;
      margin-left:10px;
      line-height:45px;
    }
    .switch{
      position:absolute;
      top:10px;right:5px;
    }
  }
  .content2{
    width:100%;
    height:200px;
    background:#fff;
    position:relative;
    #Container{
      width:200px;
      max-width:50%;
      height:200px;
    }
    .contlist{
      width:50%;
      position:absolute;
      top:40px;right:0;
    }
    .contlist li{
      height:24px;
      line-height:24px;
      font-size:12px;
      color:#666;
      i{
        display:inline-block;
        margin-right:10px;
        width:8px;
        height:8px;
        border-radius:4px;
        vertical-align: middle;
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
      }
      span{
        width:40%;
        display:inline-block;
        vertical-align:middle;
        &.span1{
          text-align:right;
        }
      }
    }
  }
  .content3{
    margin-top:10px;
    background:#fff;
    position:relative;
    .title{
      color:#000;
      font-size:16px;
      margin-left:10px;
      line-height:45px;
    }
    .switch{
      position:absolute;
      top:10px;right:5px;
    }
    .money{
      height:40px;
      line-height:40px;
      position:relative;
      display:flex;
      .mTime{
        width:100px;
        font-size:14px;
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
          top:40px;left:0;
          z-index:10;
        }
      }
      .mIn{
        flex:2;
        color:#666;
        font-size:14px;
        font-weight:bold;
        text-align:center;
      }
      .mOut{
        flex:2;
        color:#666;
        font-size:14px;
        font-weight:bold;
        text-align:center;
      }
    }
    .mBut{
      width:130px;
      margin:5px 20px;
      display:flex;
      .active{
        color:#3687e3 !important;
        border:1px solid #3687e3 !important;
      }
      .bIn,.bOut{
        flex:1;
        margin:0 10px 0 0;
        height:30px;
        line-height:30px;
        border-radius:2px;
        color:#666;
        text-align:center;
        border:1px solid #999;
      }
    }
    .listTitle{
      color:#999;
      display:flex;
      font-size:13px;
        .rank,.money,.ratio{
          display:inline-block;
          height:40px;
          line-height:40px;
          flex:1;
          text-align:center;
        }
        .types{
          height:40px;
          line-height:40px;
          flex:3;
          text-align:left;
        }
    }
    .listData li{
      color:#666;
      font-size:13px;
      display:flex;
      position:relative;
        .rank,.money,.ratio{
          display:inline-block;
          height:40px;
          line-height:40px;
          flex:1;
          text-align:center;
        }
        .types{
          display:inline-block;
          height:40px;
          line-height:40px;
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
        width:250px;
        height:200px;
        position:absolute;
        top:50%;
        left:50%;
        margin:-100px 0 0 -125px;
        background:#fff;
        .close{
          width:20px;
          height:20px;
          position:absolute;
          top:0px;
          right:2px;
          font-size:22px;
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
      <ul class="contlist">
        <li><i class="icon1"></i><span>现金</span><span class='span1'>200</span></li>
        <li><i class="icon2"></i><span>中国银行</span><span class='span1'>100</span></li>
        <li><i class="icon3"></i><span>招商银行</span><span class='span1'>50</span></li>
        <li><i class="icon4"></i><span>民生银行</span><span class='span1'>90</span></li>
        <li><i class="icon5"></i><span>支付宝</span><span class='span1'>400</span></li>
      </ul>
    </div>
    <div class="content3">
      <div class="title">收支概况</div>
      <div class="switch">
        <T-switch :data-prop="switchData" @changeData='reloadData'></T-switch>
      </div>
      <div class="money bor-T">
        <div class="mTime">
          <span @click="timeFunc">{{ timeChoise }}</span><span :class="{triangle: !showtimeList, triangle1: showtimeList}"></span>
          <div class="timeSwitch" v-if="showtimeList">
            <T-list :data-prop="timeSwitchData" @changeData='reloadtimeData'></T-list>
          </div>
        </div>
        <div class="mIn">收入: <span>3000</span></div>
        <div class="mOut">支出: <span>1600</span></div>
      </div>
      <div class="mBut">
        <div class="bIn active">收入</div>
        <div class="bOut">支出</div>
      </div>
      <div class="listTitle">
        <span class="rank">排名</span>
        <span class="types">收入类型</span>
        <span class="money">金额</span>
        <span class="ratio">环比</span>
      </div>
      <ul class="listData">
        <li class="bor-T"> 
          <span class="rank"> 1 </span>
          <span class="types"> 返款 </span>
          <span class="money"> 25 </span>
          <span class="ratio"> 10% </span>
        </li>
        <li class="bor-T"> 
          <span class="rank"> 2 </span>
          <span class="types"> 返利 </span>
          <span class="money"> 25 </span>
          <span class="ratio"> 10% </span>
        </li>
        <li class="bor-T"> 
          <span class="rank"> 3 </span>
          <span class="types"> 房租 </span>
          <span class="money"> 25 </span>
          <span class="ratio"> 10% </span>
        </li>
        <li class="bor-T"> 
          <span class="rank"> 4 </span>
          <span class="types"> 转入 </span>
          <span class="money"> 25 </span>
          <span class="ratio"> 10% </span>
        </li>
        <li class="bor-T"> 
          <span class="rank"> 5 </span>
          <span class="types"> 其他 </span>
          <span class="money"> 25 </span>
          <span class="ratio"> 10% </span>
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
export default {
  name: 'jygkZjfx',
  data () {
    return {
      titleData: {
        title: '资金分析'
      },
      showtimeList: false, //设置时间选择组件显隐
      switchData: Object, //设置switch所需要带的参数
      timeChoise: '本月', //默认时间设置
      timeSwitchData: Array,
      timeSelectAction: false,
      endTime: '',
      startTime: ''
    }
  },
  created () {
    this.switchData = {
      content: [
        {
          keyword: '元',
          state: true
        },
        {
          keyword: '万元',
          state: false
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
    this.$Loading.finish()
  },
  components: {
    'C-title': cTitle,
    'T-switch': tSwitch,
    'T-list': tList
  },
  mounted () {
    this.highchartFunc()
  },
  computed: {    
  },
  filters: {
  },
  methods: {
    timeFunc () {
      this.showtimeList = !this.showtimeList
    },
    reloadtimeData (state) {
      if(state==6){
        this.timeSelectAction = true
      }else{
        this.showtimeList = false
        this.timeChoise = this.timeSwitchData[state].name
        for(var item of this.timeSwitchData){
          item.action = false
        }
        this.timeSwitchData[state].action = true //重置时间参数
      }
    },
    input1Time (state) {
      this.startTime = state  
    },
    input2Time (state) {
      this.endTime = state
      if(this.endTime < this.startTime){  
        setTimeout(function(){
          alert('结束时间必须大于开始时间')
        }.bind(this),500)
      }
    },
    timeSure () {
      if (this.endTime == '' || this.startTime == ''){
        return alert('开始或结束时间不能为空')
      }else{
        this.timeSelectAction = false
      }
    },
    closeSelect () {
      [this.timeSelectAction, this.showtimeList] = [false, false]
    },
    reloadData () {
    },
    highchartFunc () {
      var arr1 = [15,45,15,5,20]
      new Highcharts.Chart('Container', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        credits : { enabled : false },
        legend : { enabled : false },
        title: {
          text: '<span>256</span><br><span>总金额</span>',
          align: 'center',
          verticalAlign: 'middle',
          y: 0,
          style: {
            "fontSize" : '12px'
          }
        },
        colors:['#44aeff', '#97d978', '#ffd575', '#ff8985', '#8995e7'],
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
