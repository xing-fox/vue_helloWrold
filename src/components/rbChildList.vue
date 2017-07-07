<style lang="less" scoped>
#app{
    padding-left:10px;
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
        top:8px;left:0;
        border-radius:17px;
        background:#ddd;
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
        <ul v-for="item in dataProp">
            <!--有下级部门的情况-->
            <li class="bor-T li_emps" v-if="item.type == 1">
                <div class="list4">
                    <span>{{ item.empname | filter1 }}</span>
                </div>
                <div class="list5">
                    <span>{{ item.empname }}</span>
                </div>
                <div class="list6 span_right">
                    <span v-if='1==1'>未交</span>
                    <img v-else src="../../assets/gou.png">
                </div>
            </li>  
            <li class="bor-T" v-else>
                <div v-if="item.depts || item.emps" @click="toggle(item.id)">
                    <div class="list1" :class="{list1_title: false}">
                        <i :class="{i_show: false, icon2: !icon_flag, icon1: icon_flag}"></i>
                        <span>{{item.dept_name}}</span>
                    </div>
                    <div class="list2">
                        <span>{{item.submitRate}}%</span>
                    </div>
                    <div class="list3" :class="{span_right : true}">
                        <span>{{item.notSubmitNum}}人未交</span>
                        <img :class="{img_show: true}" src="../assets/arrow_right.png" alt="">
                    </div>
                    <div v-if="item.emps" v-show="itemOpen == item.id ">
                        <rbChildList :data-prop='item.emps'></rbChildList>
                    </div>
                    <div v-if="item.depts" v-show="itemOpen == item.id">
                        <rbChildList :data-prop='item.depts'></rbChildList>
                    </div>
                </div>
                <div v-else>
                    <div class="list1" :class="{list1_title: true}">
                        <span>{{item.dept_name | filtergeshi}}</span>
                    </div>
                    <div class="list2">
                        <span>{{item.submitRate}}%</span>
                    </div>
                    <div class="list3" :class="{span_right : false}">
                        <span>{{item.notSubmitNum}}人未交</span>
                        <img :class="{img_show: false}" src="../assets/arrow_right.png" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'rbChildList',
  data () {
    return {
      icon_flag: true,
      itemOpen: Number,
      deptsOpen: false,
      localData: Object
    }
  },
  props: ['dataProp'],
  created () {
  },
  filters: {
    filtergeshi (value) {
      return value.replace(/(^\s*)/g,"")
    },
    filter1 (value) {
      return value.charAt(0).toLocaleUpperCase()
    }
  },
  methods: {
    toggle (val) {
      this.itemOpen = value
    }
  },
  watch: {
    dataProp(curVal,oldVal){
    } 
  }
}
</script>
