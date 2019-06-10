<template>
  <div>
    <backhead></backhead>
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12">
          <form class="form-inline">
            <fieldset>
              <legend data-v-70fe1324="" style="padding-left: 300px;border-top-width: 200px;padding-top: 100px;">添加分类</legend>
              <div data-v-70fe1324="" class="title" style="padding-left: 320px;">当前父类：</div>
              <label data-v-70fe1324="" style="padding-left: 350px;">分类名：</label><input type="text" v-model="categoryName"  /><span class="help-block"></span><label class="checkbox"></label>

              <button data-v-70fe1324="" type="submit" class="btn" style="padding-left: 12px;border-left-width: 0px;margin-left: 550px;" @click="addItem">提交</button>            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Backhead from "./backhead";
    export default {
        name: "addclass",
      components: {Backhead},
      data() {
          return {
            categoryName: '',
            parentId: '',
            token:localStorage.getItem("token"),

          }
      },
      watch: {
        'parentId' :function (val) {
          this.parentId = val;
        }
      },
      created() {
        var _this = this;
        _this.parentId = this.$route.params.id;
        console.log(_this.parentId)
      },
      methods: {
          addItem: function () {
            var _this = this;
            $.ajax({
              type: 'post',
              url: this.$store.state.httpUrl + '/admin/category/insert',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("token", _this.token)
              },
              data :{
                'categoryName': _this.categoryName,
                'categoryParentId': _this.parentId,
              },
              success: function (data) {
                if(data.code == 100 ){
                  console.log(data)
                  _this.$router.push({
                    path: '/classcharge',
                    name: 'classcharge',

                  })
                }
              }
            })
          }
      }
    }
</script>

<style scoped>

</style>
