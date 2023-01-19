<script setup lang="ts">
import usePermission from '@/hooks/permissions'
const permissionType = 'department'
const { isCreate } = usePermission(permissionType)
</script>
<template>
  <div>overview</div>
  <h2 v-if="isCreate">{{ $t('message.router.coreTechnology') }}</h2>
</template>
<style scoped></style>
