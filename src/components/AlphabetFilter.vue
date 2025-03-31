<template>
  <div class="alphabet-filter">
    <button v-for="letra in alphabet" :key="letra" @click="select(letra)">
      {{ letra }}
    </button>
  </div>
</template>

<script setup>
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const emit = defineEmits(['selectLetter'])

function select(letra) {
  emit('selectLetter', letra)
}
</script>

<style scoped>
.alphabet-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin: 10px 0;
  max-width: 500px;
}

.alphabet-filter button {
  padding: 6px 10px;
  font-size: 14px;
  border: 1px solid #aaa;
  border-radius: 6px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background 0.2s;
}

.alphabet-filter button:hover {
  background-color: #e0e0e0;
}
</style>
