<template>
  <el-container class="example-view">
    <el-header>
      <PageHeader></PageHeader>
    </el-header>

    <el-main>
      <div style="width: 1000px; margin-left: auto; margin-right: auto;">
        <el-row>
          <div style="width: 100%; display: flex;">
            <h1 class="page-text">{{ project.label }}</h1>
            <el-button class="back-button" type="text"
                       @click.native="clickBack">&lt; Back to gallery</el-button>
          </div>
          <span class="page-text-small">{{ project.chartType }}</span>
        </el-row>

        <el-row style="display: flex; flex-wrap: wrap; margin-top: 20px;">
          <SvgPreviewer :project="project" :height="320" :width="500"
                        style="border: 1px solid #cecece; border-radius: 4px;"></SvgPreviewer>
          <div>
            <!-- <el-button class="launch-button" round type="primary"
                       @click.native="clickLaunch" icon="">Open Demo</el-button> -->
          </div>
        </el-row>

        <el-row style="margin-top: 10px;">
          <h2 class="title-text">Link to original video</h2>
          <a class="content-text"
             :href="galleryInfo.link">{{ galleryInfo.videoName }}</a>
        </el-row>

        <el-row style="margin-top: 10px;">
          <h2 class="title-text">Narration</h2>
          <div class="content-text">{{ galleryInfo.transcript }}</div>
        </el-row>

        <el-row>
          <h2 class="title-text">Creation process</h2>
<!--          <video-->
<!--              class="local-video"-->
<!--              :src="`./data/video/V${projectIndex + 1}_1.mp4`"-->
<!--              controls-->
<!--              width="100%"-->
<!--              height="100%"></video>-->
          <iframe
              class="local-video"
              :src="getGoogleDriveVideoPreviewUrl(`V${projectIndex + 1}_1.mp4`)"
              width="100%"
              height="600px"></iframe>
        </el-row>

        <el-row>
          <h2 class="title-text">Final version</h2>
<!--          <video-->
<!--              class="local-video"-->
<!--              :src="`./data/video/V${projectIndex + 1}_2.mp4`"-->
<!--              controls-->
<!--              width="100%"-->
<!--              height="100%"></video>-->
          <iframe
              class="local-video"
              :src="getGoogleDriveVideoPreviewUrl(`V${projectIndex + 1}_2.mp4`)"
              width="100%"
              height="600px"></iframe>
        </el-row>
      </div>
    </el-main>

    <el-footer>
      <PageFooter></PageFooter>
    </el-footer>
  </el-container>
</template>

<script>

import PageHeader from "@/components/webpage/common/PageHeader";
import PageFooter from "@/components/webpage/common/PageFooter";
import {mapState} from "vuex";
import SvgPreviewer from "@/components/editor/ProjSelPanel/SvgPreviewer";
import {getGoogleDriveVideoPreviewUrl} from "@/utils/GoogleFileUtils";

export default {
  name: 'ExampleView',
  components: {
    SvgPreviewer,
    PageFooter, PageHeader
  },
  data() {
    return {
      projectIndex: -1,
      project: {},
    }
  },
  mounted() {
    let index = 1;
    try {
      index = parseInt(this.$route.query['example-index'] ?? ('' + index))
    } catch (e) {
      console.log(e)
    }
    this.projectIndex = index;
    this.project = this.projectList[this.projectIndex];

    this.$store.dispatch('resource/queryAllSvg')
        .then(() => {
          this.$store.commit('resource/changeStaticSvgMapSign');
        })
  },
  methods: {
    getGoogleDriveVideoPreviewUrl,
    clickBack() {
      this.$router.push('gallery')
    },
    clickLaunch() {
      this.$router.push({
        path: 'editor',
        query: {
          'example-index': this.projectIndex,
        }
      })
    }
  },
  watch: {
  },
  computed: {
    ...mapState('resource', {
      projectList: state => state.projectList,
      galleryList: state => state.galleryList,
    }),
    galleryInfo() {
      if (!this.project) {
        return {};
      }
      return this.galleryList.find(info => info.id === this.project.id) ?? {}
    }
  }
}
</script>

<style scoped>
.example-view {
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

.page-text {
  /*font-size: 1.7em;*/
  font-weight: bold;
}
.page-text-small {
  font-size: 1.3em;
  color: #9b9b9b;
}

.back-button {
  margin-left: auto;
  font-size: 1.07rem;
}

.launch-button {
  font-size: 1.05rem;
}

.title-text {
  font-size: 1.3rem;
  margin: 20px 0 10px 0;
}
.content-text {
  font-size: 1.1rem;
  color: #9b9b9b;
  margin-bottom: 10px;
}
</style>
