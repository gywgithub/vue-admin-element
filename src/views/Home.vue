<template>
  <div class="home">
    <router-link  to='/table1' > table1 高亮重复项</router-link><br>
    <router-link  to='/table2' > table2 表格行拖动，上下移</router-link><br>
    <router-link  to='/table3' > table3 表格合并</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
    }
  }
}
</script>
<style>
</style>
