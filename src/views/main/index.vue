<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '260px'">
        <MainMenu :isCollapse="isCollapse"></MainMenu>
      </el-aside>
      <el-container>
        <el-header>
          <MainHeader @fold-change="handleFoldChange"></MainHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// import { LOGIN_TOKEN } from '@/global/constants'
// import { localCache } from '@/utils/cache'
// import { useRouter } from 'vue-router'

// const router = useRouter()

// const handleExitClick = () => {
//   localCache.removeCache(LOGIN_TOKEN)
//   router.push('/login')
// }

import { ref } from 'vue'
import MainHeader from '@/components/main-header/index.vue'
import MainMenu from '@/components/main-menu/index.vue'

// 菜单折叠
const isCollapse = ref(false)
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>
<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
