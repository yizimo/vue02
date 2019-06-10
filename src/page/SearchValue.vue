<template>
  <div class="sg-content">
    <div class="rank-menu">
      <div class="help">
        <span class="info">共<span v-model="num">{{ num }}个</span>商品</span>
        <div class="r-page">
          <a class="prev" href="" v-if="showFirstPage" @click="previousPage()">上一页</a><a class="next" v-if="showLastPage" @click="nextPage()">下一页</a>
        </div>
      </div>
    </div>
    <div class="sg-list clearfix" v-if="common">
      <div class="col col-3" v-for="comm in common">
        <div class="item">
          <div class="inner">
            <a href="javascript:return 0"><img class="figure" :src="comm.skuImg" alt="" /></a>
            <a href="javascript:return 0"><div class="name">{{ comm.skuName}}</div><div class="price">{{ comm.skuMoney}}元</div></a>
            <a class="act" @click="joinCart(comm.skuId)"><i class="iconfont icon-cart"></i>加入购物车</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      common: {
        type: Array
      },
      num: {
        type: Number
      },
      pageNo: {
        type: Number
      },
      searchMessage: {
        type: String
      },
    },
    data() {
      return {

        showFirstPage: false,
        showLastPage: true,
      }
    },
    created: function(){
        console.log(this.num)
      if(this.num == 1){
        this.showFirstPage = false
      } else {
        this.showFirstPage = true
      }
      if(this.pageNo * 16 < this.num) {
        this.showLastPage = true
      }else {
        this.showLastPage = false
      }
    },
    watch: {
      searchMessage: function(newSearchMessage, oldSearchMessage) {
        this.searchMessage = newSearchMessage
      },
      pageNo: function (newPageNo, oldPageNo) {
        if(newPageNo == 1){
          this.showFirstPage = false
        } else {
          this.showFirstPage = true
        }
        if(newPageNo * 16 < this.num) {
          this.showLastPage = true
        }else {
          this.showLastPage = false
        }
        this.pageNo = newPageNo
      },
      num: function (newNum, oldNum) {
        if(this.pageNo == 1){
          this.showFirstPage = false
        } else {
          this.showFirstPage = true
        }
        if(this.pageNo * 16 < newNum) {
          this.showLastPage = true
        }else {
          this.showLastPage = false
        }
        this.num = newNum
      },
      'common': function (newCommon, oldCommon) {
        this.common = newCommon;
      }
    },
    methods: {
      //加入购物车
      joinCart: function (skuId) {
        if(this.$store.state.user) {
          //传给数据库
        } else {
          console.log("存到前端")
          // 存到前端
          var Ids = JSON.parse(localStorage.getItem('cart'));
          localStorage.removeItem('cart');
          skuId+=",";
          Ids+=skuId;
          localStorage.setItem('cart', JSON.stringify(skuId))
          console.log(localStorage.getItem('cart'))
        }
      },
      //下一页
      nextPage: function () {
        //查询
        this.$http.get(this.$store.state.httpUrl + '/search/nextPage', {
          params:{
            searchMessage: this.searchMessage,
            pageNo: this.pageNo
          }
        }).then(function (response) {
          console.log("nextPage" + response)
        })
        // this.common = common;
      },
      //上一页
      previousPage: function () {
        //查询
        //查询
        this.$http.get(this.$store.state.httpUrl + '/search/nextPage', {
          params:{
            searchMessage: this.searchMessage,
            pageNo: this.pageNo-2
          }
        }).then(function (response) {
          console.log("nextPage" + response)
        })
        // this.common = common;
      }
    },
  }
</script>
