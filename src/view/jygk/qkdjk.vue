<style lang="less" scoped>
  #app{
    .contentMain{
      margin-top:.88rem;
    }
    .noticetitle{
      width:100%;
      background:#f1f1f1;
      padding:.4rem 0;
      text-align:center;
      font-size:.32rem;
      color:#666;
    }
    ul .listData{
      display:flex;
      height:1.6rem;
      position:relative;
      .cLeft{
        flex:2;
        color:#666;
        padding:.4rem 0;
        text-align:center;
        p{
          height:.4rem;
        }
      }
      .cMid{
        flex:1.5;
          ul li{
            width:1.2rem;
            height:.6rem;
            color:#fff;
            margin:.5rem auto;
            line-height:.6rem;
            text-align:center;
            &.color1{
              background:#ff6698;
            }
            &.color2{
              background:#00cd66;
            }
            &.color3{
              background:#6699ff;
            }
          }
      }
      .cRight{
        width:3.2rem;
        height:1.6rem;
        display:table;
        ul{
          display:table-cell;
          vertical-align:middle;
          li{
            margin-left:.2rem;
            text-align:left;
            &:last-child{
              color:#ff9000;
            }
          }
        }
      }
    }  
  }
</style>

<template>
  <div id="app">
    <C-title :data-prop="titleData"></C-title>
    <div class="contentMain">
      <div class="noticetitle" v-if="noticeShow">暂无数据...</div>
      <ul>
        <li class="listData bor-T" v-for="item in allData">
          <div class="cLeft"> 
            <p><span>{{ item.date }}</span></p>
            <p><span>{{ item.code }}</span></p>
          </div>
          <div class="cMid"> 
            <ul>
              <li :class="'color'+item.type">{{ item.type | filterName }}</li>
            </ul> 
          </div>
          <div class="cRight"> 
            <ul>
              <li>{{ typeName[item.type-1][0] }}:￥{{item.amount1}}</li>
              <li>{{ typeName[item.type-1][1] }}:￥{{item.amount2}}</li>
              <li>{{ typeName[item.type-1][2] }}:￥{{item.amount3}}</li>
            </ul>
          </div>    
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cTitle from '@/components/commonTitle'
export default {
  name: 'index',
  data () {
    return {
      titleData: {
        title: '欠款单据'
      },
      cmId: this.$route.query.Id,
      currentPages: 0,
      recPerPage: 10,
      allData: [], //获取的所有数据,
      typeName: [
        ['应付','已付','待付'],
        ['进货','已付','待付'],
        ['退货','已退','待退']
      ],
      noticeShow: false
    }
  },
  components: {
    'C-title': cTitle
  },
  filters: {
    filterClass (value) {
       if(value <4){
         return 'color'+ value
       }else if(value ==4 && value<5){
         return 'color1'
       }else{
         return 'color2'
       }
    },
    filterName (value) {
      let name = ['期初应付','采购','采购退货']
      return name[value-1]
    }
  },
  methods: {
    init () {
      this.$http.post('/app/std_order/report/stdOrderSales_queryShouldPaymentById.action',
        {
          'condition.cmId': this.cmId, 
          'page.currentPage': this.currentPages,
          'page.recPerPage': this.recPerPage
        },
        {emulateJSON: true}
      ).then((response) => {
        this.$store.dispatch('laodAsyncF')
        this.allData = this.allData.concat(response.body.data.cmList)
        this.noticeShow = this.allData.length ? false : true
      }, (response) => {
        return alert(response.body.message)
      })
    },
    onScroll () {
      if( (window.scrollY) + 10 > (document.body.scrollHeight) - (window.screen.height) ){
        if( (this.currentPages+1) == parseInt(this.allData.length/this.recPerPage) ){
          this.currentPages++
          this.$store.dispatch('laodAsyncT')
          this.init()
        }
      }
    } 
  },
  created () {
    window.addEventListener('scroll',()=>{
      this.onScroll()
    })
    this.init()
  }
}
</script>
