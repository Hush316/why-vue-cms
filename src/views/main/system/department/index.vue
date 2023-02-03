<script setup lang="ts">
import { computed } from 'vue'
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from '@/views/main/system/department/config/search.config'
import contentConfig from '@/views/main/system/department/config/content.config'
import modalConfig from '@/views/main/system/department/config/modal.config'
import useMainStore from '@/stores/main'
import usePageContent from '@/hooks/pages/usePageContent'
import usePageModal from '@/hooks/pages/usePageModal'

const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options?.push(...departments)
    }
  })
  return modalConfig
})

const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleCreateClick, handleEditClick } = usePageModal()
</script>
<template>
  <div class="department">
    <PageSearch
      :search-config="searchConfig"
      @queryClick="handleQueryClick"
      @resetClick="handleResetClick"
    ></PageSearch>
    <PageContent
      :content-config="contentConfig"
      ref="contentRef"
      @editUserClick="handleEditClick"
      @newUserClick="handleCreateClick"
    >
      <template #leader="scope">
        <span class="leader">
          {{ scope.row[scope.prop] }} {{ scope.age }}
        </span>
      </template>
    </PageContent>
    <PageModal :modal-config="modalConfigRef" ref="modalRef"></PageModal>
  </div>
</template>
<style lang="less" scoped>
.leader {
  color: red;
}
</style>
