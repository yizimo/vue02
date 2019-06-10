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
            <div class="uc-bigtit">商品评价</div>
            <div class="uc-panel-bd">
              <table class="evalute-table">
                <tr class="hd">
                  <th width="360">
                    <select name=""class="ui-txtin" style="width:120px;"><option value="">评价</option><option value="">好价</option><option value="">中价</option><option value="">评价</option></select>
                    <select name=""class="ui-txtin ml10" style="width:120px;"><option value="">评论</option><option value="">有评论内容</option><option value="">无评论内容</option></select>
                  </th>
                  <th>被评价人</th>
                  <th>宝贝信息</th>
                  <th class="align-center">操作</th>
                </tr>
                <tr class="item">
                  <td>
                    <div class="cont">宝贝真心不错，质量很棒，下次还来<div class="time">[2016-05-29 16:02] </div></div>
                  </td>
                  <td>商家：小米旗舰店</td>
                  <td>小米短袖T恤 五彩换<div class="text-theme">499.00元</div></td>
                  <td class="align-center"><a class="ui-btn-theme uc-btn-md" href="">回复</a></td>
                </tr>
                <tr class="item">
                  <td>
                    <div class="cont good">宝贝真心不错，质量很棒，下次还来<div class="time">[2016-05-29 16:02] </div></div>
                  </td>
                  <td>商家：小米旗舰店</td>
                  <td>小米短袖T恤 五彩换<div class="text-theme">499.00元</div></td>
                  <td class="align-center"><a class="ui-btn-theme uc-btn-md" href="">回复</a></td>
                </tr>
                <tr class="item">
                  <td>
                    <div class="cont bad">宝贝真心不错，质量很棒，下次还来<div class="time">[2016-05-29 16:02] </div></div>
                  </td>
                  <td>商家：小米旗舰店</td>
                  <td>小米短袖T恤 五彩换<div class="text-theme">499.00元</div></td>
                  <td class="align-center"><a class="ui-btn-theme uc-btn-md" href="">回复</a></td>
                </tr>
              </table>

              <div class="pages">
                <a class="page prev" href="">上一页</a>
                <a class="page" href="">1</a>
                <span class="cur-page">2</span>
                <a class="page" href="">3</a>
                <a class="page" href="">4</a>
                <i class="page-split">...</i>
                <a class="page" href="">71</a>
                <a class="page next" href="">下一页</a>
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
