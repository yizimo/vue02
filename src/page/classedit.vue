<template>
    <div>
      <backhead></backhead>
      <br><br><br>
      <div class="container-fluid">
        <div class="row-fluid">
          <div class="span12">
            <form class="form-inline">
              <fieldset>
                <legend>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编辑</legend> <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改分类：</label><input type="text" v-model="category.categoryName"  /><span class="help-block"></span><label class="checkbox"></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" class="btn" @click="updateCategory()">提交</button>
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
        name: "classedit",
      components: {Backhead},
      data() {
          return {
            id: '',
            category: null,
            token:localStorage.getItem("token"),
          }
      },
      watch: {
          'category': function (val) {
            this.category = val;
            console.log(this.category)
          }
      },
      methods: {

        getCategory() {
            var _this = this;
            console.log(this.id)
            $.ajax({
              type: 'post',
              url: this.$store.state.httpUrl + '/admin/category/one',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("token", _this.token)
              },
              data: {
                'categorytId': _this.id
              },
              success: function (data) {
                console.log(data);
                _this.category = data.extend.category
              }
            })
        },
        updateCategory: function () {
          console.log(this.category);
          var _this = this;
          $.ajax({
            type: 'post',
            url: this.$store.state.httpUrl + '/admin/update/category',
            beforeSend: function(xhr) {
              xhr.setRequestHeader("token", _this.token)
            },
            data: {
              categoryId: this.category.categoryId,
              categoryName: this.category.categoryName,
              categoryParentId: this.category.categoryParentId
            },
            success: function (data) {
              if(data.code == 100) {
                _this.$router.push({
                  path: '/classcharge',
                  name: 'classcharge',

                })
              }
            }
          })
        }
      },
      created() {
         var _this = this;
         _this.id = this.$route.params.id;
         console.log(this.$route)
         console.log(this.$route.params.id),
           _this.getCategory();

      }
    }
</script>

<style scoped>

</style>
