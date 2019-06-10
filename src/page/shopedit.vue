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
              <label data-v-62bafa77="" style="padding-left: 240px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改店铺名：</label><input type="text" /><p></p><br>
              <label data-v-62bafa77="" style="padding-left: 215px;">修改店铺今日销售额：</label><input type="text" /><p></p><br>
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
        name: "shopedit",
      components: {Backhead}
    }
</script>

<style scoped>

</style>
