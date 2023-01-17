<template>
  <div>
    <el-form
      ref="accountFormRef"
      :rules="rules"
      :label-position="labelPosition"
      label-width="100px"
      :model="accountInfo"
      style="max-width: 460px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountInfo.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          show-password
          type="password"
          v-model="accountInfo.password"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

const labelPosition = ref('left')
const accountInfo = reactive({
  name: '',
  password: '',
})
const accountFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '必须输入帐号信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20数字或字母组成~',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: '必须输入密码信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'blur',
    },
  ],
})

const loginAction = () => {
  console.log('login', accountInfo)
}

defineExpose({
  loginAction,
})
</script>
<style scoped></style>
