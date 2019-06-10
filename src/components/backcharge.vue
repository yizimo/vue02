<template>
<div>
  <backhead></backhead>
  <br><br>
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
            店铺名
          </th>
          <th style="text-align:center">
            今日销售额
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
        name: "backcharge",
      components: {Backhead},
      data() {
        return {
          arrList: null,
          token:localStorage.getItem("token"),
        }
      },
      created: function() {
        this.findAllSale();
      },
      watch: {
        arrList: function (val) {
          this.arrList = val;
          console.log(val);

        }
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
      },
      deleteItem: function(index){
        if(!confirm('是否要删除当前数据')){
          //当用户点击的取消按钮的时候，应该阻断这个方法中的后面代码的继续执行
          return;
        }

        // 方法一
        // this.list.splice(index,1);
        // 方法二：
        // 根据 id 获取要删除的索引，方法一是直接传入删除数组的索引
        var index = this.list.findIndex(function(item){
          return item.id == index;
        });
        this.list.splice(index,1);
      }
    }
</script>
