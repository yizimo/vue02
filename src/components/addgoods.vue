<template>


    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12" >
          <h1 style="text-align:center">
            <br><br>
          </h1><br><br>
          <form style="text-align:center">
            <fieldset >
              <br>

              <p>
                <label style="padding-left: 25px;">商品名称</label>
                <input type="text" />
              </p><br>

              <label>商品初始价格</label>
              <input type="text" align="left"/><br />
              <br>

              <label>商品当前价格</label>
              <input type="text" align="left"/><br />
            <br>

              <label>商品图片路径</label>
              <input type="text" align="left" v-model="patchImgUrl" /><br />


              <el-upload
                class="avatar-uploader"
                action="http://192.168.43.159:8080/upload"
                name="multipartFile"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <br>
              <p>
                <label>商品所属分类</label>
                <input type="text" style="text-align:center"/>
              </p>
              <br><br>
              <button class="btn" type="submit">提交</button>

            </fieldset>
          </form>


        </div>
      </div>
    </div>


</template>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script>
  import uploadimg from "../page/uploadimg";
  export default {
    data() {
      return {
        imageUrl: '',
        patchImgUrl: '',
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        console.log(res.extend.fileID);
        console.log(file);
        this.patchImgUrl = this.$store.state.imgUrl + res.extend.fileID
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // findCategoryList: function (parentId, pageNum,categoryName) {
      //   var _this = this;
      //   _this.parentId = parentId;
      //   $.ajax({
      //     type: 'post',
      //     url: this.$store.state.httpUrl + "/admin/getcategory",
      //     beforeSend: function(xhr) {
      //       xhr.setRequestHeader("token", _this.token)
      //     },
    }
  }

</script>

<style scoped>

</style>
