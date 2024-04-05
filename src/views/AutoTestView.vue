<template>
  <div class="root">
<!--    <el-upload-->
<!--        class="upload-demo"-->
<!--        drag-->
<!--        action="http://localhost:8081/admin/"-->
<!--        multiple>-->
<!--      <i class="el-icon-upload"></i>-->
<!--      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
<!--      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--    </el-upload>-->

    <el-upload
        class="upload-demo"
        :action="base2"
        :headers="upHeaders"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="1"
        :before-upload="beforeUpload"
        :on-exceed="handleExceed"
        :on-success="handleSuccess"
        :on-error="handleError"
        :file-list="fileList">
      <i class="el-icon-upload"><span> 导入文件</span></i>
    </el-upload>


  </div>
</template>

<script>
export default {
  name: "AutoTestView",
  data(){
    return {
      base2:'https://img.pg-code-go.com/test/',
      upHeaders:'image/png'
    }
  },
  methods: {
    submitUpload () {
      const param = new FormData();
      this.fileList.forEach(
          (val, index) => {
            param.append("file", val.raw);
          }
      );
      axios.post("https://img.pg-code-go.com/test/", param)
          .then(responce => {
            console.log(responce);
            let data = responce.data
            //上传成功的处理
            if (data.code === "0") {
              this.dialogTableVisible = true
              this.$message.info('上传成功！')
              this.uploadSuccessList = data.data
              console.log(this.uploadSuccessList);
            } else { //上传失败的处理
              this.$message.error(data.msg)
            }
          })
          .catch(error => {
            console.log(error.responce.data.error.message);
          });
    },
    //模板文件下载
    downloadTemplate() {
      // window.open("./template.xlsx", "_blank")
      window.open("./template.zip", "_blank")
    },
    // 删除文件钩子
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    // 已上传文件钩子
    handlePreview(file) {
      console.log(file)
    },
    // 文件上传前的钩子(这里可以对文件上传时的后缀进行限制)
    beforeUpload(file) {
      var FileExt = file.name.replace(/.+\./, '')
      if (['json', 'JSON'].indexOf(FileExt) === -1) {
        this.$message({
          type: 'warning',
          message: '请上传后缀名为 json 的文件！',
        })
        return false
      }
    },
    // 上传文件个数限制钩子
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    // 删除文件前的钩子
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    // 上传失败钩子
    handleError(err, file, fileList) {
      // this.$message.error(err.errormsg)
      this.$message.error("上传失败")
    },
    // 上传成功钩子(在这里可以处理上传成功后端返回的数据)
    handleSuccess(rep, file, fileList) {
      console.log(req)
    }

  }
}
</script>

<style scoped>
.root{
  height: 670px;
  width: 1200px;
  background-color: #fff;
}
</style>
