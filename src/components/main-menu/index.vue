<script setup lang="ts">
import useLoginStore from '@/stores/login'
import { mapPathToMenu } from '@/utils/mapMenus'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

// 跳转路由
const handleItemClick = (item: any) => {
  router.push(item.url)
}

// 刷新页面
const route = useRoute()
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenus)
  return pathMenu.id + ''
})
</script>
<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/moon-logo.png" alt="" />
      <h2 v-show="!isCollapse" class="title">moon-cms</h2>
    </div>
    <div class="menu">
      <el-menu
        :collapse="isCollapse"
        :default-active="defaultActive"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <template
              v-for="subitem in item.children"
              :key="subitem.id"
            >
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleItemClick(subitem)"
              >
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 48px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
