<script setup lang="ts">
import PageSearch from '@/views/main/system/department/cpns/page-search.vue'
import PageContent from '@/views/main/system/department/cpns/page-content.vue'
import { ref } from 'vue'
import PageModal from '@/views/main/system/department/cpns/page-modal.vue'

const contentRef = ref<InstanceType<typeof PageContent>>()
const handleQueryClick = (queryInfo: any) => {
  console.log(queryInfo)
  contentRef.value?.fetchPageList(queryInfo)
}
const handleResetClick = () => {
  contentRef.value?.fetchPageList()
}

const modalRef = ref<InstanceType<typeof PageModal>>()
const handleCreateClick = () => {
  modalRef.value?.setModalVisible('create')
}
const handleEditClick = (row: any) => {
  modalRef.value?.setModalVisible('edit', row)
}
</script>
<template>
  <div class="department">
    <PageSearch
      @queryClick="handleQueryClick"
      @resetClick="handleResetClick"
    ></PageSearch>
    <PageContent
      ref="contentRef"
      @editUserClick="handleEditClick"
      @newUserClick="handleCreateClick"
    ></PageContent>
    <PageModal ref="modalRef"></PageModal>
  </div>
</template>
<style lang="less" scoped></style>
