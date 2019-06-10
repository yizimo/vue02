<template>
  <div >

    <home-page-head ></home-page-head>

    <!--  搜索   -->
    <HomePageSearch ref="brandSearch"></HomePageSearch>


    <HomePageBox></HomePageBox>

      <!--   分类-->
    <FenLei></FenLei>


    <div class="home-full-banner" style="height: 0px;">
    </div>

    <div class="gray-box">
      <div class="wrapper">
        <div class="section-hd">
          <div class="title">每日热推</div>
        </div>
        <!-- 商品促销 -->
        <div class="promo-list clearfix">
          <div class="col" v-for="hot_sku in hotSku" :key="hot_sku.skuId">
            <a class="item" @click="findSkuId(hot_sku.skuId)"><img :src=hot_sku.skuImg alt="" /></a>
          </div>
        </div>

        <!-- 今日秒杀 -->
        <div class="flash-sale-section">
          <div class="section-hd">
            <div class="title">今日秒杀</div>
          </div>
          <div class="flash-sale clearfix">
            <div class="grid grid-b">
              <a href="goods-detail.html"><img src="../../static/uploads/17.jpg" alt="" /></a>
            </div>
            <div class="grid grid-m">
              <a href="goods-detail.html">
                <div class="inner-text">
                  <div class="tit">小米Max</div>
                  <div class="stit">6.44''大屏黄金尺寸</div>
                  <div class="info">大屏大电量</div>
                </div>
                <img src="../../static/uploads/18.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="white-box">
      <div class="wrapper">
        <!-- 品牌盛宴 -->
        <div class="brand-feast-section">
          <div class="section-hd">
            <div class="title">品牌盛宴</div>
          </div>
          <div class="brand-feast clearfix">
            <div class="ad-box">
              <a href=""><img src="../../static/uploads/21.jpg" /></a>
            </div>
            <div class="brand-feast-list">
              <div class="item" v-for="bran in brand" :key="bran.brandId">
                <div class="logo"><img src="../../static/uploads/23.jpg" alt="" /></div>
                <a class="mask"  @click="findBrandId(bran.brandName)"><span class="text">{{ bran.brandName }}<br />爆款直降低至49元</span></a>
              </div>
            </div>
          </div>
          <!-- 广告 -->
          <div style="margin-top:12px;">
            <a href=""><img src="../../static/uploads/22.jpg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">CC商城欢迎你！！！</div>
  </div>
</template>

<script>
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/css/home.css'
  import '../../static/js/slick/slick.css'
  import FenLei from '../page/fenlei'
  import HomePageHead from '../page/heardHomePage'
  import HomePageSearch from '../page/HomePageSearch'
  import HomePageBox from '../page/HomePageBox'

  export default {
    components: {
      FenLei,
      HomePageHead,
      HomePageSearch,
      HomePageBox
    },
    name: 'HelloWorld',
    data () {
      return{
        //分类
        categorysOne: null,
        // 热推
        hotSku: null,
        // 品牌
        brand: null,
        // 查询
        input1:'',

      }
    },
    created: function() {
      var _this = this;
      this.getHotSku();
      this.getBrand();
    },
    //根据vue的生命周期，实现加载页面时候调用方法用mouted和create都可
    mounted() {

    },
    methods: {


      //获取热推商品
      getHotSku: function() {
        var _this = this;
        $.ajax({
          type: 'post',
          url: this.$store.state.httpUrl + '/common/sku/hot',
          success: function (data) {
            _this.hotSku = data.extend.skus;
          }
        })
      },
      //获取品牌
      getBrand: function() {
        var _this = this;
        $.ajax({
          type: 'post',
          url: this.$store.state.httpUrl + '/common/brand/all',
          success: function (data) {
            _this.brand = data.extend.brandList
          }
        })
      },
      //跳转
      tiaozhuan: function (path) {
        this.$router.push({path:path})
      },


      //商品 跳转
      findSkuId: function(skuId) {
       this.$router.push({
         path: '/goods_detail',
         name: 'goods_detail',
         params: {
           id: skuId
         }
       })
      },
      // 品牌搜索
      findBrandId: function(brandName) {
        alert(brandName);
        this.$refs.brandSearch.getSearch(brandName);
      },

      getImgUrl(icon){
        icon = this.$store.state.imgUrl + icon;
         return require(icon);
      }
    }
  }


</script>
