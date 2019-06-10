<template>
  <div class="side-category">
    <div class="side-category-tit">全品分类</div>
    <div class="side-category-bd"  >
      <div class="f-item"  v-for="category in categorysOne" :key="category.categoryId">
        <div class="f-box" >
          <div class="f-tit">{{ category.categoryName }}</div>
          <div class="f-list">
            <a href=""  v-for="catego in category.category" :key="catego.categoryId">{{ catego.categoryName}}</a>
          </div>
        </div>
        <div class="c-box">
          <div class="c-list" v-for="cate in category.category" :key="cate.categoryId">
            <div class="dl">
              <div class="dt" style="padding-top: 0px;">{{ cate.categoryName}}</div>
              <div class="dd">
                <div href=""  v-for="ca in cate.category" :key="ca.categoryId" @click="findCateId(ca.categoryId)">{{ ca.categoryName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="side-category-ft" data-action="category-toggle">
      <span class="label tohide">收起导航</span>
      <span class="label toshow">展开导航</span>
    </div>
  </div>
</template>

<script>
  import  All from '../page/all'

  export default {
    props: {

    },
    data() {
      return {
        categorysOne: null
      }
    },

    created: function() {
      this.getCategory();
    },
    methods: {
      //获取分类信息
      getCategory: function () {
        var _this = this;
        $.ajax({
          type: 'post',
          url: this.$store.state.httpUrl + '/common/categoryAll',
          success: function (data) {
            _this.categorysOne = data.extend.categoryList;
          },
          error: function () {
          }
        })
      },
      // 跳转 分类
      findCateId: function(categoryId) {
        alert(categoryId)
        // $.ajax({
        //   tyep: 'post',
        //   url: All.httpUrl + '/common/category/'+ categoryId,
        //   success: function (data) {
        //     var findCate = data.extend.spus;
        //     alert(findCate.length)
        //     //跳转
        //   }
        // })
      }

    }

  }
</script>
