<template>
    <div>
      <backhead></backhead>
      <br><br>
      <br><br>
      <div class="bs-example" id="table">

        <table class="table table-bordered table-hover">
          <thead>
          <tr>
            <th style="text-align:center">
              编号
            </th>
            <th style="text-align:center">
              用户名
            </th>
            <th style="text-align: center">
              昵称
            </th>
            <th style="text-align:center">
              手机
            </th>
            <th style="text-align:center">
              邮箱
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in userList" :key="user.userId">
            <th scope="row" style="text-align:center">{{ user.userId }}</th>
            <td style="text-align:center">{{ user.userName }}</td>
            <td style="text-align:center">{{ user.userNickname }}</td>
            <td style="text-align:center">{{ user.userPhone }}</td>
            <td style="text-align:center">{{ user.userEmail }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
    import Backhead from "../page/backhead";
    export default {
        name: "usercharge",
      components: {Backhead},
      data() {
          return {
            userList: null,
            token:localStorage.getItem("token"),
          }
      },
      created: function() {
        this.findUserList();
      },
      watch: {
        userList: function (val) {
          this.userList = val;
        }
      },
      methods: {
          findUserList: function () {
            var _this = this;
            $.ajax({
              type: 'post',
              url: this.$store.state.httpUrl + '/admin/user/list',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("token", _this.token)
              },
              success: function (data) {
                console.log(data.extend);
                _this.userList = data.extend.userList;
              }
            })
          }
      }
    }
</script>

<style scoped>

</style>
