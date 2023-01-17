<template>
  <div>
    <el-form
      ref="phoneFormRef"
      :rules="rules"
      :label-position="labelPosition"
      label-width="100px"
      :model="phoneInfo"
      style="max-width: 460px"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneInfo.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password type="password" v-model="phoneInfo.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

const labelPosition = ref('left')
const phoneInfo = reactive({
  phone: '',
  password: '',
})
const phoneFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { min: 3, max: 5, message: '长度应在3-5位之间', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
    },
  ],
})
</script>
<style scoped></style>
