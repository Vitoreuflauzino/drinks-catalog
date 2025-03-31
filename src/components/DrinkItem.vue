<template>
  <router-link :to="`/drink/${drink.idDrink}`" class="drink-item">
    <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
    <span>{{ drink.strDrink }}</span>
  </router-link>
</template>

<script setup>
defineProps(['drink'])
</script>

<style scoped>
.drink-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 10px;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s ease;
}

.drink-item:hover {
  transform: scale(1.05);
}

.drink-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.drink-item span {
  margin-top: 8px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
}
</style>
