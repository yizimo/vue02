<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row-fluid">
        <shopkeepperhead></shopkeepperhead>
        <br><br>
  <div class="row clearfix" style="text-align:center">
    <div class="bs-example" id="table">

      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th style="text-align:center">
            编号
          </th>
          <th style="text-align:center">
            订单号
          </th>
          <th style="text-align:center">
            用户名
          </th>
          <th style="text-align:center">
            订单金额
          </th>
          <th style="text-align:center">
            订单地址
          </th>
          <th style="text-align:center">
            订单状态
          </th>


        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in arrList" :key="index">
          <th scope="row" style="text-align:center">{{item.storeId}}</th>
          <td style="text-align:center">{{item.storeName}}</td>
          <td style="text-align:center">{{item.saleRoom.saleRoomMoney}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Shopkeepperhead from "../page/shopkeepperhead";
    export default {
        name: "shoporder",
      components: {Shopkeepperhead}
    }
</script>

<style scoped>

</style>
