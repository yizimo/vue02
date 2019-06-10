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
            <div class="uc-bigtit">收货地址</div>
            <div class="uc-panel-bd">

              <div class="ui-msg-info ui-msg-block">您已创建 2 个收货地址，最多可创建 5 个</div>

              <div class="address-list">
                <div class="col col-4">
                  <a class="item va-m-box ta-c add">
                    <div class="add-new">
                      <span class="ico"><i class="iconfont icon-tianjia"></i></span>
                      <div class="label">添加收货地址</div>
                    </div>
                  </a>
                </div>
                <div class="col col-4">
                  <div class="item">
                    <div class="action">
                      <div class="fl"><a class="edit" href="javascript:;">修改</a><a class="del" href="javascript:;">删除</a></div>
                      <div class="fr"><a class="setdft" href="javascript:;">设为默认</a></div>

                    </div>
                    <div class="info">
                      <div class="info-item name ellipsis">安徽合肥（小柚子 收）</div>
                      <div class="info-item address">瑶海区东方商城</div>
                      <div class="info-item tel ellipsis">13666666666</div>
                    </div>
                  </div>
                </div>
                <div class="col col-4">
                  <div class="item active">
                    <div class="action">
                      <div class="fl"><a class="edit" href="javascript:;">修改</a><a class="del" href="javascript:;">删除</a></div>
                      <div class="fr"><a class="setdft" href="javascript:;">设为默认</a></div>
                    </div>
                    <div class="info">
                      <div class="info-item name ellipsis">安徽合肥（小柚子 收）</div>
                      <div class="info-item address">瑶海区东方商城</div>
                      <div class="info-item tel ellipsis">13666666666</div>
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
  </div>
</template>

<script>
  import '../../static/js/icheck/style.css'
  import '../../static/js/laydate/laydate'
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/css/uc.css'
  import Ucside from '../page/uc_side'
  import HeardHomePage from '../page/heardHomePage'
  export default {
    components: {
      HeardHomePage,
      Ucside
    }
  }
</script>
