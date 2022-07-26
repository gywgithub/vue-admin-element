<template>
  <div class="table1">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      :cell-style="cellStyle"
      :row-style="rowStyle"
      style="width: 1000px"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="姓名" width="120">
        <template slot-scope="scope">
          <div
            v-if="scope.row.back"
            style="
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              background-color: #ffff00;
            "
          >
            {{ scope.row.name }}
          </div>
          <div v-else>{{ scope.row.name }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="nickName" label="昵称" show-overflow-tooltip>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px;display:flex;">
      <el-checkbox-group v-model="checkList" style="margin-right: 20px;margin-top: 10px;">
        <el-checkbox label="姓名"></el-checkbox>
        <el-checkbox label="昵称"></el-checkbox>
      </el-checkbox-group>
      <el-button @click="highLightData">高亮重复项</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table1',
  components: {},
  data () {
    return {
      checkList: [],
      tableData: [
        {
          id: '1',
          date: '2016-05-03',
          name: '张三',
          nickName: '李四'
        },
        {
          id: '2',
          date: '2016-05-02',
          name: '李四',
          nickName: '曹操'
        },
        {
          id: '3',
          date: '2016-05-04',
          name: '张三',
          nickName: '赵云'
        },
        {
          id: '4',
          date: '2016-05-01',
          name: '张三',
          nickName: '孟德'
        },
        {
          id: '5',
          date: '2016-05-08',
          name: '赵云',
          nickName: '子龙'
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    highLightData () {
      console.log('multipleSelection: ', this.multipleSelection)

      if (this.multipleSelection.length < 2) {
        console.warn('先选择至少两行数据')
        return false
      }

      // 获取选中行的索引
      const arrIndex = []
      this.tableData.forEach((item, index) => {
        this.multipleSelection.forEach((v, k) => {
          if (item.id === v.id) {
            // arrIndex.push(index)
            const obj = {
              id: v.id,
              index: index
            }
            arrIndex.push(obj)
          }
        })
      })
      console.log(arrIndex)
      console.log('---')

      // 获取

      // 获取重复项内容
      const arr = []
      const arr2 = []
      this.multipleSelection.forEach((v, k) => {
        if (arr.indexOf(v.name) === -1) {
          arr.push(v.name)
        } else {
          if (arr2.indexOf(v.name) === -1) {
            arr2.push(v.name)
          }
        }
      })
      // console.log('arr1: ', arr)
      // console.log('===')
      console.log('arr2: ', arr2)

      // 获取重复项选中数据的 id
      const arr3 = []
      this.multipleSelection.forEach((v, k) => {
        arr2.forEach(item => {
          if (item === v.name) {
            arr3.push(v.id)
          }
        })
      })

      console.log('arr3: ', arr3)

      // 根据重复项数据id得到对应的表格行索引
      const arr4 = []
      arr3.forEach(item => {
        arrIndex.forEach(v => {
          if (item === v.id) {
            arr4.push(v.index)
          }
        })
      })
      console.log('arr4: ', arr4)

      // 基于获取的重复项数据表格行索引和固定列索引 2，设置表格单元格样式
      // this.cellStyle(this.tableData)
      console.log('===')
      this.tableData.forEach((value, index) => {
        if (arr4.indexOf(index) !== -1) {
          value.back = true
        }
      })

      console.log('update table data: ', this.tableData)
      const arr5 = JSON.parse(JSON.stringify(this.tableData))
      this.tableData = []
      setTimeout(() => {
        this.tableData = arr5
      }, 0)
    },
    rowStyle ({ row, rowIndex }) {
    },
    cellStyle ({ row, column, rowIndex, columnIndex }) {
      console.log(row)
      console.log(column)
      console.log('rowIndex: ', rowIndex)
      if (columnIndex === 2) {
        // if (row.name === '张三') {
        //   return { background: 'red', color: 'blue' }
        // }
      }
      if (columnIndex === 3) {
        if (row.sex === '男') {
          return { background: 'orange' }
        }
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log('handleSelectionChange: ')
      console.dir(val)
    }
  }
}
</script>
<style>
.table1 {
  padding: 10px;
}
</style>
