<template>
  <div class="search">
    <el-form
      ref="searchFormRef"
      :model="searchForm"
      label-width="80px"
      size="large"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="部门名称" prop="name">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入部门名称"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="leader" label="部门领导">
            <el-input
              v-model="searchForm.leader"
              placeholder="请输入部门领导"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              range-separator="To"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              size="default"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!--  重置和搜索按钮  -->
    <div class="btns">
      <el-button size="large" icon="Refresh" @click="handleResetClick"
        >重置
      </el-button>
      <el-button
        size="large"
        icon="Search"
        type="primary"
        @click="handleQueryClick"
        >查询
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

const emit = defineEmits(['queryClick', 'resetClick'])

const searchForm = reactive({
  name: '',
  leader: '',
  createAt: '',
})
const searchFormRef = ref<InstanceType<typeof ElForm>>()
const handleResetClick = () => {
  searchFormRef.value!.resetFields()
  emit('resetClick')
}
const handleQueryClick = () => {
  emit('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }

  .btns {
    text-align: right;
    padding: 0 50px 10px 0;
  }
}
</style>
