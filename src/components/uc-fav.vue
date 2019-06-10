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
                <a class="item active" href="uc-fav.html">我收藏的商品</a>
                <a class="item" href="uc-fav-shop.html">我收藏的店铺</a>
              </div>
              <table class="uc-table">
                <tr class="hd">
                  <td width="16" class="check"><input type="checkbox" /></td>
                  <td widtd="360" class="align-left" >
                    商家名称
                  </td>
                  <td width="100">价格</td>
                  <td width="100">库存情况</td>
                  <td width="120">操作</td>
                  <td><a href="" class="del iconfont icon-shanchu"></a></td>
                </tr>
                <tr class="fav-goods">
                  <td class="check"><input type="checkbox" /></td>
                  <td class="item">
                    <img src="" alt="" /><span class="name">小米短袖T恤 五彩换</span>
                  </td>
                  <td><span class="text-theme fwb">298元</span></td>
                  <td>现货</td>
                  <td><a href="" class="ui-btn-theme uc-btn-md mb5">加入购物车</a><br /><a class="text-muted" href="">取消收藏</a></td>
                  <td><a href="" class="text-warning">删除</a></td>
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
