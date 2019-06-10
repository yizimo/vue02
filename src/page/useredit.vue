<template>
  <div>
    <backhead></backhead>
    <br><br><br>
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12">
          <form class="form-inline">
            <fieldset>
              <legend data-v-62bafa77="" style="padding-left: 260px;">
                编辑
              </legend>
              <label data-v-62bafa77="" style="padding-left: 240px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改用户名：</label><input type="text" /><p></p><br>
              <label data-v-62bafa77="" style="padding-left: 285px;">修改昵称：</label><input type="text" /><p></p><br>
              <label data-v-62bafa77="" style="padding-left: 270px;">修改手机号：</label><input type="text" /><p></p><br>
              <label data-v-62bafa77="" style="padding-left: 285px;">修改邮箱：</label><input type="text" /><p></p><br>
              <button data-v-62bafa77="" type="submit" class="btn" style="border-left-width: 0px;margin-left: 500px;">提交</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Backhead from "./backhead";
    export default {
        name: "useredit",
      components: {Backhead},
      data() {
          return {

          }
      },
      methods: {

      },

    }
</script>

<style scoped>

</style>
