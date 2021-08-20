<template>
  <div class="app">
    <div class="burger-render">
      <top-bulka/>
     
      <salad v-if="ingreds[0].count > 0"/>
      <salad v-if="ingreds[0].count > 1"/>
     
      <bacon v-if="ingreds[1].count > 0"/>
      <bacon v-if="ingreds[1].count > 1"/>
     
      <cheese v-if="ingreds[2].count > 0"/>
      <cheese v-if="ingreds[2].count > 1"/>
     
      <meat v-if="ingreds[3].count > 0"/>
      <meat v-if="ingreds[3].count > 1"/>
     
      <bottom-bulka/>
      
      
    </div>
    <div class="burger-menu">
      <div class="controllers">
        <controller @minus="minusIng" @add="addIng" :ingred="ingred" v-model="ingreds" :key="ingred.name" v-for="ingred in ingreds"/>
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

export default {
  components: { TopBulka, Bacon, Cheese, Meat, BottomBulka, Salad, Controller},
  data() {
    return {
      ingreds: [
        {name:'салат', price:10, count:0},
        {name:'бекон', price:40, count:0},
        {name:'сыр', price:20, count:0},
        {name:'котлета', price:80, count:0},
      ]
    }
  },
  methods: {
    addIng(name) {
      const id = this.ingreds.findIndex(ing => ing.name === name);
      this.ingreds[id].count += 1;
    },
    minusIng(name) {
      const id = this.ingreds.findIndex(ing => ing.name === name);
      this.ingreds[id].count -= 1;
    }
  },
  computed: {
    totalPrice() {
      return this.ingreds.reduce((sum, cur) => sum + cur.price*cur.count, 50)
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
.app {
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