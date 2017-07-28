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
        color:#2d8cf0;
        font-size:12px;
        line-height:34px;
        text-align:center;
        position:absolute;
        border-radius:17px;
        top:8px;right:110px;
        border:1px solid #ddd;
        box-sizing:border-box;
        .clipLeft{
            width:34px;
            height:34px;
            position:absolute;
            clip:rect(0px 17px 34px 0px);
            top:-1px;left:-1px;
            div{
                width:100%;
                height:100%;
                position:absolute;
                top:0;left:0;
                clip:rect(0px 17px 34px 0px);
                border:1px solid #2d8cf0;
                border-radius:17px;
            }
        }
        .clipRight{
            width:34px;
            height:34px;
            position:absolute;
            clip:rect(0px 34px 34px 17px);
            top:-1px;right:-1px;
            div{
                width:100%;
                height:100%;
                position:absolute;
                top:0;left:0;
                clip:rect(0px 34px 34px 17px);
                border:1px solid #2d8cf0;
                border-radius:17px;
            }
        }
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
        <ul v-for="item in dataProp">
            <!--有下级部门的情况-->
            <li class="bor-T li_emps" v-if="item.type == 1">
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
            <li class="bor-T" v-else>
                <div v-if="item.depts || item.emps" @click.stop="toggle(item.id)">
                    <div class="list1" :class="{list1_title: false}">
                        <i :class="{i_show: false, icon2: itemOpen == item.id, icon1: itemOpen != item.id}"></i>
                        <span>{{item.dept_name}}</span>
                    </div>
                    <div class="list2">
                        <span>{{item.submitRate}}%</span>
                        <div :class="{clipLeft: item.submitRate*3.6>180}">
                            <div :style="{ transform: 'rotate(' + item.submitRate*3.6 + 'deg)' }"></div>
                        </div>
                        <div v-if="item.submitRate*3.6<180 || item.submitRate*3.6 ==180" class="clipRight">
                            <div :style="{ transform: 'rotate(' + -(50-item.submitRate)*3.6 + 'deg)' }"></div>
                        </div>
                        <div v-else class="clipRight">
                            <div style="transform: rotate(0deg)"></div>
                        </div>
                    </div>
                    <div class="list3" :class="{span_right : true}">
                        <span>{{item.notSubmitNum}}人未交</span>
                        <img :class="{img_show: true}" src="../assets/arrow_right.png" alt="">
                    </div>
                    <div v-if="item.emps" v-show="itemOpen == item.id">
                        <rbChildList :data-prop='item.emps'></rbChildList>
                    </div>
                    <div v-if="item.depts" v-show="itemOpen == item.id">
                        <rbChildList :data-prop='item.depts'></rbChildList>
                    </div>
                </div>
                <div v-else>
                    <router-link :to="{ path: '/rbfx/contdetail', query: { id: item.id, deptName: item.dept_name }}">
                        <div class="list1" :class="{list1_title: true}">
                            <span>{{item.dept_name | filtergeshi}}</span>
                        </div>
                        <div class="list2">
                            <span>{{item.submitRate}}%</span>
                            <div :class="{clipLeft: item.submitRate*3.6>180}">
                                <div :style="{ transform: 'rotate(' + item.submitRate*3.6 + 'deg)' }"></div>
                            </div>
                            <div v-if="item.submitRate*3.6<180 || item.submitRate*3.6 ==180" class="clipRight">
                                <div :style="{ transform: 'rotate(' + -(50-item.submitRate)*3.6 + 'deg)' }"></div>
                            </div>
                            <div v-else class="clipRight">
                                <div style="transform: rotate(0deg)"></div>
                            </div>
                        </div>
                        <div class="list3" :class="{span_right : false}">
                            <span>{{item.notSubmitNum}}人未交</span>
                            <img :class="{img_show: false}" src="../assets/arrow_right.png" alt="">
                        </div>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState , mapActions } from 'vuex'
export default {
  name: 'rbChildList',
  data () {
    return {
      itemOpen: Number,
      localData: Object
    }
  },
  props: ['dataProp'],
  created () {
    //console.log(this.countLocalData)  
  },
  //computed: mapState({
  //  countLocalData: state => state.Rbfx.rbfxRemeber
  //}),
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
      if(this.localData[val]){
        this.localData[val] = false
        this.itemOpen = ''
      }else{
        this.localData[val] = true
        this.itemOpen = val
      }
      //this.LocaldataAction(this.localData)
    }
    //...mapActions([
    //  'LocaldataAction'
    //])
  }
}
</script>
