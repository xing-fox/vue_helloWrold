<style scoped>
    #app{
        margin:20px 10px 0;
        height:160px;
        border-radius:4px;
        background:#fff;    
    }
    .title{
        padding:15px 0 0 11px;
        color:#1a1a1a;
        font-size:15px;
    }
    .switch{
        position:absolute;
        top:13px;
        right:13px;
    }
    .highchart{
        width:120px;
        height:120px;
        position:absolute;
        top:60px;
        left:10%;
    }
    .highchart .ui-series{
        width:81px;
        height:40px;
        position:absolute;
        top:0;left:0;
        text-align:center
    }
	.highchart .ui-series h2,#rbfx .ui-series p{
        display:block;
        font-size:16px;
        line-height:20px;
        color:#333;
        font-weight:normal;
    }
	.highchart .ui-series h2,.ui-series p{
        display:block;
        font-size:16px;
        line-height:20px;
        color:#333;
        font-weight:normal;
        padding-left: 0px;
        padding-right: 0px
     }
     .datalist{
         position:absolute;
         top:100px;
         right:8%;
         color:#666;
         font-size:0;
     }
     .datalist li span{
         display:inline-block;
         height:22px;
         line-height:22px;
         font-size:12px;
         width:42px;
     }
     .datalist li i{
         display:inline-block;
         width:14px;
         height:14px;
         margin-right:8px;
         vertical-align:middle;
     }
     .datalist .spanRight{
         text-align:right;
     }
     .datalist li:nth-child(1) i{
         background:#5092E1;
     }
     .datalist li:nth-child(2) i{
         background:#D8E1F0;
     }
     .datalist li:nth-child(3) i{
         background:#999;
     }
     .datalist li span{
         vertical-align:middle;
     }
</style>

<template>
  <div id="app" @click="routeContent">
    <div class="title">日报分析</div>
    <div class="switch" id="switchTable">
      <T-switch :data-prop="switchData" @changeData='reloadData'></T-switch>
    </div>
    <div class="highchart" id="highChartId"></div>
    <ul class="datalist">
        <li><i></i><span>已交</span><span class="spanRight">{{dataList.list1}}人</span></li>
        <li><i></i><span>未交</span><span class="spanRight">{{dataList.list2}}人</span></li>
        <li><i></i><span>不统计</span><span class="spanRight">{{dataList.list3}}人</span></li>
    </ul>
  </div>
</template>

<script>  
    import tableSwitch from '@/components/tableSwitch'
    export default {
        name: 'rbfxIndex',
        data () {
            return {
                switchData: Object, //设置switch所需要带的参数
                chartData: Object, //highcharts所需要带的参数
                chartConfig: Object, //highcharts所需要的配置
                timeDate: 0,
                dataList: Object,
                chartSeries: Number //今日或昨日所需要的改变highcharts的data
            }
        },
        components: {
            'T-switch': tableSwitch
        },
        methods: {
            reloadData (status) {
                this.timeDate = status
                this.highchartFunc()
            },
            init () {
                this.$http.post('/blog/report/blogMainSubmit.action', 
                    {emulateJSON: true}
                    ).then((response) => {
                        this.$Loading.finish() 
                        this.chartData = response.body.data
                        this.highchartFunc()
                    }, (response) => {
                })
            },
            highchartFunc () {
                if(this.timeDate == 0){
                    this.chartSeries = parseInt(this.chartData.today.submitNumRate)
                    this.dataList = {
                        list1: this.chartData.today.submitNumRate,
                        list2: this.chartData.today.noSubmitNum,
                        list3: this.chartData.today.exceptSubmitNum
                    }
                }else{
                    this.chartSeries = parseInt(this.chartData.yesterday.submitNumRate)
                    this.dataList = {
                        list1: this.chartData.yesterday.submitNumRate,
                        list2: this.chartData.yesterday.noSubmitNum,
                        list3: this.chartData.yesterday.exceptSubmitNum
                    }
                }
                var self = this
                this.chartConfig = {
                    chart : {
                        type : 'solidgauge'
                    },
                    title : null,
                    pane : {
                        center : [ '50%', '50%' ],
                        size : '100%',
                        background : {
                            backgroundColor : '#d8e1f0',
                            borderWidth : 0,
                            innerRadius : '86%',
                            outerRadius : '100%',
                            shape : 'arc'
                        }
                    },
                    tooltip : {
                        enabled : false
                    },
                    yAxis : {
                        min : 0,
                        max : 100,
                        lineWidth : 0,
                        minorTickInterval : null,
                        tickPixelInterval : 100,
                        tickWidth : 0,
                        title : {
                            text : ''
                        },
                        labels : {
                            enabled : false
                        }
                    },
                    plotOptions : {
                        solidgauge : {
                            dataLabels : {
                                y : 5,
                                borderWidth : 0,
                                useHTML : true
                            }
                        }
                    },
                    credits : {
                        enabled : false
                    },
                    series : [{
                        name : null,
                        data : [self.chartSeries],
                        innerRadius : '86%',
                        outerRadius : '100%',
                        dataLabels : {
                            format : '<div class="ui-series" style="width:80px;height:40px;position:absolute;top:0;left:0;margin:-30px 0 0 -40px;text-align:center"><h2 style="font-size:16px;">已交</h2><p style="font-size:16px;">' + self.chartSeries + '%</p></div>'
                        }
                    }]
                }
                Highcharts.chart('highChartId', this.chartConfig)
            },
            routeContent () {
                var json = '{"url":"/app/blog/h5/report/daily.html?flag=' + this.timeDate + '","title":"' + i18next.t('feedsAnalysis') + '"}';
                openPage(json)
            }
        },
        created () {
            this.switchData = {
                content: [
                    {
                        keyword: '今',
                        state: true
                    },
                    {
                        keyword: '昨',
                        state: false
                    }
                ],
                style: `background:#5092E1;color:#fff`
            }
        },
        mounted () {
            this.init()
        }
    }
</script>

