<template>
  <div class="page-header">
    <el-row :gutter="5" style="height: 100%;" type="flex" align="middle">
      <el-col :span="3" :offset="6">
        <span class="header-text" style="user-select: none; cursor: pointer"
              @click="clickHome"
              title="WonderFlow Homepage">WonderFlow</span>
      </el-col>

      <el-col :span="8" :offset="7">
        <el-button type="text" class="header-button"
                   @click.native="clickHome">Home</el-button>
        <el-button type="text" class="header-button"
                   @click.native="clickGallery">Gallery</el-button>
        <!-- <el-button type="primary" round class="header-button"
                   @click.native="clickLaunch">Launch</el-button> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'PageHeader',
  components: {},
  data() {
    return {}
  },
  methods: {
    clickHome() {
      console.log(this.$route)
      if (this.$route.path === '/homepage') {
        return;
      }
      this.$router.push('homepage')
    },
    clickGallery() {
      if (this.$route.path === '/gallery') {
        return;
      }
      this.$router.push('gallery')
    },
    clickLaunch() {
      if (this.$route.path === '/editor') {
        return;
      }
      this.$router.push('editor')
    },
  },
  mounted() {
  },
  computed: {}
}
</script>

<style scoped>
.page-header {
  width: 100%;
  height: 100%;
  background: white;
}

.header-text {
  font-size: 1.7em;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  color: #409eff;
}

.header-button {
  font-size: 1.07rem;
}
</style>
