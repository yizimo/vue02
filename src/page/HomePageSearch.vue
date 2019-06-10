<template>
  <div class="header-wrap">
    <div class="header wrapper">
      <a href="" class="logo">
        <img src="../../static/img/logo3.png" alt="" />
      </a>
      <div class="header-schbox">
        <div class="inner clearfix">
          <form action="" method="">
            <div class="search-switch" ref="getType" id="getType">
              <i class="arrow"></i>
              <div class="item find" >商品</div>
              <div class="item active find">店铺</div>
            </div>
            <input class="search-txt" placeholder="搜流行宝贝" ref="input1" v-model="input1" v-on:blur="closeHintsBox">
            <button class="search-btn" @click="getSearch(null)"></button>
            <div class="hintsbox" v-if="showHintsBox">
              <ul class="hintslist" style="margin-left: 60px;">
                <li v-for="(item, index) in hints" ref="hint" class="hint" v-on:click="fillInput(index)" v-cloak>{{ item }}</li>
              </ul>
            </div>
<!--            <div class="suggest-box">-->
<!--              <div class="item" data-title="上衣 短款 短袖">上衣 短款 短袖<div class="tags"><span>雪纺</span><span>蕾丝</span><span>一字领</span></div></div>-->
<!--            </div>-->
          </form>
        </div>
      </div>
      <div class="contact">
                <!--<div class="item">-->
                    <!--<span class="ico iconfont">&#xe61b;</span>-->
                    <!--<span class="tel">400-000-0000</span>-->
                <!--</div>-->
                <!--<div class="item">-->
                     <!--<span class="ico iconfont">&#xe61d;</span><a class="kefu">在线客服</a>-->
                <!--</div>-->
            </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {

    },
    data() {
      return {

      input1: '',
      keyword: '',
      hints: [],
      showHintsBox: false,
      activeNo: -1
      }

    },
    watch: {
      //监控输入
      input1: function (newInput1, oldInput1) {
        this.getHintsList()
      },
      hints: function (newHints, oldHints) {
        this.hints = newHints;
      }
    },
    methods: {
      // 搜索，跳转
      getSearch: function (searchBrand) {
        var _this = this;
        var type=null
        var message = document.querySelectorAll('.find')[0].innerHTML;
        // 判断搜索类型
        if(message == '商品'){
          // console.log('商品')
          type = 1;
        }else {
          type = 2;
        }
        var searchInfo = null;
        if(searchBrand) {
          searchInfo = searchBrand;
        } else {
          searchInfo = _this.input1;
        }
        $.ajax({
          type: 'post',
          url: this.$store.state.httpUrl + '/search/search',
          data: {
            'key': searchInfo,
            'pageNo': 0,
            'type': type
          },
          success: function (data) {
            console.log(data.extend);
            console.log(data.extend.brands[0])
            console.log(data.extend.skuList);
            var brands = new Array();
            var common = null;
            brands = data.extend.brands;
            common = data.extend.skuList;
            console.log(brands);
            console.log(common)
            // 跳转搜索结果页面带参跳转
            _this.$router.push({
              path: '/kb', //路由
              name: 'kb',  //跳转的路径的name
              params: {
                num: common.length,
                common: common,
                searchMessage: searchInfo,
                pagaNo: 1,
                brands: brands
              }
            })
          }
        })
        // console.log(_this.$refs.input1.value);
      },


      // 获取候选列表
      getHintsList: function () {
        console.log("发送查询请求");
        var arr = null;
        this.$http.get(this.$store.state.httpUrl + '/common/search',{
          'categoryName': this.input1
        })
          .then(function (response) {
            //查询到了
            console.log(response.data.extend.categoryList)
            arr = response.data.extend.categoryList;
            console.log(arr);
            if(arr) {
              this.hints = arr;
            } else {
              this.hints = ''
            }
            console.log(this.hints);
            this.showHintsBox = true;
          });

      },
      //根据hints数组下标值填充输入框
      fillInput: function (index) {
        this.input1 = this.hints[index];
        this.closeHintsBox();
      },
      //关闭候选框
      closeHintsBox: function () {
        setTimeout(function () {
          this.hints = [];
          this.showHintBox = false;
          this.activeNo = -1;
        }, 80)
      }
    }
  }
</script>
