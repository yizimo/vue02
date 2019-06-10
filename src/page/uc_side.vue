<template>
  <div class="uc-aside">
    <div class="uc-menu">
      <div class="tit">订单中心</div>
      <ul class="sublist">
        <li><router-link to="/uc_order"><a >我的订单</a></router-link></li>
        <li><router-link to="/uc_fav"><a>我的收藏</a></router-link></li>
        <li><router-link to="/uc_footprint"><a >浏览历史</a></router-link></li>
      </ul>
      <div class="tit">客户服务</div>
      <ul class="sublist">
        <li><router-link to="/uc_refund"><a>退款/退货</a></router-link></li>
      </ul>
      <div class="tit">账户中心</div>
      <ul class="sublist">
        <li><router-link to="/uc_account"><a >账户信息</a></router-link></li>
        <li><router-link to="/uc_adress"><a >收货地址</a></router-link></li>
      </ul>
      <div class="tit">消息中心</div>
      <ul class="sublist">
        <li><router-link to="/uc_evaludate"><a >商品评价</a></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ucside"
  }
</script>

<style scoped>

</style>
