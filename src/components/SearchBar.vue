<template>
  <input type="text" v-model="query" placeholder="Buscar drink..." />
</template>

<script setup>
import { ref, watch } from 'vue'

const query = ref('')
const emit = defineEmits(['searchDrink'])

watch(query, (novoQuery) => {
  emit('searchDrink', novoQuery)
})
</script>

<style scoped>
input {
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
}
</style>
