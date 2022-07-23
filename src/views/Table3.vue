<template>
  <div class="table1">
    <div>表格合并一 —— Element UI 自带功能合并 </div>
    <el-table
    border
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 800px;margin: 20px;"
      @selection-change="handleSelectionChange"
    >
    <el-table-column
     type="selection"
     width="55">
   </el-table-column>
   <el-table-column label="ID" width="120">
     <template slot-scope="scope">{{ scope.row.id }}</template>
   </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="姓名" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.back" style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #ffff00;">{{ scope.row.name }}
            </div>
            <div v-else>{{ scope.row.name }}
            </div>
          </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
        <template slot-scope="scope">
          <div>
            {{ scope.row.address }}
            </div>
          </template>
      </el-table-column>
    </el-table>

    <div>表格合并二 —— 自定义表格列</div>
    <div class="table2">
    <el-table
    border
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 800px;margin: 20px;"
      @selection-change="handleSelectionChange"
    >
    <el-table-column
     type="selection"
     width="55">
   </el-table-column>
   <el-table-column label="ID" width="120">
     <template slot-scope="scope">{{ scope.row.id }}</template>
   </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="姓名" width="120">
        <template slot-scope="scope">
          <div>{{ scope.row.name }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" class-name="cell-control-type">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table1',
  components: {},
  data () {
    return {
      className: 'greenClass',
      tableData: [
        {
          id: '1',
          date: '2016-05-03',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 '
        },
        {
          id: '2',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 '
        },
        {
          id: '3',
          date: '2016-05-04',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 '
        },
        {
          id: '4',
          date: '2016-05-01',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 '
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style>
.cell-control-type {
  /* padding: 0 10px !important; */
  border: 2px solid red;
}

.table2 .el-table .cell {
  /* padding-right: 10px !important;
  padding-left: 10px !important; */
}
</style>
