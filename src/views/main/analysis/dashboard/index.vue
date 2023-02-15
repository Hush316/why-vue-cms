<script setup lang="ts">
import { ref } from 'vue'
let tags = ref([
  'blue aada aada',
  'redblue aada aada',
  'jjja blue aada aaa aada',
  'aada blue aada aada',
  'asda blue aada aada',
  'zvafs blue aada aada',
  'asfa blue aada aada',
])

const handleDelTagClick = (idx: number) => {
  console.log(idx)
  tags.value = tags.value.filter((item) => item !== tags.value[idx])
}
</script>
<template>
  <div class="dashboard">
    <div class="condition">
      <div class="title">
        <div>ITEM CONDITION</div>
        <div>+ADD ITEM</div>
      </div>
      <div class="tags">
        <template v-for="(item, idx) in tags" :key="idx">
          <div class="tag">
            {{ item }} <span @click="handleDelTagClick(idx)">x</span>
          </div>
        </template>
        <span class="total" v-if="tags.length !== 0"
          >(total{{ tags.length }})...</span
        >
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.condition {
  width: 600px;
  height: 100px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  .title {
    height: 50px;
    display: flex;
    padding: 15px 30px;
    justify-content: space-between;
  }
  .tags {
    .tag {
      display: inline-block;
      height: 20px;
      background-color: #6cf;
      padding: 2px 5px;
      border-radius: 5px;
      margin: 4px 5px;
    }
    .total {
      background-color: red;
    }
  }
}
</style>
