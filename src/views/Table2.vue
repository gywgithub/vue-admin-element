<template>
  <div style="padding: 12px">
    <div>
      <el-button @click="moveUp" type="primary" size="small">上移</el-button>
      <el-button @click="moveDown" type="primary" size="small">下移</el-button>
    </div>
    <el-table-draggable>
      <el-table
        row-key="id"
        ref="table2"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="ID" width="60">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </el-table-draggable>
  </div>
</template>

<script>
import ElTableDraggable from 'el-table-draggable'
export default {
  name: 'Table2',
  components: {
    ElTableDraggable
  },
  data () {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 3,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 4,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 5,
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 6,
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 7,
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    moveUp () {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请至少选择一条数据进行操作。',
          type: 'warning'
        })
        return false
      }

      if (this.tableData.length === this.multipleSelection.length) {
        this.$message({
          message: '不能选择全部数据上移。',
          type: 'warning'
        })
        return false
      }

      // confirm slotIndex
      let slotIndex = -1
      this.tableData.forEach((item, index) => {
        this.multipleSelection.forEach((v, k) => {
          if (item.id === v.id) {
            if (slotIndex === -1) {
              slotIndex = index
            } else {
              if (slotIndex > index) {
                slotIndex = index
              }
            }
          }
        })
      })

      // delete selectdata
      this.multipleSelection.forEach((item, index) => {
        this.tableData.forEach((v, k) => {
          if (item.id === v.id) {
            this.tableData.splice(k, 1)
          }
        })
      })

      if (slotIndex > 0) {
        slotIndex = slotIndex - 1
      } else {
        slotIndex = 0
      }
      this.tableData.splice(slotIndex, 0, this.multipleSelection)
      this.tableData = this.tableData.flat()

      const selectionTableData = this.multipleSelection
      setTimeout(async () => {
        await this.$nextTick()
        selectionTableData.forEach(row => {
          this.$refs.table2.toggleRowSelection(row)
        })
      }, 10)
    },
    moveDown () {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请至少选择一条数据进行操作。',
          type: 'warning'
        })
        return false
      }

      if (this.tableData.length === this.multipleSelection.length) {
        this.$message({
          message: '不能选择全部数据下移。',
          type: 'warning'
        })
        return false
      }

      // confirm slotIndex
      let slotIndex = -1
      this.tableData.forEach((item, index) => {
        if (this.multipleSelection.length > 1) {
          this.multipleSelection.forEach((v, k) => {
            if (item.id === v.id) {
              if (slotIndex === -1) {
                slotIndex = index
              } else {
                if (slotIndex < index) {
                  slotIndex = index
                }
              }
            }
          })
        } else {
          this.multipleSelection.forEach((v, k) => {
            if (item.id === v.id) {
              slotIndex = index + 1
            }
          })
        }
      })

      // delete selectedata
      this.multipleSelection.forEach((item, index) => {
        this.tableData.forEach((v, k) => {
          if (item.id === v.id) {
            this.tableData.splice(k, 1)
          }
        })
      })

      if (slotIndex > 0) {
        // slotIndex = slotIndex
      } else {
        slotIndex = 1
      }
      this.tableData.splice(slotIndex, 0, this.multipleSelection)
      this.tableData = this.tableData.flat()

      const selectionTableData = this.multipleSelection
      setTimeout(async () => {
        await this.$nextTick()
        selectionTableData.forEach(row => {
          this.$refs.table2.toggleRowSelection(row)
        })
      }, 10)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>
<style>
</style>
