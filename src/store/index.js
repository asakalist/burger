import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    ingredients: [
      {name:'салат', price:10, count:0},
      {name:'бекон', price:40, count:0},
      {name:'сыр', price:20, count:0},
      {name:'котлета', price:80, count:0},
    ]
  },
  mutations: {
    plusIngredientMutation(state, id) {
      state.ingredients[id].count += 1
    },
    minusIngredientMutation(state, id) {
      state.ingredients[id].count -= 1
    }
  },
  actions: {
  },
  getters: {
    totalPrice(state) {
      return state.ingredients.reduce((sum, ing) => sum + ing.price*ing.count, 50)
    },
    salad(state) {
      return state.ingredients[0].count
    },
    bacon(state) {
      return state.ingredients[1].count
    },
    cheese(state) {
      return state.ingredients[2].count
    },
    meat(state) {
      return state.ingredients[3].count
    },
    allIngredients(state) {
      return state.ingredients
    }
  },
  plugins: [vuexLocal.plugin]
})
