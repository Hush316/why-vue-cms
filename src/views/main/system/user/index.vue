<script setup lang="ts">
import { ref } from 'vue'
import UserSearch from '@/views/main/system/user/cpns/user-search.vue'
import UserContent from '@/views/main/system/user/cpns/user-content.vue'

const contentRef = ref<InstanceType<typeof UserContent>>()
const handleQueryClick = (formData: any) => {
  contentRef.value?.fetchUsersList(formData)
}

const handleResetClick = () => {
  contentRef.value?.fetchUsersList()
}
</script>
<template>
  <div>
    <UserSearch
      @queryClick="handleQueryClick"
      @resetClick="handleResetClick"
    ></UserSearch>
    <UserContent ref="contentRef"></UserContent>
  </div>
</template>
<style scoped lang="less"></style>
