<template>
  <div class="drink-list">
    <DrinkItem v-for="drink in drinks" :key="drink.idDrink" :drink="drink" />
  </div>
</template>

<script setup>
import DrinkItem from './DrinkItem.vue'
defineProps(['drinks'])
</script>

<style scoped>
.drink-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
}
</style>
