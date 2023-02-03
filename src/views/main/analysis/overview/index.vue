<script setup lang="ts">
import usePermission from '@/hooks/permissions'

const permissionType = 'department'
const { isCreate } = usePermission(permissionType)

const itemStyle = {
  style: {
    width: '20px',
    color: '#6cf',
  },
}
</script>
<template>
  <div>overview</div>
  <h2 v-if="isCreate">{{ $t('message.router.coreTechnology') }}</h2>
  <div v-bind="itemStyle">hhhhhh</div>
</template>
<style scoped></style>
