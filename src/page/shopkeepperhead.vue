<template>
  <div class="span12">
    <ul class="nav nav-tabs">
      <li class="active">
        <router-link to="/shopkeepper">当前店铺：{{storeInfo.storeName}}</router-link>
      </li>
      <li >
        <router-link to="/shoporder">订单管理</router-link>
      </li>
      <li >
        <router-link to="/commentcharge">评论管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "shopkeepperhead",
      data() {
        return {
          storeInfo: null,
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

      }
    }
</script>

<style scoped>

</style>
