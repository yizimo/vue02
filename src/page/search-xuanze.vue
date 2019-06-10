<template>
  <div class="filter-box" v-if="common">
    <div class="wrapper">
      <div class="sch-prop sch-brand" v-if="brands">
        <div class="sch-key" v-if="showBrandName">品牌：</div>
        <div class="sch-key" v-else>品牌已选择</div>
        <div class="sch-value clearfix" v-if="showBrandName">
          <div class="item"  v-for="brand in brands">
            <a class="inner" href="" @click="getBrandName(brand.brandName)">
              <img :src=brand.brandImg alt="" />
              <div class="name">{{ brand.brandName }}</div>
            </a>
          </div>
        </div>
        <div class="sch-value clearfix"  v-else>{{ brandName }}</div>
      </div>
      <div class="sch-prop clearfix">
        <div class="sch-key" v-if="showSkuMoney">价格：</div>
        <div class="sch-key" v-else>价格已选择</div>
        <div class="sch-value clearfix" v-if="showSkuMoney">
          <a  @click="getMoney('1-1999')" href="javascript: return 0">1-1999</a>
          <a  @click="getMoney('2000-3999')" href="javascript: return 0">2000-3999</a>
          <a  @click="getMoney('4000-5999')" href="javascript: return 0">4000-5999</a>
          <a  @click="getMoney('6000-9999')" href="javascript: return 0">6000-9999</a>
          <a  @click="getMoney('10000-14999')" href="javascript: return 0">10000-14999</a>
          <a @click="getMoney('15000++')" href="javascript: return 0">15000以上</a>
        </div>
        <div  class="sch-value clearfix" v-else><a href="" v-model="skuMoney">{{ skuMoney }}</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created: function() {
      console.log(this.brands);
      console.log(this.common);
    },
    props: {
      common: {
        type: Array
      },
      brands: {
        type: Array
      },
      searchMessage: {
        type: String
      },
    },
    data() {
      return {
        skuMoney: '',
        brandName: '',
        showSkuMoney: true,
        showBrandName: true,
      }
    },
    watch: {
      searchMessage: function(newSearchMessage, oldSearchMessage) {
        this.searchMessage = newSearchMessage
      },
      'skuMoney': function (newSkuMoney, oldSkuMoney) {
        this.skuMoney = newSkuMoney;
        if(newSkuMoney) {
          this.showSkuMoney = true
        } else {
          this.showSkuMoney = false
        }
      },
      'brandName': function (newBrandName, oldBrandName) {
        this.brandName = newBrandName
        if(newBrandName) {
          this.showBrandName = true
        } else {
          this.showBrandName = false
        }
      },
      'common': function (newCommon, oldCommon) {
        this.common = newCommon
      },
      'brands': function (newBrands, oldBrands) {
        console.log("获取到了新得brand" + newBrands)
        this.brands = newBrands
      },
    },
    methods: {
      getMoney: function (val) {
        this.skuMoney = val;
        this.showSkuMoney = false;
        //获取数据
        var common = null;


        this.common = common
        // 传数据给父组件更新其他兄弟组件得common
        this.$emit('changeCommon', this.common);

      },
      getBrandName: function (val) {
        this.brandName = val;
        this.showBrandName = false;
        //获取数据
        var common = null;

        this.common = common;
        // 传数据给父组件更新其他兄弟组件得common
        this.$emit('changeCommon', this.common);
      }
    },

  }
</script>
