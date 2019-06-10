<template>
  <div>
    <backhead></backhead>
    <div style="margin-left: 140px;">
    <strong  v-for="(x, index) in categoryParent"  v-if="index!=0" style="font-size: 22px;">->{{ x }} </strong>
    </div>
    <br>
    <button v-on:click="addItem" class="btn btn-default" style="margin-left: 140px;" >添加分类</button>
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
              分类
            </th>
            <th style="text-align:center">
              操作
            </th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="x in categoryList" :key="x.categoryId">
            <th scope="row" style="text-align:center">{{ x.categoryId }}</th>
            <td style="text-align:center" ><button   class="btn btn-block btn-info" style="width:76px;display:block;margin:0 auto" @click="findCategoryList(x.categoryId,0,x.categoryName)">{{ x.categoryName}}</button></td>
            <td style="text-align:center">
              <button @click="editItem(x.categoryId)" class="btn btn-default" >编辑</button>
            </td>
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
        name: "classcharge",
      components: {Backhead},
      data() {
          return {
            categoryList: null,
            token:localStorage.getItem("token"),
            categoryParent:[],
            parentId: '',
          }
      },
      created: function() {
          this.findCategoryList(0,0,null);
          console.log('....')
          console.log(this.categoryList)
      },
      watch: {
        categoryList: function (val) {
          this.categoryList = val;
          console.log("val")
          console.log(val)
          console.log(this.categoryList)
        }
      },
      methods: {
          findCategoryList: function (parentId, pageNum,categoryName) {
          var _this = this;
          _this.parentId = parentId;
          $.ajax({
            type: 'post',
            url: this.$store.state.httpUrl + "/admin/getcategory",
            beforeSend: function(xhr) {
              xhr.setRequestHeader("token", _this.token)
            },
            data: {
              'categoryId': parentId,
              'pageNum': pageNum
            },
            success: function (data) {
              _this.categoryParent.push(categoryName);
              console.log(data.extend.pageInfoCategory.list);
              _this.categoryList = data.extend.pageInfoCategory.list;
              console.log(this.categoryList);
            }
          })
        },

        editItem: function (category) {
            var _this = this;
            console.log(category)
          _this.$router.push({
            path: '/classedit',
            name: 'classedit',
            params: {
              id: category
            }
          })
        },

        addItem: function () {
            var _this = this;
            _this.$router.push({
              path: '/addclass',
              name: 'addclass',
              params: {
                id: _this.parentId
              }
            })
        }


      }
    }
</script>

<style scoped>

</style>
