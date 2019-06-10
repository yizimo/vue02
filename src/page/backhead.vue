<template>
  <div class="row clearfix" >
    <div class="col-md-12 column">
      <nav class="navbar navbar-default navbar-inverse" role="navigation">
        <div class="navbar-header">
          <span class="navbar-brand" href="#">后台管理</span>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/classcharge">分类管理</router-link>
            </li>
            <li>
              <router-link to="/backcharge">店铺管理</router-link>
            </li>
            <li>
              <router-link to="/usercharge">用户管理</router-link>
            </li>
            <li>
              <router-link to="/ordercharge">订单管理</router-link>
            </li>
            <li>
              <router-link to="/shopsales">商家销售量</router-link>
            </li>
            <li>
              <router-link to="/goodsales">商品销售量</router-link>
            </li>
          </ul>
          <!--<button class=" exit-butn  navbar-right" v-on:click="eixt">退出登录</button>-->
        </div>

      </nav>
    </div>
    <br><br><br>
  </div>

</template>


<script>

    export default {
        name: "backhead"
    }
</script>

<style scoped>

</style>
