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
        <div class="center-box ">

          <div class="box-hd box-hd-tabs">
            <a  class="item" style="text-align:center">手机找回密码</a>
          </div>
          <div class="tab-con">
            <form action="" method="">
              <label class="txtin-box">
                <input class="txtin" type="text" name="" placeholder="手机" />
              </label>
              <label class="txtin-box txtin-box-code">
                <input class="txtin" type="text" name="" placeholder="短信验证码" />
                <a href="" class="get-yzm">获取验证码</a>
              </label>
              <label class="txtin-box txtin-box-code">
                <input class="txtin" type="text" name="" placeholder="验证码" />
                <img class="yzm" src="" alt="" />
              </label>
              <a class="tj"><router-link to="/reset_pwd">完&ensp;成</router-link></a>

              <!--<a class="tj" href="reset.pwd.html">完&ensp;成</a>-->
               <!--<input class="tj" type="submit" value="完&ensp;成" />-->
            </form>
          </div>
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
  import '../../static/js/icheck/style.css'
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/css/login.css'
  export default {

  }
</script>
