<template>
  <div>
    <backhead></backhead>
    <br><br>
    <br><br>
  <div>
    <div class="row clearfix" style="text-align:center">
      <div class="bs-example" id="table">

        <table class="table table-bordered table-hover">
          <thead>
          <tr>
            <th style="text-align:center">
              编号
            </th>
            <th style="text-align:center">
              商品名
            </th>
            <th style="text-align:center">
              近七天销售额
            </th>
            <th style="text-align:center">
              操作
            </th>

          </tr>
          </thead>
          <tbody v-if="saleSpuList">
          <tr v-for="x in saleSpuList">
            <th scope="row" style="text-align:center">{{ x.spuId}}</th>
            <td style="text-align:center">{{ x.spuName}}</td>
            <td style="text-align:center">{{ x.saleSpuNum}}</td>
            <td style="text-align:center">
              <button v-on:click="editItem(item.id)" class="btn btn-default" >编辑</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    import Backhead from "../page/backhead";
    export default {
        name: "goodsales",
      components: {Backhead},
      data() {
        return{
          saleSpuList: null,
          token:localStorage.getItem("token"),
        }
      },
      created: function () {
        this.findAllListSaleSpu();
      },
      watch: {
        saleSpuList: function (val) {
          this.saleSpuList = val;
        }
      },
      methods: {
        findAllListSaleSpu: function () {
          var _this = this;
          $.ajax({
            type: 'post',
            url: this.$store.state.httpUrl + '/admin/all/saleSpu',
            beforeSend: function(xhr) {
              xhr.setRequestHeader("token", _this.token)
            },
            success: function (data) {
              console.log(data.extend.spuList);
              _this.saleSpuList = data.extend.spuList;
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
