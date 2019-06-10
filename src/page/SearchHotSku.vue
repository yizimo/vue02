<template>
  <div class="sg-aside">
    <div class="sg-aside-tit">
      店铺热销
    </div>
    <div class="shop-hot" v-if="hotSku">
      <div class="item" v-for="sku in hotSku" :key="sku.skuId">
        <a href=""><img class="figure" :src="sku.skuImg" alt="" /></a>
        <div class="p-name"><a href="">{{ sku.skuName }}</a></div>
        <div class="price">¥{{ sku.skuMoney}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created: function() {
      this.getHotSku();
    },
    data() {
      return {
        hotSku: '',
      }
    },
    methods: {
      //获取热推商品
      getHotSku: function() {
        var _this = this;
        $.ajax({
          type: 'post',
          url: this.$store.state.httpUrl + '/common/sku/hot',
          success: function (data) {
            _this.hotSku = data.extend.skus;
          }
        })
      },
    }

  }
</script>
