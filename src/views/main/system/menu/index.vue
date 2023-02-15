<script setup lang="ts">
import pageContent from '@/components/page-content/page-content.vue'
import contenConfig from '@/views/main/system/menu/config/content.config'
import PageModal from '@/components/page-modal/page-modal.vue'
</script>
<template>
  <div>
    <pageContent :content-config="contenConfig"></pageContent>
    <!-- <PageModal></PageModal> -->
  </div>
</template>
<style lang="less" scoped></style>
