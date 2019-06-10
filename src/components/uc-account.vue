<template>
  <div>
    <!--头部-->
    <HomePageHead></HomePageHead>
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
        <Ucside></Ucside>
        <div class="uc-content">
          <div class="uc-panel">
            <div class="uc-bigtit">个人信息</div>
            <div class="uc-panel-bd">
              <div class="account-info clearfix">
                <div class="col-headpic">
                  <div class="pic-wrap">
                    <div class="label">头像</div>
                    <div class="picbox">
                      <img src="../../static/img/uc/headpic.jpg" alt="" />
                    </div>
                    <a class="edit" href="">修改头像</a>
                  </div>
                </div>
                <div class="col-userinfo">
                  <div class="control-group">
                    <div class="hd">用户名：</div>
                    <div class="bd"><input class="ui-txtin" type="text" name="" value="天使溜溜了" /></div>
                  </div>
                  <div class="control-group">
                    <div class="hd">昵称：</div>
                    <div class="bd"><input class="ui-txtin" type="text" name="" value="天使溜溜了" /></div>
                  </div>
                  <div class="control-group">
                    <div class="hd">电话：</div>
                    <div class="bd"><input class="ui-txtin" type="text" name=""  /></div>
                  </div>
                  <div class="control-group">
                    <div class="hd">邮箱：</div>
                    <div class="bd"><input class="ui-txtin" type="text" name=""  /></div>
                  </div>
                  <div class="control-submit">
                    <input class="ui-btn-theme submit" type="submit" value="确认" />
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
  import '../../static/js/layer/layer'
  import '../../static/js/laydate/laydate'
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/css/uc.css'
  import Ucside from '../page/uc_side'
  import HomePageHead from '../page/heardHomePage'

  export default {
    components: {
      HomePageHead,
      Ucside
    },

  }
</script>
