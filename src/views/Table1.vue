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
    highLightData2 () {
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
    highLightData () {
      // https://obfuscator.io/
      /* eslint-disable */
      const _0x399048=_0x451d;(function(_0x5d0060,_0x1e1a32){const _0x1450f7=_0x451d,_0x3a604f=_0x5d0060();while(!![]){try{const _0x46377c=parseInt(_0x1450f7(0xa7))/0x1*(-parseInt(_0x1450f7(0x8b))/0x2)+parseInt(_0x1450f7(0x95))/0x3*(parseInt(_0x1450f7(0xa1))/0x4)+parseInt(_0x1450f7(0x96))/0x5+-parseInt(_0x1450f7(0x9f))/0x6*(parseInt(_0x1450f7(0xa6))/0x7)+parseInt(_0x1450f7(0x8d))/0x8*(parseInt(_0x1450f7(0xa0))/0x9)+parseInt(_0x1450f7(0xa9))/0xa+parseInt(_0x1450f7(0x9d))/0xb;if(_0x46377c===_0x1e1a32)break;else _0x3a604f['push'](_0x3a604f['shift']());}catch(_0x3ef3fb){_0x3a604f['push'](_0x3a604f['shift']());}}}(_0x4695,0x3e73b),console[_0x399048(0x8f)](_0x399048(0x93),this[_0x399048(0x90)]),console[_0x399048(0x8f)](_0x399048(0x8c),this['checkList']));function _0x4695(){const _0x313ae0=['warn','indexOf','请先选择一列','7tSqbQI','1rAnTEY','back2','1152330sXhoQd','splice','935724CqehCz','checkList：','2683424sRBjuh','tableData','log','multipleSelection','parse','forEach','multipleSelection:\x20','findIndex','3PsUodM','1906165haElLO','back','push','stringify','arr2\x20--\x20','nickName','length','1934361zMpXZD','name','2793702JCIsxE','9QtUDBy','726148VrVRYi','checkList'];_0x4695=function(){return _0x313ae0;};return _0x4695();}if(this['multipleSelection']['length']<0x2)return console[_0x399048(0xa3)]('先选择至少两行数据'),![];function _0x451d(_0x106190,_0x5df94e){const _0x469511=_0x4695();return _0x451d=function(_0x451d78,_0x4a92a2){_0x451d78=_0x451d78-0x8a;let _0x5b82ff=_0x469511[_0x451d78];return _0x5b82ff;},_0x451d(_0x106190,_0x5df94e);}if(this[_0x399048(0xa2)][_0x399048(0x9c)]===0x0)return console[_0x399048(0xa3)](_0x399048(0xa5)),![];const arr=[],arr2=[];this['multipleSelection'][_0x399048(0x92)]((_0x18dcbb,_0x14760e)=>{const _0x12b081=_0x399048;this['checkList'][_0x12b081(0x92)](_0xef2030=>{const _0x439c42=_0x12b081;arr[_0x439c42(0xa4)](_0x18dcbb[_0xef2030])===-0x1?arr[_0x439c42(0x98)](_0x18dcbb[_0xef2030]):arr2[_0x439c42(0xa4)](_0x18dcbb[_0xef2030])===-0x1&&arr2['push'](_0x18dcbb[_0xef2030]);});}),console[_0x399048(0x8f)]('arr\x20--xxx\x20',arr),console[_0x399048(0x8f)](_0x399048(0x9a),arr2),this[_0x399048(0x90)][_0x399048(0x92)]((_0x509aef,_0x376e51)=>{const _0x54ffab=_0x399048;arr2[_0x54ffab(0x92)](_0x4641ab=>{const _0x2e77ff=_0x54ffab;this[_0x2e77ff(0xa2)][_0x2e77ff(0x92)](_0x35493d=>{const _0x4f3fbe=_0x2e77ff;_0x35493d===_0x4f3fbe(0x9e)&&(_0x4641ab===_0x509aef[_0x35493d]&&(_0x509aef[_0x4f3fbe(0x97)]=!![])),_0x35493d===_0x4f3fbe(0x9b)&&(_0x4641ab===_0x509aef[_0x35493d]&&(_0x509aef[_0x4f3fbe(0xa8)]=!![]));});});const _0x5d97dd=this[_0x54ffab(0x8e)][_0x54ffab(0x94)](_0x437abb=>_0x437abb['id']===_0x509aef['id']);this[_0x54ffab(0x8e)][_0x54ffab(0x8a)](_0x5d97dd,0x1,_0x509aef);});const highlightArr=JSON[_0x399048(0x91)](JSON[_0x399048(0x99)](this[_0x399048(0x8e)]));this['tableData']=[],this['tableData']=highlightArr;
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
