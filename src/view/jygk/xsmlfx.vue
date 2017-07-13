<style lang="less" scoped>
  #app{
    .tab{
      height:40px;
      font-size:14px;
      background:#eee;
      line-height:40px;  
      display:flex;
      position:relative;
      .tgoods{
        flex:1;
        text-align:left;
        padding-left:15px;
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
          top:40px;left:0;
          z-index:10;
        }
      }
      .tTime{
        width:100px;
        text-align:center;
        position:relative;
        span{
            display:inline-block;
            max-width:80px;
            height:40px;
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
          top:40px;right:0;
          z-index:10;
        }
      }
      .tUnit{
        width:100px;
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
          top:40px;left:0;
          z-index:10;
        }
      }
    }
    .tabList{
      height:80px;  
      display:flex;
      border-top:1px solid #ccc;
      .list1,.list2,.list3{
        flex:1;
        padding:20px 0;
        text-align: center;
        border-bottom:1px solid #ccc;
        p{
          color:#999;  
          line-height:20px;  
          &:last-child{
            font-size:14px;
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
        height:50px;
        line-height:50px;  
        display:flex;  
        position:relative;
        .icon{
          width:50px;
          position:relative;
          .img1{
            display:inline-block;
            width:50px;
            height:50px;
            background-image:url('../../assets/jp.png');
            background-repeat:no-repeat;
            background-size:50% 65%;
            background-position:center center;
          }
          .img2{
            display:inline-block;
            width:50px;
            height:50px;
            background-image:url('../../assets/yp.png');
            background-repeat:no-repeat;
            background-size:50% 65%;
            background-position:center center;
          }
          .img3{
            display:inline-block;
            width:50px;
            height:50px;
            background-image:url('../../assets/tp.png');
            background-repeat:no-repeat;
            background-size:50% 65%;
            background-position:center center;
          }
          span{
            display:inline-block;
            width:24px;
            height:24px;
            color:#fff;
            margin:0 13px;
            border-radius:12px;
            line-height:24px;
            text-align:center;
            background:#3687e3;  
          }
        }
        .content{
          flex:1;
          overflow:hidden; 
          display:-webkit-box; 
          -webkit-line-clamp:1; 
          text-overflow:ellipsis;
          -webkit-box-orient:vertical;
        }
        .price{
          width:90px;
          text-align:center;
        }
      }  
    }
    .sort{
      width:60px;
      height:60px;
      position:fixed;
      bottom:30px;
      right:30px;
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
      <div class="list1">
        <p>销售净额</p>
        <p>￥5,201,09</p>
      </div>
      <div class="list2 active">
        <p>销售毛利</p>
        <p>￥5,201,09</p>
      </div>
      <div class="list3">
        <p>毛利率</p>
        <p>38%</p>
      </div>
    </div>
    <ul class="listData">
      <li class="bor-B">
        <div class="icon">
          <i class="img2"></i>
          <!--<span>1</span>--> 
        </div>
        <div class="content"> <span>百草味</span> 接下来我们来看一下钩子函数的参数 </div>
        <div class="price">￥500,210</div> 
      </li>
      <li class="bor-B">
        <div class="icon"> <span>120</span> </div>
        <div class="content"> <span>百草味</span> 接下来我们来看一下钩子函数的参数接下来我们来看一下钩子函数的参数 </div>
        <div class="price">￥500,210</div> 
      </li>
    </ul>
    <div class="sort">
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
// import moment from 'moment'
export default {
  name: '',
  data () {
    return {
      titleData: {
        title: '销售毛利分析'
      },
      goodSwitchData: Array, //商品排行榜选项
      showgoodsList: false, //商品排行榜tab显隐
      goodsChoise: '商品排行榜',
      timeSwitchData: Array, //时间排行榜选项
      showtimeList: false, //时间排行榜tab显隐
      timeChoise: '本月',
      unitSwitchData: Array, //单位排行榜选项
      showunitList: false, //单位排行榜tab显隐
      unitChoise: '万元',
      timeSelectAction: false, //自定义时间显隐
      startTime: '',
      endTime: ''
    }
  },
  components: {
    'C-title': cTitle,
    'T-list': tList
  },
  mounted () {
  },
  methods: {
    goodsFunc () {
      [this.showtimeList, this.showunitList] = [false, false]
      this.showgoodsList = !this.showgoodsList
    },
    reloadgoodsData (state) {
      this.showgoodsList = false
      this.goodsChoise = this.goodSwitchData[state].name
      for(var item of this.goodSwitchData){
        item.action = false
      }
      this.goodSwitchData[state].action = true //重置时间参数     
    },
    timeFunc () {
      [this.showgoodsList, this.showunitList] = [false, false]
      this.showtimeList = !this.showtimeList
    },
    reloadtimeData (state) {
      if(state == 6){ //自定义时间
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
    unitFunc () {
      [this.showtimeList, this.showgoodsList] = [false, false]
      this.showunitList = !this.showunitList
    },
    reloadunitData (state) {
      this.showunitList = false
      this.unitChoise = this.unitSwitchData[state].name
      for(var item of this.unitSwitchData){
        item.action = false
      }
      this.unitSwitchData[state].action = true //重置时间参数     
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
        [this.timeSelectAction, this.showtimeList]=[false, false]        
        this.timeChoise = `${this.startTime}-${this.endTime}`
      }
    },
    closeSelect () {
      this.timeSelectAction = false
    }
  },
  created () { 
    this.$Loading.finish()
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
  }
}
</script>
