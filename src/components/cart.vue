<template>
    <div>
      <div class="topper">
        <div class="wrapper">
          <div class="left-bar">
            <div class="back-home divider">
              <em></em><router-link to="/"><a href="index.html">商城首页</a></router-link>
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
            <div class="order"><em></em><router-link to="/cart"> <a href="">我的订单</a></router-link></div>
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
            <div class="step col-3">
              <span class="num">2</span><span class="line"></span><span class="label">确认订单信息</span>
            </div>
            <div class="step col-3">
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
        <table class="cart-table">
          <thead>
          <tr class="hd">
            <th width="30px" class="first"><label class="check"><input id="checkall" type="checkbox" name="all" /><span>全选</span></label></th>
            <th width="430px">商品名称</th>
            <th width="180px">单价</th>
            <th width="190px">数量</th>
            <th width="180px">小计</th>
            <th width="190px">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr class="blank">
            <td colspan="6"></td>
          </tr>
          <tr class="shop">
            <td colspan="6" class="first">
              <div class="check"><input type="checkbox" name="shop"/><span>店铺：小米旗舰店</span></div>
            </td>
          </tr>
          </tbody>
          <tbody>
          <tr class="goods">
            <td class="first"><div class="check"><input type="checkbox" name=""/></div></td>
            <td>
              <div class="info-box">
                <img src="../../static/uploads/11.jpg" alt="">
                <div class="info">
                  <div class="name">小米短袖T恤 五彩换</div>
                  <div class="meta"><span>黑色</span><span>S</span></div>
                </div>
              </div>
            </td>
            <td>￥<span class="unitprice">499.00</span></td>
            <td>
              <div class="mod-numbox cart-numbox" data-max="30">
                <span class="count-minus"></span>
                <input class="count-input" value="1"  type="text" name="num" />
                <span class="count-plus"></span>
              </div>
            </td>
            <td class="txt-error">￥<span class="price">499.00</span></td>
            <td><a href="javascript:;" class="del iconfont icon-shanchu"  ></a></td>
          </tr>
          </tbody>
        </table>
        <div class="cart-total-box">
          <div class="cart-total">
            <div class="fl">
              <div class="back"><a href="">继续购物</a></div><div class="count">共 <span class="num" id="totalNum">1</span> 件商品， 已选择 <span class="num" id="selectedNum">1</span> 件</div>
            </div>
            <div class="fr">
              <div class="price">
                合计（不含运费）：<span id="totalMoney">499.00</span>元
              </div>
              <a class="go-account ui-btn-theme" href="confirm-order.html">去结算</a>
            </div>
          </div>
        </div>

      <!--脚部-->
      <div class="fatfooter">

      </div>
      <!--脚部-->
    </div>
    </div>
</template>

<script>
  import '../../static/js/icheck/style.css'
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/css/cart.css'
    export default {
      deletePro : function(index){
        alert("你正在删除"+this.productList[index].proName);
        this.productList.splice(index,1);}
      }
</script>
