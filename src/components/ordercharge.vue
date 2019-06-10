<template>
  <div>
    <backhead></backhead>
    <br><br><br>
    <div class="row clearfix" style="text-align:center">
      <div class="bs-example" id="table">

        <table class="table table-bordered table-hover">
          <thead>
          <tr>
            <th style="text-align:center">
              编号
            </th>
            <th style="text-align:center">
              订单编号
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
            <th style="text-align:center">
              操作
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="order in orderList">
            <th scope="row" style="text-align:center">{{ order.orderId }}</th>
            <td style="text-align:center">{{ order.orderNumber }}</td>
            <td style="text-align:center">{{ order.user.userName}}</td>
            <td style="text-align:center">{{ order.orderMoney }}</td>
            <td style="text-align:center">{{ order.orderUserAdress}}</td>
            <td style="text-align:center">
              <span v-if="order.orderType == -2">未付款</span>
              <span v-if="order.orderType == -1">未发货</span>
              <span v-if="order.orderType == 0">完成</span>
              <span v-if="order.orderType == 1">确认收货</span>
              <span v-if="order.orderType == 2">退款中</span>
              <span v-if="order.orderType == 3">退换货中</span>
            </td>
            <td style="text-align:center">
              <button v-on:click="editItem(item.id)" class="btn btn-default" >编辑</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    import Backhead from "../page/backhead";
    export default {
        name: "ordercharge",
      components: {Backhead},
      data() {
          return{
            orderList: null,
            token:localStorage.getItem("token"),
          }
      },
      created: function () {
        this.findAllListOrder();
      },
      watch: {
          orderList: function (val) {
            this.orderList = val;
          }
      },
      methods: {
          findAllListOrder: function () {
            var _this = this;
            $.ajax({
              type: 'post',
              url: this.$store.state.httpUrl + '/admin/all/order',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("token", _this.token)
              },
              success: function (data) {
                console.log(data.extend);
                _this.orderList = data.extend.orderList;
              }
            })
          }
      }
    }
</script>

<style scoped>

</style>
