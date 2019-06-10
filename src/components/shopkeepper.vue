<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row-fluid">
        <shopkeepperhead></shopkeepperhead>
        <br><br>
        <router-link to="/addgoods"><button  class="btn btn-default" style="margin-left: 100px;">上架商品</button></router-link><br><br>
      </div>
    </div>
    <div class="row-fluid">
      <div class="span12">
        <ul class="thumbnails">
          <li class="span4">
            <div class="thumbnail">
              <img alt="300x200" src="../../static/uploads/qq.png" />
              <div class="caption">
                <h3>
                  价格 ：¥79.00
                </h3>
                <p>
                  真丝上衣女桑蚕丝女装短袖衫t恤半袖小衫大码妈妈宽松遮肚子显瘦S
                </p>
                <p>
                  <a class="btn btn-primary" href="#">下架</a>
                </p>
              </div>
            </div>
          </li>
          <li class="span4">
            <div class="thumbnail">

              <img alt="300x200" src="../../static/uploads/qq1.png" />
              <div class="caption">
                <h3>
                  价格 ：¥699.00
                </h3>
                <p>
                  【INXX】PILGRIMAGE迷幻系列 潮牌短袖休闲简约情侣T恤PM92011250                </p>
                <p>
                  <a class="btn btn-primary" href="#">下架</a>
                </p>
              </div>
            </div>
          </li>

        </ul>
        <ul class="thumbnails">



        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import Shopkeepperhead from "../page/shopkeepperhead";
    export default {
        name: "shopkeepper",
      components: {Shopkeepperhead},
      data() {
          return {
            storeInfo: null,
            SkuList: null,
            token:localStorage.getItem("token"),


          }
      },
      created() {
        var user = JSON.parse(localStorage.getItem('user'));
        console.log(user.userId)
        this.findStoreList(user.userId)
        console.log(this.storeInfo)
      },
      methods: {
          findStoreList: function (userId) {
            var _this = this;
            $.ajax({
              type: 'post',
              url: _this.$store.state.httpUrl + '/store/info',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("token", _this.token)
              },
              data: {
                'userId': userId
              },
              success: function (data) {
                console.log(data.extend)
                _this.storeInfo = data.extend.storeInfo;
              }
            })
          },
          findSkuList: function (storeId) {
            var _this = this;
            $.ajax({
              type: 'post',
              url: this.$store.state.httpUrl + '/store/store/sku',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("token", _this.token)
              },
              data: {
                storeId: storeId,
                pageNum: 0
              },
              success: function (data) {
                console.log(data.extend)
              }
            })
          }

      }

    }
</script>

<style scoped>

</style>
