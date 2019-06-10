<template>
  <div>
    <!--头部-->
    <heard-home-page></heard-home-page>
    <!--<div class="uc-header-bg">-->
      <!--<div class="uc-header wrapper">-->
        <!--<a class="logo" href="index.html"><img src="../../static/img/logo2.png" alt="" /></a>-->
        <!--<div class="back-home"><a href="">返回商城首页</a></div>-->
        <!--<ul class="uc-nav">-->
          <!--<li><a href="">首页</a></li>-->
          <!--<li class="toggle">-->
            <!--<span class="label">账户设置<i class="iconfont"></i></span>-->
            <!--<div class="toggle-cont">-->
              <!--<a href="">个人信息</a>-->
              <!--<a href="">安全设置</a>-->
              <!--<a href="">收货地址</a>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li><a href="">消息中心</a></li>-->
        <!--</ul>-->
        <!--<div class="schbox">-->
          <!--<form action="">-->
            <!--<input class="search-txt" type="text" />-->
            <!--<button class="search-btn">搜索</button>-->
            <!--<div class="suggest-box">-->
              <!--<div class="item" data-title="上衣 短款 短袖">上衣 短款 短袖<div class="tags"><span>雪纺</span><span>蕾丝</span><span>一字领</span></div></div>-->
            <!--</div>-->
          <!--</form>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <div class="wrapper uc-router">
      <ul>
        <li><a href="">首页</a></li>
        <li><span class="divider"></span></li>
        <li><span>个人中心</span></li>
      </ul>
    </div>

    <div class="wrapper">
      <div class="uc-main clearfix">
        <ucside></ucside>
        <div class="uc-content">
          <div class="uc-panel">
            <div class="uc-bigtit">订单详情<a class="extra" href="">请谨防钓鱼链接或诈骗后台，了解更多></a></div>
            <div class="uc-panel-bd">
              <div class="order-detail">
                <div class="od-hd">
                  <div class="fl">
                    <span class="tit">订单号：</span><span>1344643134736</span>
                  </div>
                  <div class="fr">
                    <a href="" class="ui-btn-low ui-btn-hollow uc-btn-md">取消订单</a>
                    <a href="" class="ui-btn-theme uc-btn-md">立即支付</a>
                  </div>
                </div>
                <div class="od-status">
                  <div class="tit">等待付款</div>1小时35后订单将被关闭
                </div>
                <div class="od-percent">
                  <div class="col"><div class="inner">下单<span class="time">05月30日 11:06</span></div></div>
                  <div class="col col2 active"><div class="inner">付款</div></div>
                  <div class="col col3"><div class="inner">发货</div></div>
                  <div class="col col4"><div class="inner">交易成功</div></div>
                </div>
                <div class="od-pdt">
                  <div class="item">
                    <img src="../../static/uploads/11.jpg" class="figure" />
                    <div class="pname">小米短袖T恤 五彩换 黑色 S</div>
                    <div class="price">499元×1</div>
                  </div>
                  <div class="item">
                    <img src="../../static/uploads/11.jpg" class="figure" />
                    <div class="pname">小米短袖T恤 五彩换 黑色 S</div>
                    <div class="price">499元×1</div>
                  </div>
                  <div class="item">
                    <img src="../../static/uploads/11.jpg" class="figure" />
                    <div class="pname">小米短袖T恤 五彩换 黑色 S</div>
                    <div class="price">499元×1</div>
                  </div>
                  <div class="item">
                    <img src="../../static/uploads/11.jpg" class="figure" />
                    <div class="pname">小米短袖T恤 五彩换 黑色 S</div>
                    <div class="price">499元×1</div>
                  </div>
                  <div class="item">
                    <img src="../../static/uploads/11.jpg" class="figure" />
                    <div class="pname">小米短袖T恤 五彩换 黑色 S</div>
                    <div class="price">499元×1</div>
                  </div>
                </div>
                <div class="od-info">
                  <div class="item">
                    <div class="tit">
                      收货信息<a href="" class="ui-btn-low ui-btn-hollow uc-btn-md fr">修改</a>
                    </div>
                    <div class="meta">
                      <div>姓&emsp;&emsp;名：</div>
                      <div>联系电话：</div>
                      <div>收货地址：</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="tit">
                      支付方式及送货时间<a href="" class="ui-btn-low ui-btn-hollow uc-btn-md fr">修改</a>
                    </div>
                    <div class="meta">
                      <div>支付方式：</div>
                      <div>送货时间：</div>
                      <div>送达时间：</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="tit">
                      发票信息
                    </div>
                    <div class="meta">
                      <div>发票类型：</div>
                      <div>发票内容：</div>
                      <div>发票抬头：</div>
                    </div>
                  </div>
                </div>
                <div class="od-count">
                  <div class="inner">
                    <div class="item">
                      <div class="tit">商品总价：</div>
                      <div class="val">0元</div>
                    </div>
                    <div class="item">
                      <div class="tit">运&emsp;&emsp;费：</div>
                      <div class="val">0元</div>
                    </div>
                    <div class="item">
                      <div class="tit">订单详情：</div>
                      <div class="val">0元</div>
                    </div>
                    <div class="item last">
                      <div class="tit">实付金额：</div>
                      <div class="val"><span class="strong">0</span>元</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  import '../../static/js/icheck/style.css'
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/css/uc.css'
  import HeardHomePage from '../page/heardHomePage'
  import Ucside from '../page/uc_side'
  export default {
    components: {
      HeardHomePage,
      Ucside
    }
  }
</script>
