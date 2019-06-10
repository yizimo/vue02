<template>
  <div>
    <!--头部-->
    <HeardHomePage></HeardHomePage>
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
            <div class="uc-bigtit">退款/退货</div>
            <div class="uc-panel-bd">
              <div class="uc-sort">
                <div class="uc-tabs">
                  <a class="item active" href="">退款申请</a>
                  <a class="item" href="">退货申请</a>
                </div>
                <div class="uc-search">
                  <form action="">
                    <input type="text" class="sch-input" placeholder="输入商品名称,订单号，商品编号" />
                    <button class="sch-btn"><i class="iconfont icon-search"></i></button>
                  </form>
                </div>
              </div>
              <table class="refund-returns-list">
                <tr class="head bd-t">
                  <td width="370" class="first">商品信息</td>
                  <td>退款金额（元）</td>
                  <td>审核状态</td>
                  <td>平台确认</td>
                  <td width="140">操作</td>
                </tr>
                <tr class="item-head">
                  <td colspan="5">
                    <div class="fl">
                      退款编号: 1947584672162364 <span class="ml15">商家：<a class="sname" href="">小米旗舰店</a></span>
                    </div>
                    <div class="fr">申请时间：2016-05-29 16:02   </div>
                  </td>
                </tr>
                <tr class="item">
                  <td class="first">
                    <div class="good-desc">
                      <img class="gimg" src="../../static/uploads/9.jpg" alt="" />
                      <div class="ginfo">
                        小米短袖T恤 五彩换<br />订单编号：16978514363344786
                      </div>
                    </div>
                  </td>
                  <td><span class="text-danger">499.00元</span></td>
                  <td>待审核</td>
                  <td>无</td>
                  <td class="last"><a href="" class="ui-btn-theme uc-btn-md">查看</a></td>
                </tr>
                <tr class="blank"></tr>
                <tr class="item-head">
                  <td colspan="5">
                    <div class="fl">
                      退款编号: 1947584672162364 <span class="ml15">商家：<a class="sname" href="">小米旗舰店</a></span>
                    </div>
                    <div class="fr">申请时间：2016-05-29 16:02   </div>
                  </td>
                </tr>
                <tr class="item">
                  <td class="first">
                    <div class="good-desc">
                      <img class="gimg" src="../../static/uploads/9.jpg" alt="" />
                      <div class="ginfo">
                        小米短袖T恤 五彩换<br />订单编号：16978514363344786
                      </div>
                    </div>
                  </td>
                  <td><span class="text-danger">499.00元</span></td>
                  <td>待审核</td>
                  <td>无</td>
                  <td class="last"><a href="" class="ui-btn-theme uc-btn-md">查看</a></td>
                </tr>
              </table>
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
