<template>
  <div class="login-panel">
    <h1 class="title">kabuto-cms</h1>
    <div class="tabs">
      <el-tabs v-model="activeName" stretch type="border-card">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><User /></el-icon>
              <span>账号登录</span>
            </div>
          </template>
          <PanelAccount ref="accountRef"></PanelAccount>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span class="label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <PanelPhone></PanelPhone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isKeep" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button
      type="primary"
      size="large"
      class="login-btn"
      @click="handlerLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ref } from 'vue'
import PanelAccount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'

const isKeep = ref<boolean>(localCache.getCache('isKeep') ?? false)
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PanelAccount>>()

const handlerLogin = () => {
  // 手机登录
  if (activeName.value === 'phone') {
    return
  }
  //账号登录
  accountRef.value?.loginAction(isKeep.value)
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
