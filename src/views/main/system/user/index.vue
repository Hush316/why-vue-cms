<script setup lang="ts">
import { ref } from 'vue'
import UserSearch from '@/views/main/system/user/cpns/user-search.vue'
import UserContent from '@/views/main/system/user/cpns/user-content.vue'
import UserModal from '@/views/main/system/user/cpns/user-modal.vue'

const contentRef = ref<InstanceType<typeof UserContent>>()
const handleQueryClick = (formData: any) => {
  contentRef.value?.fetchUsersList(formData)
}

const handleResetClick = () => {
  contentRef.value?.fetchUsersList()
}

const modalRef = ref<InstanceType<typeof UserModal>>()
const handleNewUserClick = () => {
  modalRef.value?.setModalVisible('create')
}

const handleEditUserClick = (row: any) => {
  modalRef.value?.setModalVisible('edit', row)
}
</script>
<template>
  <div>
    <UserSearch
      @queryClick="handleQueryClick"
      @resetClick="handleResetClick"
    ></UserSearch>
    <UserContent
      ref="contentRef"
      @newUserClick="handleNewUserClick"
      @editUserClick="handleEditUserClick"
    ></UserContent>
    <UserModal ref="modalRef"></UserModal>
  </div>
</template>
<style scoped lang="less"></style>
