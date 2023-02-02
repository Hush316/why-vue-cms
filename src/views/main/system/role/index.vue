<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from '@/views/main/system/role/config/search.config'
</script>
<template>
  <div>
    <PageSearch :search-config="searchConfig"></PageSearch>
  </div>
</template>
<style scoped></style>
