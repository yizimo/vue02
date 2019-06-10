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
          <div class="uc-panel account-panel">
            <div class="user-info">
              <a href=""><img class="headpic" src="../../static/uploads/4.jpg" alt="头像" /></a>
              <div class="info">
                <div><span class="name">007小柚子</span><span class="wel">下午好</span></div>
                  <router-link to="/uc_account"><a href="" class="edit">修改个人信息></a></router-link>
              </div>
            </div>
            <div class="quick-menu">
              <div class="item">
                <a href=""><img class="ico" src="../../static/img/ico/uc-aq.png"/>账户安全：较高</a>
              </div>
              <div class="item">
                <a href=""><img class="ico" src="../../static/img/ico/uc-phone.png"/>绑定手机：136********66</a>
              </div>
              <div class="item">
                <a href=""><img class="ico" src="../../static/img/ico/uc-dizhi.png"/>我的收货地址</a>
              </div>
              <div class="item">
                <a href=""><img class="ico" src="../../static/img/ico/uc-qianbao.png"/>我的钱包</a>
              </div>
            </div>
          </div>

          <div class="uc-panel home-order">
            <div class="col">
              <img src="../../static/img/ico/uc-order1.png" class="ico" />
              <div class="bd">
                <div class="tit">待支付的订单：<span class="num">1</span></div>
                <a class="more" href="">查看待支付订单></a>
              </div>
            </div>
            <div class="col">
              <img src="../../static/img/ico/uc-order2.png" class="ico" />
              <div class="bd">
                <div class="tit">待发货的订单：<span class="num">1</span></div>
                <a class="more" href="">查看待支付订单></a>
              </div>
            </div>
            <div class="col">
              <img src="../../static/img/ico/uc-order3.png" class="ico" />
              <div class="bd">
                <div class="tit">待收货的订单：<span class="num">1</span></div>
                <a class="more" href="">查看待支付订单></a>
              </div>
            </div>
            <div class="col">
              <img src="../../static/img/ico/uc-order4.png" class="ico" />
              <div class="bd">
                <div class="tit">待评价的订单：<span class="num">1</span></div>
                <a class="more" href="">查看待支付订单></a>
              </div>
            </div>
          </div>

          <div class="uc-panel home-wuliu">
            <div class="home-wuliu-hd">
              我的物流
            </div>
            <div class="home-wuliu-bd">
              <div class="item">
                <a href="" class="confirm ui-btn-theme uc-btn-md">确认收货</a>
                <div class="cont">
                  <img src="../../static/uploads/3.jpg" alt="" class="figure" />
                  <div class="info">
                    <div class="status">快件已签收，感谢您使用中通快递！</div>
                    <div>
                      <span class="time">2016-05-20  16:04:28</span>
                      <a href="">查看物流明细</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <a href="" class="confirm ui-btn-theme uc-btn-md">确认收货</a>
                <div class="cont">
                  <img src="../../static/uploads/3.jpg" alt="" class="figure" />
                  <div class="info">
                    <div class="status">快件已签收，感谢您使用中通快递！</div>
                    <div>
                      <span class="time">2016-05-20  16:04:28</span>
                      <a href="">查看物流明细</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <a href="" class="confirm ui-btn-theme uc-btn-md">确认收货</a>
                <div class="cont">
                  <img src="../../static/uploads/3.jpg" alt="" class="figure" />
                  <div class="info">
                    <div class="status">快件已签收，感谢您使用中通快递！</div>
                    <div>
                      <span class="time">2016-05-20  16:04:28</span>
                      <a href="">查看物流明细</a>
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
  import '../../static/js/laydate/laydate'
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
