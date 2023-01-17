<template>
  <div>main</div>
  <h2>{{ count }}</h2>
  <h3>{{ doubleCount }}</h3>
  <button @click="counterStore.increment">aaaa</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
</script>
<style scoped></style>
