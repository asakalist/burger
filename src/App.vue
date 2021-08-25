<template>
  <div id="App">
    <div class="burger-render">
      <top-bulka/>
     
      <salad v-if="salad > 0"/>
      <salad v-if="salad > 1"/>
     
      <bacon v-if="bacon > 0"/>
      <bacon v-if="bacon > 1"/>
     
      <cheese v-if="cheese > 0"/>
      <cheese v-if="cheese > 1"/>
     
      <meat v-if="meat > 0"/>
      <meat v-if="meat > 1"/>
     
      <bottom-bulka/>     
    </div>
    
    <div class="burger-menu">
      <div>
        <controller 
          @minusIngredient="minusIngredient" 
          @plusIngredient="plusIngredient" 
          :ingredient="ingredient" 
          v-model="ingredients" 
          :key="ingredient.name" 
          v-for="ingredient in ingredients"
        />
      </div>
      <div class="price">
        Итого: {{totalPrice}} сом
      </div>
    </div>

  </div>
</template>

<script>
import Bacon from './components/Ingridients/Bacon.vue'
import BottomBulka from './components/Ingridients/BottomBulka.vue'
import Cheese from './components/Ingridients/Cheese.vue'
import Meat from './components/Ingridients/Meat.vue'
import Salad from './components/Ingridients/Salad.vue'
import TopBulka from './components/Ingridients/TopBulka.vue'
import Controller from "./components/Controller.vue"
import {mapMutations, mapState, mapGetters} from "vuex"

export default {
  name: 'App',

  components: {
    TopBulka, Bacon, Cheese, Meat, BottomBulka, Salad, Controller
  },
  
  computed: {
    ...mapGetters(['allIngredients', 'totalPrice', 'salad', 'meat', 'cheese', 'bacon']),
    ...mapState(['ingredients'])
  },
   
  methods: {
    ...mapMutations(['plusIngredientMutation', 'minusIngredientMutation']),
    
    plusIngredient(name) {      
      const id = this.allIngredients.findIndex(ingredient => ingredient.name === name)
      this.plusIngredientMutation(id)
    },
    minusIngredient(name) {
      const id = this.allIngredients.findIndex(ingredient => ingredient.name === name)
      this.minusIngredientMutation(id)
    }
    
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
#App {
  width: 700px;
  min-height: 400px;
  box-shadow: 0 5px 15px #aaa;
  display: flex;
}
.burger-render {
  width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5px;
}
.burger-menu {
  background-color: #eee23c;
  width: 50%;
  min-height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.price {
  height: 60px;
  background-color: #d16060;
  line-height: 60px;
  padding-left: 20px;
}
</style>
