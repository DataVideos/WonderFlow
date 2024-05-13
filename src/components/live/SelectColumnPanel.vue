<template>
    <div class="select-container">
      <span>Select Columns</span>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column
        type="index"
        width="50">
        </el-table-column>
        <el-table-column
        property="date"
        label="日期"
        width="120">
        </el-table-column>
        <el-table-column
        property="name"
        label="姓名"
        width="120">
        </el-table-column>
        <el-table-column
        property="address"
        label="地址">
        </el-table-column>
        </el-table>
      <el-button class="upload-btn" plain>Live</el-button>
    </div>
  </template>
  
  <script>
    // import {mapState} from "vuex";
  
    export default {
      name: 'SelectColumnPanel',
      data() {
        return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
      },
      methods: {
      },
      mounted() {
      },
      watch: {
      },
      computed: {
      }
    }
  </script>
  
  <style scoped>
  .svg-container-master {
    user-select: none;
    border: 1px solid rgb(215, 216, 221);
  }
  </style>
  