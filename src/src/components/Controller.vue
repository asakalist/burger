<template>
  <div>
    <button @click="minusIng">-</button>
    <span>{{ingred.name}}</span>
    <button @click="addIng">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  props: {
    ingred: {
      type: Object,
      required: true
    }
  },
  methods: {
    addIng() {
      this.count += 1
      this.$emit('add', this.ingred.name)
    },
    minusIng() {
      this.count -= 1
      this.$emit('minus', this.ingred.name)
      
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
</style>