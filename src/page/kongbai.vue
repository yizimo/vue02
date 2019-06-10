<template>

</template>

<script>
  export default {
    data() {
      this.$router.replace({
        path: '/search_goods',
        name: 'search_goods',
        params: {
          num: this.$route.params.num,
          searchMessage: this.$route.params.searchMessage,
          common: this.$route.params.common,
          pageNo: 1,
          brands: this.$route.params.brands
        }
      })
      return {

      }
    }
  }
</script>
