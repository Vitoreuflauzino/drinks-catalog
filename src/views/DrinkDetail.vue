<template>
    <div class="container" v-if="drink">
      <h2>{{ drink.strDrink }}</h2>
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink"/>
      <h3>Ingredientes:</h3>
      <ul>
        <li v-for="item in ingredientes" :key="item">{{ item }}</li>
      </ul>
      <p>{{ drink.strInstructions }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import { ref, computed, onMounted } from 'vue'
  
  const route = useRoute()
  const drink = ref(null)
  
  onMounted(async () => {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)
    drink.value = res.data.drinks[0]
  })
  
  const ingredientes = computed(() => {
    return Object.keys(drink.value || {})
      .filter(key => key.includes('strIngredient') && drink.value[key])
      .map(key => drink.value[key])
  })
  </script>
  