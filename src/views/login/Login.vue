<template>
  <div>login</div>
</template>
<script setup lang="ts">
import zjRequest from '@/service'

zjRequest
  .get({
    url: 'https://www.fastmock.site/mock/2225f79588ee07c7f072d9513d602fb4/tableList/api/fruit',
  })
  .then((res) => {
    console.log(res)
  })
</script>
<style scoped></style>
