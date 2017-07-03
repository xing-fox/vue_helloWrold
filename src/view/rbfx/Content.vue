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
      li{
        height:50px;
        line-height:50px;
        font-size:16px;
        color:#333;
        font-size:0;
        position:relative;
        i{
          width:0;   
          height:0;
          position:absolute;
          top:20px;left:0;   
          border-top:5px solid transparent;   
          border-bottom:5px solid transparent;   
          border-left:6px solid #999;
        }
        .list1{
          height:50px;
          line-height:50px;
          font-size:16px;
          color:#333;
          padding-left:20px;
          .i_show{
            display:none
          }
        }
        .list1_title{
          padding-left: 0 !important;
        }
        .list2{
          width:34px;
          height:34px;
          line-height:34px;
          text-align:center;
          font-size:12px;
          position:absolute;
          top:8px;right:120px;
          border:1px solid #ddd;
          border-radius:17px;
        }
        .list3{
          position:absolute;
          top:0;right:18px;
          color:#F67063;
          font-size:16px;
          img{
            width:16px;
            height:16px;
            position:absolute;
            top:17px;right:-18px;
            &.img_show{
              display:none;
            }
          }
        }
        .list4{
          width:34px;
          height:34px;
          line-height:34px;
          text-align:center;
          font-size:14px;
          color:#fff;
          position:absolute;
          top:8px;left:0;
          border-radius:17px;
          background:#ddd;
        }
        .list5{
          margin-left:50px;
          span{
            font-size:16px;
          }
        }
        .list6{
          width:30px;
          height:30px;
          position:absolute;
          top:10px;right:0;
          color:#F5564C;
          img{
            width:100%;
            height:100%;
          }
        }
      }
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
      <div class="content2">
        <p class="bor-T"><i></i><span>下级部门</span></p>
        <ul class="bor-T"><!--有下级部门的情况-->
          <li>
            <div class="list1" :class="{list1_title: false}">
              <i :class="{i_show: false}"></i>
              <span>华中区华中区</span>
            </div>
            <div class="list2">
              <span>0%</span>
            </div>
            <div class="list3">
              <span>213人未交</span>
              <img :class="{img_show: true}" src="../../assets/arrow_right.png" alt="">
            </div>
          </li>
        </ul>
        <ul class="bor-T"><!--没有下级部门的情况-->
          <li>
            <div class="list4">
              <span>方</span>
              <!--<img src="">-->
            </div>
            <div class="list5">
              <span>陈军伟</span>
            </div>
            <div class="list6">
              <span v-if='1==2'>未交</span>
              <img v-else src="../../assets/gou.png">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
import cTitle from '@/components/commonTitle'
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
      totalData:Object, //头部信息
      timeType: 0 //默认今日
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
    'T-list': tList
  },
  filters: {
    filter1 (value) {
      return value.charAt(0).toLocaleUpperCase()
    }
  },
  methods: {
    init () {
      this.$http.post('/blog/report/blogMainUsersList.action', 
        {'time_type': this.timeType},{emulateJSON: true}
        ).then((response) => {
            this.myselfData = response.body.data
            this.totalData = {
              noSubmitNum: response.body.noSubmitNum,
              submitNum: response.body.submitNum
            }
        }, (response) => {
      })
    },
    subDepart () {
      this.$http.post('/blog/report/subDepartments.action', 
        {'time_type': this.timeType},{emulateJSON: true}
        ).then((response) => {
            this.$Loading.finish()
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
