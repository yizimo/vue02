<template>
  <div>
    <home-page-head></home-page-head>
    <home-page-search></home-page-search>
    <home-page-box></home-page-box>
    <!--头部-->
    <div class="wrapper router">
      <ul class="router-nav">
        <li><a href="">首页</a></li>
        <li><span class="divider"></span></li>
        <li><span>全部搜索结果</span></li>
      </ul>
      <div class="sch-result">
        <span class="tag" v-model="searchMessage">搜索{{ searchMessage }}</span><span class="fl">共<span class="num" v-model="num">{{ num }}</span>个产品</span>
      </div>
    </div>
    <search-xuan-ze :common="common" :brands="brands" @changeCommon="changeCommon" :searchMessage="searchMessage"></search-xuan-ze>


    <div class="sg-main wrapper">
      <search-value :common="common" :num="num" :pageNo="pageNo" :searchMessage="searchMessage"></search-value>
      <SearchHotSku></SearchHotSku>
    </div>

    <!--脚部-->
    <div class="fatfooter">
      <div class="wrapper">
        <div class="fatft-service">
          <div class="item">
            <a href="">
              <img src="../../static/img/ico/ft-ser1.png" alt="" class="ico" />
              <span>品质保障</span>
            </a>
          </div>
          <div class="item">
            <a href="">
              <img src="../../static/img/ico/ft-ser2.png" alt="" class="ico" />
              <span>七天无理由退换货</span>
            </a>
          </div>
          <div class="item">
            <a href="">
              <img src="../../static/img/ico/ft-ser3.png" alt="" class="ico" />
              <span>特色服务体验</span>
            </a>
          </div>
          <div class="item">
            <a href="">
              <img src="../../static/img/ico/ft-ser4.png" alt="" class="ico" />
              <span>帮助中心</span>
            </a>
          </div>
        </div>
      </div>
      <div class="fatft-links">
        <div class="wrapper">
          <div class="col-link">
            <div class="tit">购物指南</div>
            <div class="link"><a href="">购物流程</a></div>
            <div class="link"><a href="">账户安全</a></div>
            <div class="link"><a href="">联系客服</a></div>
            <div class="link"><a href="">会员介绍</a></div>
          </div>
          <div class="col-link">
            <div class="tit">配送方式</div>
            <div class="link"><a href="">配送服务查询上</a></div>
            <div class="link"><a href="">门自提</a></div>
            <div class="link"><a href="">物流费用标准</a></div>
          </div>
          <div class="col-link">
            <div class="tit">支付方式</div>
            <div class="link"><a href="">银联支付</a></div>
            <div class="link"><a href="">支付宝支付</a></div>
            <div class="link"><a href="">微信支付</a></div>
          </div>
          <div class="col-link">
            <div class="tit">售后服务</div>
            <div class="link"><a href="">售后政策</a></div>
            <div class="link"><a href="">价格保护</a></div>
            <div class="link"><a href="">退单说明</a></div>
            <div class="link"><a href="">取消订单</a></div>
          </div>
          <div class="col-link">
            <div class="tit">联系我们</div>
            <div class="link"><a href="">商家入驻</a></div>
            <div class="link"><a href="">营销服务</a></div>
            <div class="link"><a href="">关于我们</a></div>
            <div class="link"><a href="">广告服务</a></div>
          </div>
          <div class="col-contact">
            <div class="phone">400-000-0000</div>
            <div class="time">周一至周日 8:00-18:00 <br />（仅收市话费）</div>
            <div class="tool">
              <a href="" class="kefu"><i class="iconfont icon-huifu"></i>在线客服</a>
              <a class="ico weixin" href=""><img src="../../static/img/ico/ft-weixin.png" alt="" /><img src="../../static/uploads/ercode.jpg" class="ercode" /></a>
              <a class="ico sina" href=""><img src="../../static/img/ico/ft-sina.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <FenLei></FenLei>
  </div>
</template>

<script>
  import '../../static/js/icheck/style.css'
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/css/search-goods.css'
  import FenLei from '../page/fenlei'
  import HomePageHead from '../page/heardHomePage'
  import HomePageSearch from '../page/HomePageSearch'
  import HomePageBox from '../page/HomePageBox'
  import SearchHotSku from '../page/SearchHotSku'
  import SearchValue from '../page/SearchValue'
  import SearchXuanZe from '../page/search-xuanze'

  export default {
    created: function() {
      var _this = this;
      _this.num = this.$route.params.num;
      if(!_this.num) {
        _this.num = 0;
      }
      _this.searchMessage = this.$route.params.searchMessage;
      _this.common = this.$route.params.common;
      _this.brands = this.$route.params.brands;
      if(this.$route.params.pageNo) {
        _this.pageNo = this.$route.params.pageNo;
      }
    else {
        _this.pageNo = 1;
      }
      console.log("num" + _this.num);
      console.log("searchMessage"+_this.searchMessage)
      console.log("pageNo" + _this.pageNo)
      console.log(_this.common)
      console.log("brands")
      console.log(_this.brands)
      console.log(this.$route.params.brands)
    },
    components: {
      FenLei,
      HomePageBox,
      HomePageSearch,
      HomePageHead,
      SearchHotSku,
      SearchValue,
      SearchXuanZe,
    },
    data() {
      return {
        num: 0,
        searchMessage: '',
        common: '1',
        pageNo: 1,
        showFirstPage:'',
        showLastPage: '',
        brands: '',
     }
    },
    methods: {
      changeCommon: function (common) {
        this.common = common;
      }
    },
    watch: {
      'common': function (newCommon, oldCommon) {
        this.common = newCommon
      },
      'num': function (newNum, oldNum) {
        this.num = newNum
      }
    },
  }
</script>

<style scoped>

</style>

