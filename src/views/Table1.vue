<template>
  <div class="container">
    <el-table
      border
      ref="multipleTable"
      :data="tableData"
      @selection-change="handleSelectionChange"
      style="width: 500px"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <div
            v-if="scope.row.back"
            class="background-color-ffff00"
          >
            {{ scope.row.name }}
          </div>
          <div v-else>{{ scope.row.name }}</div>
        </template>
      </el-table-column>
      <el-table-column label="昵称">
        <template slot-scope="scope">
          <div
            v-if="scope.row.back2"
            class="background-color-ffff00"
          >
            {{ scope.row.nickName }}
          </div>
          <div v-else>{{ scope.row.nickName }}</div>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px; display: flex">
      <el-checkbox-group
        v-model="checkList"
        style="margin-right: 20px; margin-top: 10px"
      >
        <el-checkbox label="name">姓名</el-checkbox>
        <el-checkbox label="nickName">昵称</el-checkbox>
      </el-checkbox-group>
      <el-button @click="highLightData">高亮重复项</el-button>
      <el-button @click="clearHighLightData">清除高亮重复项</el-button>
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
          name: '黄忠',
          nickName: '周瑜'
        },
        {
          id: '6',
          date: '2016-05-08',
          name: '赵云',
          nickName: '子龙'
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    clearHighLightData () {
      this.tableData.forEach(v => {
        v.back = false
        v.back2 = false
      })
    },
    highLightData () {
      console.log('multipleSelection: ', this.multipleSelection)
      console.log('checkList：', this.checkList)

      if (this.multipleSelection.length < 2) {
        console.warn('先选择至少两行数据')
        return false
      }

      if (this.checkList.length === 0) {
        console.warn('请先选择一列')
        return false
      }

      // 获取重复项内容
      const arr = []
      const arr2 = []
      this.multipleSelection.forEach((v, k) => {
        this.checkList.forEach(v2 => {
          if (arr.indexOf(v[v2]) === -1) {
            arr.push(v[v2])
          } else {
            if (arr2.indexOf(v[v2]) === -1) {
              arr2.push(v[v2])
            }
          }
        })
      })
      console.log('arr --xxx ', arr)
      console.log('arr2 -- ', arr2)

      this.multipleSelection.forEach((v, k) => {
        // 设置重复项所在的数据行
        arr2.forEach(item => {
          this.checkList.forEach(v2 => {
            if (v2 === 'name') {
              if (item === v[v2]) {
                v.back = true
              }
            }

            if (v2 === 'nickName') {
              if (item === v[v2]) {
                v.back2 = true
              }
            }
          })
        })

        // 更新表格行数据为高亮数据
        const i = this.tableData.findIndex(item => item.id === v.id)
        this.tableData.splice(i, 1, v)
      })

      // 更新表格视图，实现高亮
      const highlightArr = JSON.parse(JSON.stringify(this.tableData))
      this.tableData = []
      this.tableData = highlightArr
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style>
.container {
  padding: 10px;
}
.background-color-ffff00 {
  background-color: #ffff00;
}
</style>
