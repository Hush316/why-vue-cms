<script setup lang="ts">
import { ref, nextTick } from 'vue'
import pageContent from '@/components/page-content/page-content.vue'
import PageSearch from '@/components/page-search/page-search.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from '@/views/main/system/role/config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/pages/usePageContent'
import usePageModal from '@/hooks/pages/usePageModal'
import useMainStore from '@/stores/main'
import { storeToRefs } from 'pinia'
import type { ElTree } from 'element-plus'
import { mapMenuListToIds } from '@/utils/mapMenus'

const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleCreateClick, handleEditClick } =
  usePageModal(editCallback)

// 获取完整的菜单
const { entireMenus } = storeToRefs(useMainStore())
const otherInfo = ref({})
const handleElTreeCheck = (data1: any, data2: any) => {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}

const treeRef = ref<InstanceType<typeof ElTree>>()

function editCallback(row: any) {
  nextTick(() => {
    const menuIds = mapMenuListToIds(row.menuList)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
</script>
<template>
  <div>
    <PageSearch
      :search-config="searchConfig"
      @queryClick="handleQueryClick"
      @resetClick="handleResetClick"
    ></PageSearch>
    <pageContent
      :content-config="contentConfig"
      ref="contentRef"
      @editUserClick="handleEditClick"
      @newUserClick="handleCreateClick"
    ></pageContent>
    <pageModal
      :modal-config="modalConfig"
      :other-info="otherInfo"
      ref="modalRef"
    >
      <template #menuList>
        <el-tree
          :data="entireMenus"
          ref="treeRef"
          show-checkbox
          node-key="id"
          highlight-current
          @check="handleElTreeCheck"
          :props="{ children: 'children', label: 'name' }"
        ></el-tree>
      </template>
    </pageModal>
  </div>
</template>
<style lang="less" scoped></style>
