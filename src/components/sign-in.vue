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
    <div class="main-wrap">
      <div class="wrapper">
        <div class="center-box">
          <form action="" method="">
            <div class="box-hd">
              <span class="tit">用户注册</span>
              <router-link to="/login">账号登录</router-link>
            </div>
            <label class="txtin-box">
              <input class="txtin" type="text" v-model="userName" name="" placeholder="用户名" />
            </label>
            <label class="txtin-box">
              <input class="txtin" type="text"  v-model="userPhone" ref="userPhone" name="" placeholder="手机" />
            </label>
            <label class="txtin-box txtin-box-code">
              <input class="txtin" type="text"v-model="userCode" name="" placeholder="手机" />
              <input type="submit" @click="getMsg"class="get-yzm" value="获取验证码">
            </label>
            <label class="txtin-box">
              <input class="txtin" type="password"  v-model="userPassword" name="" placeholder="输入密码" />
            </label>
            <label class="txtin-box">
              <input class="txtin" type="password" v-model="userRepassword"   name="" placeholder="确认密码" />
            </label>
            <div class="clearfix tool">
              <label class="check"><input type="checkbox" name="" id="" />我已阅读并同意cc商城任何《<a href="">服务协议</a>》</label>
            </div>
            <input class="tj" type="submit"  @click="getResiger" value="注册" />
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
  import '../../static/css/login.css'
  import '../../static/js/icheck/style.css'
  export default {
    data() {
      return {
        userName: '',
        userPhone:'',
        userCode:'',
        userPassword:'',
        userRepassword:''
      }

    },
    methods:{
      getMsg: function() {
        var _this = this;
        $.ajax({
          type: 'post',
          url: this.$store.state.httpUrl + '/register/phone',
          data:{
            'phoneNum': this.userPhone
          },
          success: function (data) {
            console.log(data.extend);
            console.log(_this.userPhone)
          }
        })
      },
      getResiger: function() {
        if(this.userRepassword!=this.userPassword){
          alert('两次密码不一致，请重新输入')
        }else {
          var _this = this;
          $.ajax({
            type: 'post',
            url: this.$store.state.httpUrl + '/register/user',
            data: {
              'userName': this.userName,
              'userPassword': this.userPassword,
              'userPhone': this.userPhone,
              'code':this.userCode
            },
            success: function (data) {
              console.log(data.code);
              if(data.code==100){
                _this.$router.push({path:'/login'})
              }else{
                alert('注册失败')
              }

            }
          })
        }
        },

    }
  }

</script>
