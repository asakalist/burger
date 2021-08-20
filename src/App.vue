<template>
  <div class="app">
    <div class="burger-render">
      <top-bulka />
      <salad />
      <bacon />
      <cheese />
      <meat />
      <bottom-bulka />
      
    </div>
    <div class="burger-menu">
      <div class="controllers"></div>
      <div class="price"></div>
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

export default {
  components: { TopBulka, Bacon, Cheese, Meat, BottomBulka,Salad },
  
}

</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
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
  column-gap: 0;
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
}
.top-bulka {
  width: 200px;
  height: 30px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background: url('https://thumbs.dreamstime.com/z/burger-bun-closeup-white-background-34732606.jpg') no-repeat center center/cover;
}

</style>