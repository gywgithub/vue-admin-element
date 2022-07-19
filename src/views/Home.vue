<template>
  <div class="home">
    <router-link  to='/table1' > table1 高亮重复项</router-link><br>
    <router-link  to='/table2' > table2 表格行拖动，上下移</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      className: 'greenClass',
      tableData: [
        {
          id: '1',
          date: '2016-05-03',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '男'

        },
        {
          id: '2',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '女'
        },
        {
          id: '3',
          date: '2016-05-04',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '男'
        },
        {
          id: '4',
          date: '2016-05-01',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: ''
        },
        {
          id: '5',
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '人妖'
        },
        {
          id: '6',
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: '7',
          date: '2016-05-09',
          name: '李四',
          address: '北京市东城区'
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    handleSelect (val, row) {
      // console.log('handleSelect: ')
      // console.log(val)
      // console.log(row)
    },
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
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
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
.greenClass {
  /* background: 'green'; */
  color: blue !important;
}
</style>
