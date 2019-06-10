<template>
  <div class="topper">
    <div class="wrapper">
      <div class="left-bar">
        <div class="back-home divider">
          <em></em><router-link to="/"><a >商城首页</a></router-link>
        </div>
        <div class="item"><a @click="userShop">商家中心</a></div>
      </div>
      <div class="right-bar">


        <div class="login-user sub-menu" v-if="userName">
          <a class="menu-hd" href=""><router-link to="/uc_account">{{ userName }}</router-link><em></em></a>

        </div>
        <div class="login-user sub-menu" v-else>
          <router-link to="/login"><a class="menu-hd" href="">登录<em></em></a></router-link>
        </div>
        <div class="item"><router-link to=""><a href="">消息（<span class="txt-theme" v-model="messageNum">{{ messageNum }}</span>）</a></router-link></div>
        <div class="logout divider" v-if="userName" ><a @click="remove()">退出</a></div>
        <span class=""></span>
        <div class="cart"><em></em><router-link to="/cart"><a href="">购物车<span class="txt-theme">2</span>件</a></router-link> </div>
        <div class="order" v-if="userName"><em></em><router-link to=""><a href="">我的订单</a></router-link></div>
        <div class="fav" v-if="userName"><em></em><router-link to=""><a href="">我的收藏</a></router-link></div>
        <div class="help"><em></em><a href="">帮助中心</a></div>
      </div>
    </div>
  </div>
</template>


<script>

  import All from '../page/all'

  export default {
    props: {

    },
    data() {
      return {
        //用户名字
        userName: '',
        // 消息数量
        messageNum: 1,
      }
    },
    created: function() {
      this.userName = JSON.parse(localStorage.getItem("user")).userName;
      console.log(this.userName);
    },
    methods: {
      //退出
      goBackUser: function() {
        var _this = this;
        localStorage.removeItem("user");
        userName = null;
        _this.$router(0)
      },

      //商家中心
      userShop: function () {
        if(!store.state.user){
          alert('请登录')
          this.tiaozhuan('/login')
        }else if(store.state.user.type != 1){
          alert('你还没有开店')
          var r = confirm("是否开店")
          if(r == true) {
            alert('点击了确定')
          }
        }else {
          this.tiaozhuan('/')
        }
      },
      remove:function () {
        var _this = this;
        $.ajax({
          type: 'post',
          url: this.$store.state.httpUrl + '/login/reomve',
          headers: {
            'token': localStorage.getItem("token")
          },
          success: function (data) {
            console.log(data);
            if(data.code==100){
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              _this.$router.push({path:'/login'})
            }
          }
        })
      }
    }
  }
</script>
