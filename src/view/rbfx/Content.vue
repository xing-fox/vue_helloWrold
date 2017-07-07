<style lang="less" scoped>
[v-cloak]{
  display:none;
}
.titleShow{
  height:40px;
  background:#fff;
  position:relative;
  .timeshoise{
    height:20px;
    line-height:20px;
    font-size:14px;
    color:#333;
    position:absolute;
    top:10px;left:20px;
    i{   
      width:0;   
      height:0;
      position:absolute;
      top:7px;right:-15px;   
      border-left:5px solid transparent;   
      border-right:5px solid transparent;   
      border-top:6px solid #666;
    }
  }
  .timeshoiseActive{
    height:20px;
    line-height:20px;
    font-size:14px;
    color:#ff9008;
    position:absolute;
    top:10px;left:20px;
    i{   
      width:0;   
      height:0;
      position:absolute;
      top:7px;right:-15px;   
      border-left:5px solid transparent;   
      border-right:5px solid transparent;   
      border-bottom:6px solid #ff9008;
    }
  }
  .showData{
    line-height:40px;
    position:absolute;
    top:0p;right:12px;
    font-size:14px;
    color:#8a8a8a;
    .span{
      vertical-align:middle;
    }
    .sdColor1{
      color:#5F54FC;
    }
    .sdColor2{
      color:#ff9008;
    }
  }
  .timeList{
    width:80px;
    background:#fff;
    position:absolute;
    top:36px;left:5px;
    border:1px solid #ddd;
    border-radius:2px;
    box-sizing:border-box;
    z-index:100;
    &:before{
      content:'';
      width:0;
      height:0;   
      border-left:6px solid transparent;   
      border-right:6px solid transparent;   
      border-bottom:8px solid #ccc;
      position:absolute;
      top:-8px;left:50%;
      margin-left:-6px;
    }
    &:after{
      content:'';
      width:0;
      height:0;   
      border-left:6px solid transparent;   
      border-right:6px solid transparent;   
      border-bottom:8px solid #fff;
      position:absolute;
      top:-7px;left:50%;
      margin-left:-6px;
    }
  }
}
.mainContent{
  background:#fff;
  .content1{
    p{
      height:50px;
      line-height:50px;
      color:#333;
      font-size:16px;
      position:relative;
      i{
        display:inline-block;
        width:10px;
        height:10px;
        margin:0 10px 0 20px;
        border-radius:5px;
        background:#ff9008;
      }
    }
    ul{
      font-size:0;
      li{
        height:44px;
        line-height:44px;
        font-size:#16px;
        color:#333;
        margin:0 10px 0  20px;
        font-size:16px;
        position:relative;
        .list1{
          width:34px;
          height:34px;
          line-height:34px;
          text-align:center;
          font-size:14px;
          color:#fff;
          position:absolute;
          top:5px;left:0;
          border-radius:17px;
          background:#ddd;
        }
        .list2{
          margin-left:50px;
        }
        .list3{
          position:absolute;
          top:0;right:0;
          color:#F5564C;
          img{
            width:30px;
            height:30px;
            margin:7px 0 0 0;
          }
        }
      }
    }
  }
  .content2{
    background:#fff;
    p{
      height:50px;
      line-height:50px;
      color:#333;
      font-size:16px;
      position:relative;
      i{
        display:inline-block;
        width:10px;
        height:10px;
        margin:0 10px 0 20px;
        border-radius:5px;
        background:#ff9008;
      }
    }
    ul{
      margin:0 10px 0  20px;
      position:relative;
    }
  }  
}
</style>

<template>
  <div id="app" v-cloak>
    <C-title :data-prop="titleData"></C-title>
    <div class="titleShow bor-T">
      <div :class="{ timeshoise:datatimechoise, timeshoiseActive:!datatimechoise }" @click="timeListFunc">{{ timeChoise }}<i></i></div>
      <div class="showData">已提交 <span class="sdColor1">{{ totalData.submitNum }}</span> 人，未提交 <span class="sdColor2">{{ totalData.noSubmitNum }}</span> 人</div>
      <div class="timeList" v-if="showtimeList">
        <T-list :data-prop="timeList" @changeData='reloadData'></T-list>
      </div>
    </div>
    <div class="mainContent bor-T">
      <div class="content1">
        <p class="bor-T"><i></i><span>自己和直属下级</span></p>
        <ul>
          <li class="bor-T" v-for="item in myselfData" :data-id="item.id">
            <div class="list1">
              <span>{{ item.username | filter1 }}</span>
              <!--<img src="">-->
            </div>
            <div class="list2">
              <span>{{ item.username }}</span>
            </div>
            <div class="list3">
              <span v-if="item.issubmit == 0">未交</span>
              <img v-else src="../../assets/gou.png">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mainContent bor-T">
      <div class="content2">
        <p class="bor-T"><i></i><span>下级部门</span></p>
        <ul>
          <rbc-List :data-prop="supData"></rbc-List>
        </ul>
      </div>  
    </div>
  </div>
</template>
 
<script>
import cTitle from '@/components/commonTitle'
import rbCList from '@/components/rbChildList'
import tList from '@/components/timeList'

export default {
  name: 'content',
  data () {
    return {
      titleData: {
        title: '日报分析'
      }, //报表头部
      datatimechoise: true, //时间选择样式切换
      timeChoise: '今日', //默认今日
      timeList: [], //总的时间类别
      showtimeList: false, //判断显示隐藏时间list
      myselfData: [], //自己和直属下级
      supData: Object, //下级部门
      totalData: Object, //头部信息
      timeType: 0 //默认今日
    }
  },
  filters: {
    filter1 (value) {
      return value.charAt(0).toLocaleUpperCase()
    }
  },
  created () {
    this.timeList = [
      {
        name: '今日',
        action: true,
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
        action: false,
        type: 4
      },{
        name: '上月',
        action: false,
        type: 5
      }
    ]
    this.init()
  },
  components: {
    'C-title': cTitle,
    'T-list': tList,
    'rbc-List': rbCList
  },
  methods: {
    init () {
      this.$http.post('/blog/report/subDepartments.action', 
        {'time_type': this.timeType},{emulateJSON: true}
        ).then((response) => {
          this.supData = response.body.data
        }, (response) => {
      })
      this.$http.post('/blog/report/blogMainUsersList.action', 
        {'time_type': this.timeType},{emulateJSON: true}
        ).then((response) => {
          this.myselfData = response.body.data
          this.totalData = {
            noSubmitNum: response.body.noSubmitNum,
            submitNum: response.body.submitNum
          }
          this.$Loading.finish()
        }, (response) => {
      })
    },
    reloadData (state) {
      [this.datatimechoise,this.showtimeList] = [true,false]
      this.timeChoise = this.timeList[state].name
      for(var item of this.timeList){
        item.action = false
      }
      this.timeList[state].action = true //重置时间参数
      this.timeType = state
      this.init()
    },
    timeListFunc () {
      this.datatimechoise =  !this.datatimechoise
      this.showtimeList = !this.showtimeList
    }
  }
}
</script>
