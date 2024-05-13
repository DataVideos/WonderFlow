<template>
  <div class="page-footer">
    <el-row :gutter="5" style="height: 100%;" type="flex" align="middle">
      <el-col :span="3" :offset="6">
        <span class="footer-text" style="user-select: none">WonderFlow</span>
      </el-col>

      <el-col :span="12" :offset="3">
        Make it easy to create narration-enriched data videos
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'PageFooter',
  components: {},
  data() {
    return {}
  },
  methods: {
  },
  mounted() {
  },
  computed: {}
}
</script>

<style scoped>
.page-footer {
  width: 100%;
  height: 100%;
}

.footer-text {
  font-size: 1.7em;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  color: #9b9b9b;
}
</style>
