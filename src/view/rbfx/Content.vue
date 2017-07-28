<style lang="less" scoped>
[v-cloak]{
  display:none;
}
.titleShow{
  height:40px;
  text-align:center;
  background:#fff;
  position:relative;
  .timeshoise{
    width:100px;
    height:20px;
    line-height:20px;
    font-size:14px;
    color:#333;
    position:absolute;
    top:10px;left:0;
    i{   
      width:0;   
      height:0;
      position:absolute;
      top:7px;right:20px;   
      border-left:5px solid transparent;   
      border-right:5px solid transparent;   
      border-top:6px solid #666;
    }
  }
  .timeshoiseActive{
    width:100px;
    height:20px;
    line-height:20px;
    font-size:14px;
    color:#ff9008;
    position:absolute;
    top:10px;left:0;
    i{   
      width:0;   
      height:0;
      position:absolute;
      top:7px;right:20px;   
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
    width:100px;
    background:#fff;
    position:absolute;
    top:40px;left:5px;
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
          img{
            width:100%;
            height:100%;
            border-radius:17px;
          }
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
    table{
      width:100%;
      margin-bottom:20px;
      tr{
        width:100%;
        td{
          width:22%;
          color:#000;
          border:1px solid #ddd;
          text-align:center;
          line-height:30px;
          position:relative;
          &:first-child{
            width:34% !important;
          }
          .up{
            width:0;   
            height:0;
            position:absolute;
            top:10px;right:12px;   
            border-left:4px solid transparent;   
            border-right:4px solid transparent;   
            border-bottom:4px solid #999;
          }
          .upSel{
            width:0;   
            height:0;
            position:absolute;
            top:10px;right:12px;   
            border-left:4px solid transparent;   
            border-right:4px solid transparent;   
            border-bottom:4px solid #ff9008;
          }
          .down{
            width:0;   
            height:0;
            position:absolute;
            bottom:10px;right:12px;   
            border-left:4px solid transparent;   
            border-right:4px solid transparent;   
            border-top:4px solid #999;
          }
          .downSel{
            width:0;   
            height:0;
            position:absolute;
            bottom:10px;right:12px;   
            border-left:4px solid transparent;   
            border-right:4px solid transparent;   
            border-top:4px solid #ff9008;
          }
          &:last-child{
            .up{
              width:0;   
              height:0;
              position:absolute;
              top:10px;right:7px !important;   
              border-left:4px solid transparent;   
              border-right:4px solid transparent;   
              border-bottom:4px solid #999;
            }
            .upSel{
              width:0;   
              height:0;
              position:absolute;
              top:10px;right:7px !important;   
              border-left:4px solid transparent;   
              border-right:4px solid transparent;   
              border-bottom:4px solid #ff9008;
            }
            .down{
              width:0;   
              height:0;
              position:absolute;
              bottom:10px;right:7px !important;   
              border-left:4px solid transparent;   
              border-right:4px solid transparent;   
              border-top:4px solid #999;
            }
            .downSel{
              width:0;   
              height:0;
              position:absolute;
              bottom:10px;right:7px !important;   
              border-left:4px solid transparent;   
              border-right:4px solid transparent;   
              border-top:4px solid #ff9008;
            } 
          }
        }
        &:first-child{
          background:#eee;
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
        <ul v-if="timeShowDepart">
          <li class="bor-T" v-for="item in myselfData" :data-id="item.id">
            <div class="list1">
              <img v-if="item.headsmall !=''" :src="item.headsmall">
              <span v-else>{{ item.username | filter1 }}</span>
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
        <table v-else>
          <tr>
            <td>姓名</td>
            <td @click="Option(1)">日报数
              <i :class="{ upSel: indexFlag==1 && optionNum1, up:indexFlag!=1 || !optionNum1 }"></i>
              <i :class="{ downSel: indexFlag ==1 && !optionNum1,down: indexFlag!=1 || optionNum1 }"></i>
            </td>
            <td @click="Option(2)">总星数
              <i :class="{ upSel: indexFlag==2 && optionNum2, up:indexFlag!=2 || !optionNum2 }"></i>
              <i :class="{ downSel: indexFlag ==2 && !optionNum2,down: indexFlag!=2 || optionNum2 }"></i>
            </td>
            <td @click="Option(3)">平均星数
              <i :class="{ upSel: indexFlag==3 && optionNum3, up:indexFlag!=3 || !optionNum3 }"></i>
              <i :class="{ downSel: indexFlag ==3 && !optionNum3,down: indexFlag!=3 || optionNum3 }"></i>
            </td>
          </tr>
          <tr v-for="item in weekData">
            <td>{{item.name}}</td>
            <td>{{item.blogNum}}</td>
            <td>{{item.totalStart}}</td>
            <td>{{item.avgStart}}</td>
          </tr>
        </table>
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
      indexFlag: 1,
      optionNum1:true, //日报
      optionNum2:false, //总星
      optionNum3:false, //平均星
      datatimechoise: true, //时间选择样式切换
      timeChoise: '今日', //默认今日
      timeList: [], //总的时间类别
      showtimeList: false, //判断显示隐藏时间list
      myselfData: [], //自己和直属下级
      supData: Object, //下级部门
      totalData: Object, //头部信息
      timeType: this.$route.query.flag || 1, //默认今日
      timeShowDepart: true,
      weekData: Object,
      sortName: 'count',
      sortMode: 'asc'
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
      if(this.timeType <2){
        this.timeShowDepart = true
        this.$http.post('/blog/report/subDepartments.action', 
          {'time_type': this.timeType},
          {emulateJSON: true}
          ).then((response) => {
            this.supData = response.body.data
          }, (response) => {
        })
      }else{
        this.timeShowDepart = false
        this.$http.post('/blog/report/blogMainWeek.action', 
          {'time_type': this.timeType, 'sort_name' : this.sortName, 'sort_mode' : this.sortMode},
          {emulateJSON: true}
          ).then((response) => {
            this.weekData = response.body.data
          }, (response) => {
        })
      }
      this.$http.post('/blog/report/blogMainUsersList.action', 
        {'time_type': this.timeType},
        {emulateJSON: true}
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
    },
    Option (state) {
      if( state == 1 ){
        if(this.indexFlag ==1){
          this.optionNum1=!this.optionNum1
          this.sortName = 'count'
          this.sortMode = 'desc'
        }else{
          this.optionNum1 = true
          this.sortName = 'count'
          this.sortMode = 'asc'
          this.indexFlag = 1
        }
      }else if( state == 2){
        if(this.indexFlag ==2){
          this.optionNum2=!this.optionNum2  
          this.sortName = 'sum'
          this.sortMode = 'desc'      
        }else{
          this.optionNum2 = true
          this.sortName = 'sum'
          this.sortMode = 'asc'
          this.indexFlag = 2
        }
      }else{
        if(this.indexFlag ==3){
          this.optionNum3=!this.optionNum3
          this.sortName = 'avg'
          this.sortMode = 'desc'
        }else{
          this.optionNum3 = true
          this.sortName = 'avg'
          this.sortMode = 'asc'
          this.indexFlag = 3
        }
      }
      this.init()
    }
  }
}
</script>
