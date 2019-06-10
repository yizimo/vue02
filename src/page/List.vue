<template>
  <!--头部-->
  <div class="topper">
    <div class="wrapper">
      <div class="left-bar">
        <div class="change-city"><a class="name">合肥</a><a class="toggle" href="city-select.html">[切换]</a></div>
        <div class="back-home divider">
          <em></em><router-link to="/"><a >商城首页</a></router-link>
        </div>
        <div class="item"><a @click="userShop">商家中心</a></div>
      </div>
      <div class="right-bar">
        <div class="login-user sub-menu" v-if="userName">
          <a class="menu-hd" href="">{{ userName }}<em></em></a>
          <div class="down">
            <router-link to=""><a href="">已买到的宝贝</a></router-link>
            <router-link to=""><a href="">我的足迹</a></router-link>
          </div>
        </div>
        <div class="login-user sub-menu" v-else>
          <router-link to="/login"><a class="menu-hd" href="">登录<em></em></a></router-link>
        </div>
        <div class="item"><router-link to=""><a href="">消息（<span class="txt-theme" v-model="messageNum">{{ messageNum }}</span>）</a></router-link></div>
        <div class="logout divider" v-if="userName" ><a @click="tiaozhuan">退出</a></div>
        <span class=""></span>
        <div class="cart"><em></em><router-link to="/cart"><a href="">购物车<span class="txt-theme">2</span>件</a></router-link> </div>
        <div class="order" v-if="userName"><em></em><router-link to=""><a href="">我的订单</a></router-link></div>
        <div class="fav" v-if="userName"><em></em><router-link to=""><a href="">我的收藏</a></router-link></div>
        <div class="help"><em></em><a href="">帮助中心</a></div>
      </div>
    </div>
  </div>
  <div class="header-wrap">
    <div class="header wrapper">
      <a href="" class="logo">
        <img src="../../static/img/logo3.png" alt="" />
      </a>
      <div class="header-schbox">
        <div class="inner clearfix">
          <form action="" method="">
            <div class="search-switch" ref="getType" id="getType">
              <i class="arrow"></i>
              <div class="item find" >商品</div>
              <div class="item active find">店铺</div>
            </div>
            <input class="search-txt" placeholder="搜流行宝贝" ref="input1">
            <button class="search-btn" @click="getSearch"></button>
            <div class="suggest-box">
              <div class="item" data-title="上衣 短款 短袖">上衣 短款 短袖<div class="tags"><span>雪纺</span><span>蕾丝</span><span>一字领</span></div></div>
            </div>
          </form>
        </div>
      </div>
      <div class="contact">
                <!--<div class="item">-->
                    <!--<span class="ico iconfont">&#xe61b;</span>-->
                    <!--<span class="tel">400-000-0000</span>-->
                <!--</div>-->
                <!--<div class="item">-->
                     <!--<span class="ico iconfont">&#xe61d;</span><a class="kefu">在线客服</a>-->
                <!--</div>-->
            </div>
    </div>
  </div>
  <div class="nav-box">
    <div class="nav wrapper">
      <div class="slogan"></div>
      <ul class="nav-ul">
        <li><router-link to="/"><a href="">首页</a></router-link></li>
        <li><a href="#">服装城</a></li>
        <li><a href="">美妆馆</a></li>
        <li><a href="">秒杀</a></li>
      </ul>
    </div>
  </div>
  <!--头部-->



</template>

<script>
  export default {
    props: {
      categor: {
        type: Array,
        required: true
      }
    }
  }
</script>
