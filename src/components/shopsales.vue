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
              店铺名
            </th>
            <th style="text-align:center">
              近七天销售总额
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
</template>

<script>
    import Backhead from "../page/backhead";

    export default {
      name: "shopsales",
      components: {Backhead},
      data() {
        return {
          arrList: null,
          token:localStorage.getItem("token"),
        }
      },
      created() {
        this.findAllSale()
      },
      methods: {
        findAllSale: function () {
          var _this = this;
          $.ajax({
            type: 'post',
            url: this.$store.state.httpUrl + '/admin/sale/today',
            beforeSend: function(xhr) {
              xhr.setRequestHeader("token", _this.token)
            },
            success: function (data) {
              console.log(data.extend);
              _this.arrList = data.extend.storeList;
            }
          })
        }


      }

    }
</script>

<style scoped>

</style>
