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
        <Ucside></Ucside>
        <div class="uc-content">
          <div class="uc-panel">
            <div class="uc-bigtit">我的收藏</div>
            <div class="uc-panel-bd">
              <div class="uc-tabs">
                <a class="item" href="uc-fav.html">我收藏的商品</a>
                <a class="item active" href="uc-fav-shop.html">我收藏的店铺</a>
              </div>
              <div class="uc-bar">
                <label class="check"><input type="checkbox" /><span class="ml10 mr10">全选</span></label><a href="" class="del iconfont icon-shanchu"></a>
              </div>
              <div class="fav-shop">
                <div class="row">
                  <div class="s-info-col">
                    <label class="check"><input type="checkbox" /></label>
                    <div class="s-info">
                      <a href=""><img class="s-logo" src="../../static/uploads/9.jpg" alt="" /></a>
                      <div class="name"><a href="">韩都衣舍蔚然专</a></div>
                      <a class="text-danger" href="">删除</a>
                    </div>
                  </div>
                  <div class="s-goods">
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="s-info-col">
                    <label class="check"><input type="checkbox" /></label>
                    <div class="s-info">
                      <a href=""><img class="s-logo" src="../../static/uploads/9.jpg" alt="" /></a>
                      <div class="name"><a href="">韩都衣舍蔚然专</a></div>
                      <a class="text-danger" href="">删除</a>
                    </div>
                  </div>
                  <div class="s-goods">
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="s-info-col">
                    <label class="check"><input type="checkbox" /></label>
                    <div class="s-info">
                      <a href=""><img class="s-logo" src="../../static/uploads/9.jpg" alt="" /></a>
                      <div class="name"><a href="">韩都衣舍蔚然专</a></div>
                      <a class="text-danger" href="">删除</a>
                    </div>
                  </div>
                  <div class="s-goods">
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                    <div class="item">
                      <a href=""><img src="../../static/uploads/2.jpg" alt="" /></a>
                      <div class="info"><span class="price">¥75.00</span><span class="sale">销量0</span></div>
                    </div>
                  </div>
                </div>
              </div>
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
