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
            <div class="uc-bigtit">我的足迹</div>
            <div class="uc-panel-bd">
              <div class="uc-bar mt10">
                <div class="fl">以下是您最近30天的商品浏览记录</div>
                <div class="fr">
                  <label class="check"><input type="checkbox" name="" id="" /><span class="ml10 mr10">全选</span></label><a href="" class="del iconfont icon-shanchu"></a>
                </div>
              </div>

              <div class="footprint-box">
                <div class="footprint-item">
                  <div class="f-info">
                    <span class="f-date">今天</span><span class="f-time">2016-06-15</span><a class="f-del" href="">删除</a>
                  </div>
                  <div class="f-goods-list clearfix">
                    <div class="item">
                      <a href="" class="g-del"><i class="iconfont icon-shanchu"></i></a>
                      <a href=""><img class="figure" src="../../static/uploads/34.jpg" alt="" /></a>
                      <div class="cont">
                        <div class="name"><a href="">小米4k曲面显示器</a></div>
                        <div class="price">
                          <span class="n">￥699</span><span class="s">1998</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footprint-item">
                  <div class="f-info">
                    <span class="f-date">昨天</span><span class="f-time">2016-06-14</span><a class="f-del" href="">删除</a>
                  </div>
                  <div class="f-goods-list clearfix">
                    <div class="item">
                      <a href="" class="g-del"><i class="iconfont icon-shanchu"></i></a>
                      <a href=""><img class="figure" src="../../static/uploads/34.jpg" alt="" /></a>
                      <div class="cont">
                        <div class="name"><a href="">小米4k曲面显示器</a></div>
                        <div class="price">
                          <span class="n">￥699</span><span class="s">1998</span>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <a href="" class="g-del"><i class="iconfont icon-shanchu"></i></a>
                      <a href=""><img class="figure" src="../../static/uploads/34.jpg" alt="" /></a>
                      <div class="cont">
                        <div class="name"><a href="">小米4k曲面显示器</a></div>
                        <div class="price">
                          <span class="n">￥699</span><span class="s">1998</span>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <a href="" class="g-del"><i class="iconfont icon-shanchu"></i></a>
                      <a href=""><img class="figure" src="../../static/uploads/34.jpg" alt="" /></a>
                      <div class="cont">
                        <div class="name"><a href="">小米4k曲面显示器</a></div>
                        <div class="price">
                          <span class="n">￥699</span><span class="s">1998</span>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <a href="" class="g-del"><i class="iconfont icon-shanchu"></i></a>
                      <a href=""><img class="figure" src="../../static/uploads/34.jpg" alt="" /></a>
                      <div class="cont">
                        <div class="name"><a href="">小米4k曲面显示器</a></div>
                        <div class="price">
                          <span class="n">￥699</span><span class="s">1998</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footprint-item end">
                  <div class="nomore">没有更多了哦</div>
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
