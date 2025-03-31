import { defineStore } from 'pinia'

export const useDrinksStore = defineStore('drinks', {
  state: () => ({
    favoritos: []
  }),
  actions: {
    favoritar(drink) {
      if (!this.favoritos.find(d => d.idDrink === drink.idDrink)) {
        this.favoritos.push(drink)
      }
    },
    removerFavorito(idDrink) {
      this.favoritos = this.favoritos.filter(d => d.idDrink !== idDrink)
    }
  }
})
