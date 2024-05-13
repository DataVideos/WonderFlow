<template>
  <el-container class="gallery-view">
    <el-header>
      <PageHeader></PageHeader>
    </el-header>

    <el-main>
      <div style="width: 1000px; margin-left: auto; margin-right: auto;">
        <el-row>
          <h2>Gallery</h2>
        </el-row>

        <el-row>
          <div class="svg-group">
            <el-card v-for="project in presetCharts" :key="project.id"
                     class="svg-item clickable"
                     shadow="hover"
                     :body-style="{ padding: '0px'}"
                     @click.native="handleProjectClick(project)">
              <SvgPreviewer :project="project" :height="180" :width="290"></SvgPreviewer>
              <div class="item-text-container">
                <div>{{ project.label }}</div>
                <div style="color: gray; font-size: 0.9rem;">{{ project.chartType }}</div>
              </div>
            </el-card>
            <div v-for="i in [...Array((3 - (presetCharts.length % 3)) % 3).keys()]"
                 class="svg-item"
                 :key="'empty-block-' + i"></div>
          </div>
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
// use the svg previewer from editor
import SvgPreviewer from "@/components/editor/ProjSelPanel/SvgPreviewer";
import {mapState} from "vuex";

export default {
  name: 'GalleryView',
  components: {
    SvgPreviewer, PageFooter, PageHeader
  },
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('resource/queryAllSvg')
        .then(() => {
          this.$store.commit('resource/changeStaticSvgMapSign');
        })
  },
  methods: {
    handleProjectClick(project) {
      this.$router.push({
        path: 'example',
        query: {
          'example-index': this.projectList.indexOf(project)
        },
      })
    },
  },
  computed: {
    ...mapState('resource', {
      projectList: state => state.projectList,
    }),
    projectGroupMap() {
      const groupMap = new Map();
      groupMap.set('Single chart', []);
      groupMap.set('Custom chart', []);
      groupMap.set('Vega Line Chart', []);
      this.projectList.forEach(project => {
        const group = project.group;
        if (group === 'Single chart' || group === 'Custom chart' || group === 'Vega Line Chart') {
          groupMap.get(group).push(project);
        }
      });

      // console.log('>>>', groupMap);
      return groupMap;
    },
    presetCharts() {
      const list1 = this.projectGroupMap.get('Single chart') ?? [];
      const list2 = this.projectGroupMap.get('Vega Line Chart') ?? [];
      return list1.concat(...list2);
    },
    customCharts() {
      return this.projectGroupMap.get('Custom chart') ?? [];
    }
  }
}
</script>

<style scoped>
.gallery-view {
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
  font-size: 1.7em;
  font-weight: bold;
}

.svg-group {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.svg-item {
  height: 230px;
  width: 290px;
  margin-bottom: 20px;
}
.item-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40px;
  padding-top: 4px;
  border-top: 1px solid #eeeeee;
}

.clickable {
  cursor: pointer;
}
</style>
