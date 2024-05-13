<template>
  <div class="upload-view">
    <el-header class="head-container">
      <span class="header-text" title="Live Chart">Live Chart</span>
    </el-header>
    <el-main class="main-container">
      <el-col class="upload">
        <el-upload
          class="upload-data"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button class="upload-btn" plain
            >Data Upload</el-button
          >
        </el-upload>
        <span class="main-text"
          >Don't have data? Try any of the files below.</span
        >
        <el-row>
          <el-button size="mini" class="data-btn" @click.native="clickLive">a.csv</el-button>
          <el-button size="mini" class="data-btn">b.csv</el-button>
          <el-button size="mini" class="data-btn">c.csv</el-button>
          <el-button size="mini" class="data-btn">d.csv</el-button>
        </el-row>
      </el-col>
    </el-main>
  </div>
</template>



<script>
export default {
  name: "UploadView",
  components: {},
  data() {
    return {};
  },
  methods: {
    clickLive() {
      console.log(this.$route)
      if (this.$route.path === '/live') {
        return;
      }
      this.$router.push('live')
    },
  },
  mounted() {
  },
  computed: {},
};
</script>

<style scoped>
@font-face {
  font-family: "CarterOne";
  src: url("~@/assets/fonts/carter_one.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

.head-container {
  min-height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
}

.header-text {
  color: #f55000;
  font: 400 50px "CarterOne", sans-serif;
}

.upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 50px; */
}

.upload-data {
  display: flex;
  justify-content: center;
}
.upload-btn {
  width: 300px;
  height: 49px;
  display: flex;
  justify-content: center;
  background: #fef7f2;
  border: 3px solid #2d3974;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #15214b;
  align-items: center;
}

.main-text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #6c6c6c;
  margin-top: 20px;
  margin-bottom: 10px;
}

.data-btn {
  width: 67px;
}



</style>
