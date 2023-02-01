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
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="realName" label="真实姓名">
            <el-input
              v-model="searchForm.realName"
              placeholder="请输入真实姓名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码" prop="cellPhone">
            <el-input
              v-model="searchForm.cellPhone"
              placeholder="请输入电话号码"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select
              v-model="searchForm.enable"
              placeholder="请选择查询的状态"
              style="width: 100%"
            >
              <el-option label="启用" :value="0"></el-option>
              <el-option label="禁用" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createTime">
            <el-date-picker
              v-model="searchForm.createTime"
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
        >搜索
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

const searchForm = reactive({
  name: '',
  realName: '',
  cellPhone: '',
  enable: 0,
  createTime: [],
})
const searchFormRef = ref<InstanceType<typeof ElForm>>()
const handleResetClick = () => {
  searchFormRef.value?.resetFields()
}
const handleQueryClick = () => {
  console.log('search')
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
