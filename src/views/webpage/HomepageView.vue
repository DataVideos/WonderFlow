<template>
  <el-container class="homepage-view">
    <el-header>
      <PageHeader></PageHeader>
    </el-header>

    <el-main>
      <el-col :span="12" :offset="6">
        <el-row style="display: flex; justify-content: center; align-items: center;">
          <h1 class="title-text">WonderFlow: Easy Creation of Narration-Enriched Data Videos</h1>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <h4 style="text-align: center;">
            <p>
              <span>Yun Wang<sup>* 1</sup></span>&nbsp;&nbsp;
              <span>Leixian Shen<sup>* 2</sup></span>&nbsp;&nbsp;
              <span>Zhengxin You<sup>3</sup></span>&nbsp;&nbsp;
              <span>Xinhuan Shu<sup>4</sup></span>&nbsp;&nbsp;
              <span>Bongshin Lee<sup>5</sup></span>&nbsp;&nbsp;
              <br>
              <span>John Thompson<sup>6</sup></span>&nbsp;&nbsp;
              <span>Haidong Zhang<sup>1</sup></span>&nbsp;&nbsp;
              <span>Dongmei Zhang<sup>1</sup></span>
            </p>
            <p>
              <span><sup>1</sup>Microsoft Research</span>&nbsp;&nbsp;
              <span><sup>2</sup>The Hong Kong University of Science and Technology</span>&nbsp;&nbsp;
              <br>
              <span><sup>3</sup>The Hong Kong Polytechnic University</span>&nbsp;&nbsp;
              <span><sup>4</sup>Newcastle University</span>&nbsp;&nbsp;
              <span><sup>5</sup>Yonsei University</span>&nbsp;&nbsp;
              <span><sup>6</sup>AutoDesk</span>
            </p>
            <p><sup>*</sup>Equal contribution</p>
            <p>IEEE Transactions on Visualization and Computer Graphics 2024</p>
          </h4>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <video
              class="local-video"
              style="box-shadow: 0 0 5px #d7d7d7;"
              :src="'./data/video/WonderFlow_video.mp4'"
              controls
              width="100%"
              height="100%"></video>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <h3 style="text-align: center;">Abstract</h3>
          <p>Creating an animated data video with audio narration is a time-consuming and complex task that requires expertise. It involves designing complex animations, turning written scripts into audio narrations, and synchronizing visual changes with the narrations. This paper presents WonderFlow, an interactive authoring tool, that facilitates narration-centric design of animated data videos. WonderFlow allows authors to easily specify semantic links between text and the corresponding chart elements. Then it automatically generates audio narration by leveraging text-to-speech techniques and aligns the narration with an animation. WonderFlow provides a structure-aware animation library designed to ease chart animation creation, enabling authors to apply pre-designed animation effects to common visualization components. Additionally, authors can preview and refine their data videos within the same system, without having to switch between different creation tools. A series of evaluation results confirmed that WonderFlow is easy to use and simplifies the creation of data videos with narration-animation interplay.</p>
        </el-row>
      </el-col>
    </el-main>

    <el-footer>
      <PageFooter></PageFooter>
    </el-footer>
  </el-container>
</template>

<script>

import PageHeader from "@/components/webpage/common/PageHeader";
import PageFooter from "@/components/webpage/common/PageFooter";

export default {
  name: 'HomepageView',
  components: {PageFooter, PageHeader},
  data() {
    return {}
  },
  methods: {},
  mounted() {
  },
  computed: {}
}
</script>

<style scoped>
.homepage-view  {
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
header {
  border-bottom: 1px solid #d7d7d7;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 999;
}
main {
  margin-top: 60px;
  padding-bottom: 60px;
  box-sizing: border-box;
  flex: 1 0 auto;
}
footer {
  height: 60px;
  border-top: 1px solid #d7d7d7;
  flex: 0 0 auto;
}

.title-text {
  margin: 10px 0 30px 0;
}
</style>
