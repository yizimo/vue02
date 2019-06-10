<template>
  <div>
    <div class="login-header">
      <div class="wrapper">
        <a href="" class="logo">
          <img src="../../static/img/logo3.png" alt="" />
        </a>
        <div class="zp">
          <span class="ico"></span>
          <div>正品保障</div>
        </div>
      </div>
    </div>
    <div class="login-main-wrap">
      <div class="login-main wrapper">
        <div class="login-box">
          <form action="" method="">
            <div class="box-hd">
              <span class="tit">用户登录</span>
              <router-link to="/sign">注册新账号</router-link>
              <!--<a href="sign-in.vue">注册新账号</a>-->
            </div>
            <label class="txtin-box">
              <span class="ico user"></span>
              <input class="txtin" type="text" name="" v-model="userPhone" placeholder="用户名/手机" />
            </label>
            <label class="txtin-box">
              <span class="ico pwd"></span>
              <input class="txtin" type="password" name="" v-model="userPassword" placeholder="密码" />
            </label>
            <div class="clearfix tool">
              <label class="check"><input type="checkbox" id="" />自动登录</label>
              <a class="find"><router-link to="/forgot_pwd">忘记密码？</router-link></a>
            </div>
            <input class="tj" type="submit" @click="getLogin"value="登录" />
            <div class="other-way clearfix">
              <a class="item first" href="">
                <img src="../../static/img/login/weixin.jpg" alt="" class="ico" />
                <span class="label">微信</span>
              </a>
              <a class="item" href="">
                <img src="../../static/img/login/qq.jpg" alt="" class="ico" />
                <span class="label">微信</span>
              </a>
              <a class="item" href="">
                <img src="../../static/img/login/sina.jpg" alt="" class="ico" />
                <span class="label">微信</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="authentication">
        <a href=""><img src="../../static/uploads/35.jpg" alt="" /></a>
        <a href=""><img src="../../static/uploads/36.jpg" alt="" /></a>
        <a href=""><img src="../../static/uploads/37.jpg" alt="" /></a>
        <a href=""><img src="../../static/uploads/38.jpg" alt="" /></a>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/js/icheck/style.css'
  export default {
    data(){
      return{
        userPhone:'',
        userPassword:'',
        token: '',
      }
    },
    methods:{
      getLogin: function() {
        var _this = this;
        $.ajax({
          type: 'post',
          url: this.$store.state.httpUrl + '/login/user',
          withCredentials: true,
          data: {
            type:2,
            userPhone:this.userPhone,
            userPassword: this.userPassword
          },
          success: function (data) {

            console.log(data);
            this.token = data.extend.token;
            console.log(this.token);
            localStorage.setItem("user", JSON.stringify(data.extend.user));
            localStorage.setItem("token",data.extend.token);
            _this.$store.commit('changeToekn', this.token) ;
            _this.$store.commit('changeUse', data.extend.user);
            console.log(_this.$store.state.token);
            if(data.code==100){
              if(data.extend.user.userName=='admin'){
                _this.$router.push({path:'/backcharge'})
              }else{
              _this.$router.push({path:'/', name: 'HelloWorld'})
              }
            }
          }
        })
      },
    }
  }
</script>
<style scoped>
  @import '../../static/css/login.css';
</style>
