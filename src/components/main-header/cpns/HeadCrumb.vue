<script setup lang="ts">
import useLoginStore from '@/stores/login'
import { mapPathToBreadcrumbs } from '@/utils/mapMenus'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userMenus = useLoginStore().userMenus
const breadCrumbs = computed(() => {
  return mapPathToBreadcrumbs(route.path, userMenus)
})
</script>
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadCrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<style scoped></style>
