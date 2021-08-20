<template>
  <div>
    <button @click="minusIng" v-if="count>0">-</button>
    <button class="disBtn" disabled="disabled" v-else></button>
    <span>{{ingred.name}}</span>
    <button @click="addIng" v-if="count<2">+</button>
    <button class="disBtn" disabled="disabled" v-else></button>
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
  .disBtn {
    cursor:not-allowed;
  }
</style>