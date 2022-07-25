<template>
  <div style="padding: 10px">
    <h2>表格合并</h2>
    <h4>1. Element UI 自带功能合并</h4>
    <el-table
      border
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 800px; margin: 10px 0"
      @selection-change="handleSelectionChange"
      :span-method="objectSpanMethod"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="ID" width="120">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column prop="date" label="日期" width="120"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址">
        <template slot-scope="scope">
          <div>
            {{ scope.row.address }}
          </div>
        </template>
      </el-table-column>
    </el-table>

    <h4>2. 自定义表格列</h4>

    <div class="table2">
      <el-table
        border
        ref="multipleTable"
        :data="tableData2"
        tooltip-effect="dark"
        style="width: 800px; margin: 10px 0"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
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
        <el-table-column
          label="地址"
          class-name="cell-control-type"
          label-class-name="cell-control-title"
        >
          <template slot-scope="scope">
            <div
              style=""
              v-for="(item, index) in scope.row.address"
              :key="index"
            >
              <div
                v-if="index === scope.row.address.length - 1"
                style="padding: 10px"
              >
                {{ item }}
              </div>
              <div
                v-else
                style="border-bottom: 1px solid #ebeef5; padding: 10px"
              >
                {{ item }}
              </div>
            </div>
          </template>
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
          address: '家庭地址：上海市普陀区金沙江路'
        },
        {
          id: '1',
          date: '2016-05-03',
          name: '张三',
          address: '公司地址：北京市朝阳区金台路'
        },
        {
          id: '2',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 '
        }
      ],
      multipleSelection: [],
      tableData2: [
        {
          id: '1',
          date: '2016-05-03',
          name: '张三',
          address: ['家庭地址：上海市普陀区金沙江路', '公司地址：北京市朝阳区金台路']
        },
        {
          id: '2',
          date: '2016-05-02',
          name: '王小虎',
          address: ['上海市普陀区金沙江路 1518 ']
        },
        {
          id: '3',
          date: '2016-05-02',
          name: '李四',
          address: ['广州市xxx区']
        }
      ]
    }
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(val)
    }
  }
}
</script>
<style>
.cell-control-type {
  padding: 0 0 !important;
}

.cell-control-title {
  margin-left: 10px;
}

.cell-control-type .cell {
  padding: 0 0 !important;
}

</style>
