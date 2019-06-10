<template>
  <div>
    <!--头部-->
    <div class="topper">
      <div class="wrapper">
        <div class="left-bar">
          <div class="back-home divider">
            <em></em><a href="index.html">商城首页</a>
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
    <div class="cart-header wrapper">
      <div class="logo">
        <a href="index.html"><img src="../../static/img/logo.png" alt="logo" /></a>
      </div>
      <div class="step-box">
        <div class="row">
          <div class="step first active col-3">
            <span class="num">1</span><span class="line"></span><span class="label">我的购物车</span>
          </div>
          <div class="step active col-3">
            <span class="num">2</span><span class="line"></span><span class="label">确认订单信息</span>
          </div>
          <div class="step active col-3">
            <span class="num">3</span><span class="line"></span><span class="label">选择支付方式</span>
          </div>
          <div class="step last col-3">
            <span class="num">4</span><span class="line"></span><span class="label">完成付款</span>
          </div>
        </div>
      </div>
    </div>
    <!--头部-->

    <div class="wrapper">
      <div class="pay-wrap">
        <div class="order-result">
          <div class="section clearfix">
            <img src="../../static/img/ico/order-success.jpg" class="ico" />
            <div class="titbox">
              <div class="tit">订单提交成功，应付金额 1936.00 元</div>
              <div class="stit">订单号：21117136289120564    请您在 1 日 内完成支付，否则订单会被自动取消</div>
            </div>
            <div class="mt20">
              <div class="meta">
                <div class="hd">商品</div>
                <div class="bd">纤佳乐破壁料理机 2.5升 西瓜红型号:QJL-PB921  西瓜红* 2</div>
              </div>
              <div class="meta">
                <div class="hd">收货地址</div>
                <div class="bd">安徽 合肥 瑶海区东方商城  (提现 收) 13666666666 <a href="">[修改]</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay-wrap-tit">
        在线支付
      </div>
      <div class="pay-wrap">
        <div class="pay-way">
          <div class="row">
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img src="../../static/img/pay/zfb.jpg" /></label>
            </div>
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img src="../../static/img/pay/weixin.jpg" /></label>
            </div>
          </div>
          <div class="row">
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img class="bd" src="../../static/img/pay/zgyh.jpg" /></label>
            </div>
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img class="bd" src="../../static/img/pay/jsyh.jpg" /></label>
            </div>
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img class="bd" src="../../static/img/pay/nyyh.jpg" /></label>
            </div>
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img class="bd" src="../../static/img/pay/gsyh.jpg" /></label>
            </div>
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img class="bd" src="../../static/img/pay/jtyh.jpg" /></label>
            </div>
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img class="bd" src="../../static/img/pay/zsyh.jpg" /></label>
            </div>
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img class="bd" src="../../static/img/pay/yzcxyh.jpg" /></label>
            </div>
            <div class="col col-3">
              <label><input class="check" type="radio" name="a" /><img class="bd" src="../../static/img/pay/xyyy.jpg" /></label>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-panel">
        <a href="" class="go-next ui-btn-theme">下一步</a>
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
  import '../../static/css/cart.css'
  export default {

  }
</script>
