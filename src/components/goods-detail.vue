<template>
  <div>
    <div class="topper">
      <div class="wrapper">
        <div class="left-bar">
          <div class="back-home divider">
            <em></em><a href="">商城首页</a>
          </div>
          <div class="item"><a href="">商家中心</a></div>
        </div>
        <div class="right-bar">
          <div class="login-user sub-menu">
            <a class="menu-hd" href="">txtangxia<em></em></a>
            <div class="down">
              <a href="">内容</a>
              <a href="">内容</a>
              <a href="">内容</a>
            </div>
          </div>
          <div class="item"><a href="">消息（<span class="txt-theme">0</span>）</a></div>
          <div class="logout divider"><a href="">退出</a></div>
          <span class=""></span>
          <div class="cart"><em></em><a href="">购物车<span class="txt-theme">2</span>件</a></div>
          <div class="order"><em></em><a href="">我的订单</a></div>
          <div class="fav"><em></em><a href="">我的收藏</a></div>
          <div class="help"><em></em><a href="">帮助中心</a></div>
        </div>
      </div>
    </div>
    <div class="shop-header wrapper">
      <div class="logo">
        <a href=""><img src="../../static/img/logo.png" alt="logo" /></a>
      </div>
      <div class="shop-meta">
        <span class="ico"></span>
        <div class="info">
          <div class="name">女神屋女装</div>
          <div class="meta">
            [&nbsp;描述&nbsp;<span class="txt-warn">4.6</span>&ensp;质量&nbsp;<span class="txt-theme">4.8</span>&ensp;服务&nbsp;<span class="txt-theme">4.9</span>&ensp;发货&nbsp;<span class="txt-theme">4.8</span>&nbsp;]
          </div>
        </div>
      </div>
      <div class="shop-schbox">
        <div class="layout">
          <form action="" method="">
            <input class="search-txt" placeholder="搜流行宝贝">
            <button class="search-btn site">搜全站</button>
            <button class="search-btn shop">搜本店</button>
            <div class="suggest-box">
              <div class="item" data-title="上衣 短款 短袖">上衣 短款 短袖<div class="tags"><span>雪纺</span><span>蕾丝</span><span>一字领</span></div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="shop-nav-box">
      <div class="shop-nav wrapper">
        <div class="shop-nav-all">
          <a href="">所有宝贝</a>
          <div class="sublist">
            <a href="">短袖T恤/吊带</a>
            <a href="">连体裤</a>
            <a href="">吊带</a>
          </div>
        </div>
        <ul class="shop-nav-rec">
          <li><a href="">首页</a></li>
          <li><a href="">2016春夏新品</a></li>
          <li><a href="">女鞋</a></li>
          <li><a href="">童鞋</a></li>
        </ul>
      </div>
    </div>
    <!--头部-->

    <div class="wrapper">
      <div class="detail-top clearfix">
        <div class="detail-goods">
          <div class="detail-show">
            <div class="origin-show">
              <div class="zoomup"></div>
              <img class="big-pic" :src="sku.skuImg" alt="sku.skuName" />
            </div>

            <div class="zoom-show">
              <img src="" alt="" />
            </div>
          </div>
          <div class="detail-info">
            <div class="item-title">{{ sku.skuName }}</div>
            <div class="item-price" v-if="sku.skuDiscountMoney <= 0">
              <span class="now">￥{{sku.skuMoney}}</span>
            </div>
            <div class="item-price" v-else>
              <span class="now">￥{{sku.skuDiscountMoney}}</span><span class="dft" >￥{{sku.skuMoney}}</span>
            </div>
            <ul class="item-data clearfix">
              <li class="col-4">销量<span class="txt-theme ml10">{{sku.skuSales}}件</span></li>
            </ul>
            <div class="sku-info">
              <div class="prop" v-for="x in sku.options">
                <div class="dt">{{x.optionName}}</div>
                <div class="dd">
                  <ul class="chose-img">
                    <li><a class="active" href="" style="width: 151.988636px;">{{x.option.optionName}}</a></li>
                  </ul>
                </div>
              </div>
              <div class="prop">
                <div class="dt">数量：</div>
                <div class="dd">
                  <div class="mod-numbox chose-num" data-max="30">
                    <span class="count-minus"></span>
                    <input class="count-input" value="1"  type="text" name="num" />
                    <span class="count-plus"></span>
                  </div>
                  <div class="stock">(库存{{sku.skuInventroy}}件)</div>
                </div>
              </div>
            </div>
            <div class="item-action">
              <a href="cart.html" class="buy-now">立即购买</a>
              <a href="cart.html" class="add-cart">加入购物车</a>
            </div>
            <div class="item-extend" >
               <a href="" v-if="isCollection" class="fav"><i class="iconfont icon-star"></i>
                 收藏
               </a>
              <a href="" v-else="" class="fav"><i class="iconfont icon-star"></i>
                已收藏
              </a>
              <!--<a href="" class="fav">已收藏</a>-->
            </div>
          </div>
        </div>
        <div class="detail-shop">
          <div class="clearfix">
            <a class="shop-brand" href="">
              <img src="../../static/uploads/1.png" alt="" />
            </a>
            <div class="shop-intro">
              <div class="shop-name">女神屋</div>
              <!-- <a class="shop-follow-btn" href="javascript:;"><i class="iconfont icon-jiaguanzhu"></i>关注</a> -->
              <a class="shop-follow-btn active" href="javascript:;"><span class="showtxt"><i class="iconfont icon-check01"></i>已关注</span><span class="hidetxt">取消关注</span></a>
              <div class="shop-follow-count"><strong>268</strong>粉丝</div>
            </div>
          </div>
          <div class="shop-assess clearfix">
            <div class="col col-3">
              <div class="tit">描&ensp;述</div>
              <div class="point">
                <span class="num">4.8</span><i class="iconfont">--</i>
              </div>
            </div>
            <div class="col col-3">
              <div class="tit">质&ensp;量</div>
              <div class="point up">
                <span class="num">4.9</span><i class="iconfont">--</i>
              </div>
            </div>
            <div class="col col-3">
              <div class="tit">服&ensp;务</div>
              <div class="point down">
                <span class="num">4.7</span><i class="iconfont">--</i>
              </div>
            </div>
            <div class="col col-3">
              <div class="tit">发&ensp;货</div>
              <div class="point">
                <span class="num">4.8</span><i class="iconfont">--</i>
              </div>
            </div>
          </div>
          <ul class="shop-info">
            <li>所在地区：广东广州</li>
            <li>商品数量：518</li>
            <li>销售数量：60285</li>
            <li>店铺资质：<img class="ico" src="../../static/img/ico/approve.png" alt="" /></li>
          </ul>
          <a class="detail-shop-enter">
            <i class="iconfont icon-dianpu"></i>进入店铺
          </a>
        </div>
      </div>
      <!-- 商品推荐 -->
      <!-- 商品推荐 -->

      <div class="detail-bottom clearfix">
        <div class="detail-main">
          <div class="detail-tabs">
            <a class="item" href="javascript:;">详情描述</a>
            <a class="item" href="javascript:;">规格参数</a>
            <a class="item" href="javascript:;">商品评价</a>
          </div>
          <div class="tab-con">
            <div class="mod-type-cont">
              <img src="uploads/10.jpg" alt="" />
            </div>
          </div>
          <div class="tab-con">
            <div class="detail-stand">
              <div class="tit">主体规格参数</div>
              <div class="attr">
                <div class="name">品牌</div>
                <div class="value">Sacon帅康</div>
              </div>
              <div class="attr">
                <div class="name">品牌</div>
                <div class="value">Sacon帅康</div>
              </div>
              <div class="attr">
                <div class="name">品牌</div>
                <div class="value">Sacon帅康</div>
              </div>
              <div class="attr">
                <div class="name">品牌</div>
                <div class="value">Sacon帅康</div>
              </div>
              <div class="attr">
                <div class="name">品牌</div>
                <div class="value">Sacon帅康</div>
              </div>
            </div>
          </div>
          <div class="tab-con">
            <div class="detail-pj">
              <div class="detail-pj-nav list clearfix">
                <div class="col col1">评价心得</div>
                <div class="col col4">评价用户</div>
              </div>
              <div class="detail-pj-cont">
                <div class="reply list clearfix" v-for="x in sku.comments">
                  <div class="col col1">{{x.commentContent}}<span class="time">{{x.commentTime}}</span></div>
                  <div class="col col4"><img class="hdpic" width="40" height="40" src=""><div>糖果</div></div>
                </div>
              </div>
              <div class="pages mb30">
                <a class="prev" href="">上一页</a>
                <a href="">1</a>
                <span>2</span>
                <a href="">3</a>
                <a href="">4</a>
                <i>...</i>
                <a href="">71</a>
                <a class="next" href="">下一页</a>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-aside">

          <div class="detail-aside-box">
            <div class="big-tit">店铺热销</div>
            <ul class="detail-hot">
              <li>
                <a href="" class="figure"><img src="../../static/uploads/9.jpg" alt="" /></a>
                <div class="name"><a href="">诗凡黎2016夏装新品海军风</a></div>
                <div class="price">
                  <span class="now">¥149.00</span><span class="origin">¥298.00</span>
                </div>
              </li>
              <li>
                <a href="" class="figure"><img src="../../static/uploads/9.jpg" alt="" /></a>
                <div class="name"><a href="">诗凡黎2016夏装新品海军风</a></div>
                <div class="price">
                  <span class="now">¥149.00</span><span class="origin">¥298.00</span>
                </div>
              </li>
              <li>
                <a href="" class="figure"><img src="../../static/uploads/9.jpg" alt="" /></a>
                <div class="name"><a href="">诗凡黎2016夏装新品海军风</a></div>
                <div class="price">
                  <span class="now">¥149.00</span><span class="origin">¥298.00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--脚部-->
    <div class="fatfooter">

    </div>
    <!--脚部-->
  </div>
</template>

<script>
  import '../../static/js/slick/slick.css'
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/css/goods-detail.css'
  export default {
    data(){
      return{
        isCollection:false,
        skuId: '',
        sku: null,
      }
    },
    watch: {
      'skuId': function (val) {
        this.skuId = val;
      }
    },
    created: function () {
      var _this = this;
      _this.skuId = this.$route.params.id;
      _this.getSku()
    },
    methods: {
      getSku() {
        var _this = this;
        $.ajax({
          type: 'post',
          url: this.$store.state.httpUrl + '/common/sku/' + _this.skuId,
          success: function (data) {
           console.log(data.extend);
           _this.sku = data.extend.sku;
          }
        })
      }
    }

  }
</script>
