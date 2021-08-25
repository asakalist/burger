<template>
  <div>
    <button 
      @click="minusIngredient" 
      v-if="ingredient.count > 0"
    > - </button>
    <button class="disableBtn" disabled="disabled" v-else></button>

    <span>{{ ingredient.name }} ( {{ ingredient.price }} )</span>

    <button 
      @click="plusIngredient"
      v-if="ingredient.count < 2"
    > + </button>
    <button class="disableBtn" disabled="disabled" v-else></button>
  </div>
</template>

<script>
export default {
  props: {
    ingredient: {
      type: Object,
      required: true
    }
  },
  methods: {
    plusIngredient() {
      this.count += 1
      this.$emit('plusIngredient', this.ingredient.name)
    },
    minusIngredient() {
      this.count -= 1
      this.$emit('minusIngredient', this.ingredient.name)      
    }
  }
}
</script>
  
<style scoped>
div {
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  font-size: 25px;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #f07929;
}
.disableBtn {
  cursor: not-allowed;
}
</style>
  
