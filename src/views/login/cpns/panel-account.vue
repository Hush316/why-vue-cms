<script setup lang="ts">
import useLoginStore from '@/stores/login'
import type { AccountType } from '@/types/login'
import { localCache } from '@/utils/cache'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'

const loginStore = useLoginStore()
const labelPosition = ref('left')
const accountInfo = reactive<AccountType>({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? '',
})
const accountFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '必须输入帐号信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,10}$/,
      message: '必须是6~10数字或字母组成~',
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

const loginAction = (isKeep: boolean) => {
  accountFormRef.value?.validate((valid) => {
    if (valid) {
      // 验证成功发送登录请求
      const name = accountInfo.name,
        password = accountInfo.password
      loginStore.loginAccountAction({ name, password }).then(() => {
        // 记住密码的逻辑
        if (isKeep) {
          localCache.setCache('name', name)
          localCache.setCache('password', password)
          localCache.setCache('isKeep', isKeep)
        } else {
          localCache.removeCache('name')
          localCache.removeCache('password')
          localCache.removeCache('isKeep')
        }
      })
    } else {
      ElMessage.error('请输入正确的格式再登录')
    }
  })
}

defineExpose({
  loginAction,
})
</script>
<template>
  <div>
    <el-form
      ref="accountFormRef"
      :rules="rules"
      :label-position="labelPosition"
      label-width="60px"
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

<style scoped></style>
