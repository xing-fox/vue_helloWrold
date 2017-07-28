<style lang="less" scoped>
  #app{
    .title{
        height:40px;
        line-height:40px;
        color:#000;
        font-size:14px;
        padding-left:10px;
        background:#ccc;
    }  
  }
  li{
    line-height:50px;
    font-size:16px;
    color:#333;
    font-size:0;
    position:relative;
    &.li_emps{
        height:50px;
    }
    i{
        width:0;   
        height:0;
        &.icon1{
            position:absolute;
            top:20px;left:0;   
            border-top:5px solid transparent;   
            border-bottom:5px solid transparent;   
            border-left:6px solid #999;
        }
        &.icon2{
            position:absolute;
            top:20px;left:0;   
            border-left:5px solid transparent;   
            border-right:5px solid transparent;   
            border-top:6px solid #999;  
        }
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
        top:8px;right:110px;
        border:1px solid #ddd;
        border-radius:17px;
    }
    .list3{
        position:absolute;
        top:0;right:18px;
        color:#F67063;
        font-size:16px;
        &.span_right{
            //right:0 !important;
        }
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
        top:8px;left:10px;
        border-radius:17px;
        background:#ddd;
        img{
            width:100%;
            height:100%;
            border-radius:17px;
        }
    }
    .list5{
        margin-left:60px;
        span{
            font-size:16px;
        }
    }
    .list6{
        position:absolute;
        top:0;right:18px;
        color:#F67063;
        font-size:16px;
        &.span_right{
            //right:0 !important;
        }
        img{
            width:30px;
            height:30px;
            position:absolute;
            top:17px;right:0;
        &.img_show{
            display:none;
        }
        }
    }
  }
</style>

<template>
  <div id="app">
    <C-title :data-prop="titleData"></C-title>
    <div class="title">
      <span>{{ departMent }}（{{ departNumber }}人）</span>
    </div>
    <ul v-for="item in dataProp">
        <li class="bor-T li_emps">
            <div class="list4">
                <img v-if="item.face !=''" :src="item.face" alt="">
                <span v-else>{{ item.empname | filter1 }}</span>
            </div>
            <div class="list5">
                <span>{{ item.empname }}</span>
            </div>
            <div class="list6 span_right">
                <span v-if='1==1'>未交</span>
                <img v-else src="../../assets/gou.png">
            </div>
        </li>
    </ul>
  </div>
</template>

<script>  
import cTitle from '@/components/commonTitle'

export default {
  name: 'rbfxContDetails',
  data () {
    return {
      titleData: {
        title: '明细'
      },
      dataProp: Object,
      departMent: String,
      departNumber: Number
    }
  },
  filters: {
    filtergeshi (value) {
      return value.replace(/(^\s*)/g,"")
    },
    filter1 (value) {
      return value.charAt(0).toLocaleUpperCase()
    }
  },
  components: {
    'C-title': cTitle
  },
  created () {
    this.departMent = this.$route.query.deptName
    this.init()
  },
  methods: {
    init () {
      this.$http.post('/blog/report/blogPersonDetail.action', 
        {'time_type': 1, 'dept_id': this.$route.query.id, 'type': 0},
        {emulateJSON: true}
        ).then((response) => {
          this.$Loading.finish()
          this.dataProp = response.body.data
          this.departNumber = response.body.data.length || 0
        }, (response) => {
      })  
    }  
  }
}
</script>
