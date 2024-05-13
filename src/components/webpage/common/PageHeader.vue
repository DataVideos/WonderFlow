<template>
  <div class="page-header">
    <div style="width: 1000px; height: 100%; margin-left: auto; margin-right: auto;
                display: flex; justify-content: center; align-items: center;">
      <div class="header-text" style="user-select: none; cursor: pointer;"
            @click="clickHome"
            title="WonderFlow Homepage">WonderFlow</div>
      <div style="display: block; margin-left: auto;">
        <el-button type="text" class="header-button"
                   @click.native="clickHome">Home</el-button>
        <el-button type="text" class="header-button"
                   @click.native="clickGallery">Gallery</el-button>
        <!-- <el-button type="primary" round class="header-button"
                   @click.native="clickLaunch">Launch</el-button> -->
      </div>
    </div>
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
