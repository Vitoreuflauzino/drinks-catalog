<template>
  <div class="container">
    <div class="filtros">
      <SearchBar @searchDrink="buscarPorNome" />
      <AlphabetFilter @selectLetter="buscarPorLetra" />
      <select v-model="categoriaSelecionada" @change="filtrarCategoria">
        <option value="" disabled>Selecione categoria</option>
        <option v-for="cat in categorias" :key="cat.strCategory" :value="cat.strCategory">
          {{ cat.strCategory }}
        </option>
      </select>
    </div>

    <DrinkList :drinks="drinks" />
  </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import SearchBar from '../components/SearchBar.vue'
  import AlphabetFilter from '../components/AlphabetFilter.vue'
  import DrinkList from '../components/DrinkList.vue'
  
  const drinks = ref([])
  const categorias = ref([])
  const categoriaSelecionada = ref('')
  
  onMounted(async () => {
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    categorias.value = res.data.drinks
  })
  
  async function buscarPorNome(nome) {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`)
    drinks.value = res.data.drinks || []
  }
  
  async function buscarPorLetra(letra) {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`)
    drinks.value = res.data.drinks || []
  }
  
  async function filtrarCategoria() {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoriaSelecionada.value}`)
    drinks.value = res.data.drinks || []
  }
  </script>
  
  <style scoped>
.filtros {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.filtros input,
.filtros select {
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 250px;
}

select:focus,
input:focus {
  outline: none;
  border-color: #4CAF50;
}
</style>