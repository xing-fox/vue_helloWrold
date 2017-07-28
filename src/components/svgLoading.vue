<style scoped lang="less">
    #app{
        width:100%;
        height:100%;
        //background:rgba(0,0,0,.4);
        z-index: 10000;
        position:fixed;
        left:0;top:0;
        svg{
            width:50px;
            height:50px;
            position:fixed;
            top:0;left:0;right:0;bottom:0;
            margin:auto auto;
        }
    }
    .st1{
        fill:none;
		stroke-dasharray: 1591;
		animation: offset 2s linear infinite;
	}
	@keyframes offset{
		0%{
            stroke-dashoffset: 1591;
        }
        80%{
			stroke-dashoffset: 0;
            fill: none;
		}
        100%{
            fill:#fff;
        }
	}
    @-webkit-keyframes offset{
		0%{
            stroke-dashoffset: 1591;
        }
        80%{
			stroke-dashoffset: 0;
            fill: none;
		}
        100%{
            fill:#fff;
        }
	}
	.st2{
		fill:none;
		stroke-dasharray: 148;
		animation: offset1 2s linear infinite;
	}
	@keyframes offset1{
		0%{
            stroke-dashoffset: 148;
        }
        80%{
			stroke-dashoffset: 0;
            fill: none;
		}
        100%{
            fill: #fff;
        }
	}
    @-webkit-keyframes offset1{
		0%{
            stroke-dashoffset: 148;
        }
        80%{
			stroke-dashoffset: 0;
            fill: none;
		}
        100%{
            fill: #fff;
        }
	}
</style>

<template>
  <div id="app" v-show="show">
    <svg version="1.1" id="SVG" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	  viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">
      <path id="XMLID7" class="st0" style="fill:url(#orange_red)" stroke-width="10" d="M336.6,0H63.4C28.5,0,0,28.5,0,63.4v273.2C0,371.5,28.5,400,63.4,400h273.2
	    c34.9,0,63.4-28.5,63.4-63.4V63.4C400,28.5,371.5,0,336.6,0z"/>
      <path id="XMLID4" class="st1" stroke="#ffffff" stroke-width="5" d="M188.9,187.8c10.1,0.8,135.3,18.6,97.3,121.2c-0.2,0.6-0.4,1.1-0.6,1.6c0.2-0.6,0.3-1.1,0.6-1.6
        c5.2-15.5,14.3-58.7-37.6-75.1c0,0-47.4-8.5-58-8.5c0,0-6.8,79.4,96,151.5c0,0-158.8-64-150.2-251.8c-30.3-5.5-72.6-19.2-88.4-67.4
        c0,0,18.3,41.8,108.4,36.7c2.2-0.1,4.6-0.1,7.2,0l2.8,14.7l1.2,0.4c0.2,8.5-1.9,27.2-16.6,61.2c0,0,7,6.3,12,15.6
        c1.8,3.4,7.2-11.3,14.4-15.6c0,0-5.7-40.1-2.7-59.2l1.8,0.5l9.8-14.1c7.9,1.9,15.6,4.5,21.8,7.6c16.2,7.5,79.4,1.3,90.1-30.3
        c0,0-6.4,57.2-103.3,62.8C194.9,137.8,186.3,181.8,188.9,187.8z"/>
      <path id="XMLID2" class="st2" stroke="#ffffff" stroke-width="5" d="M181.9,40.5c13.1,0,23.7,10.6,23.7,23.7c0,13.1-10.6,23.7-23.7,23.7c-13.1,0-23.7-10.6-23.7-23.7
        C158.2,51.1,168.8,40.5,181.9,40.5z"/>

      <defs>
        <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#e53a36;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#f5b55d;stop-opacity:1"/>
        </linearGradient>
      </defs> 

    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'svgLoading',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      show: state => state.Load.show
    })
  }
}
</script>
