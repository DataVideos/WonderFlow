<template>
  <div class="live-view">
    <div class="head-container">
      <span class="header-text" title="Live Chart">Live Chart</span>
    </div>
    <el-row class="main-container">
      <el-col class="upload-container">
        <div class="title-text-container">
          <span class="title-text">Data Upload</span>
        </div>
        <SelectColumnPanel/>
      </el-col>
      <el-col class="generation-container">
        <div class="title-text-container" style="background: #FEF7F2;">
          <span class="title-text" style="color: #F5590D;">Generation</span>
        </div>
        <el-button class="upload-btn" plain>Live</el-button>
      </el-col>
    </el-row>
  </div>
</template>



<script>
import SelectColumnPanel from "@/components/live/SelectColumnPanel.vue";
export default {
  name: "LiveView",
  components: {
    SelectColumnPanel,
  },
  data() {
    return {};
  },
  methods: {},
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

.live-view{
  height: 100%;
  width: 100%;
}


.head-container {
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
}

.main-container {
  height: calc(100% - 180px);
  width: 100%;
}

.upload-container, .generation-container {
  width: 30%;
  height: 90%;
  margin-top: 2.5%;
  margin-left: 4%;
  border: 4px solid #2D3974;
  border-radius: 10px;
}

.generation-container {
  border: 4px solid #F5590D;
  width: 60%;
  margin-left: 2%;
}
.header-text {
  color: #f55000;
  font: 400 50px "CarterOne", sans-serif;
  margin-top: 200px;
}

.title-text-container {
  width: 100%;
  background: #2D3974;
  border-radius: 5px;
  height: 48px;
  text-align: center;
}

.title-text {
  font-family: "Roboto";
  font-style: normal;
  font-size: 24px;
  color: #fff;
  line-height: 48px;
}

.data-btn {
  width: 67px;
  height: 23px;
}



</style>
