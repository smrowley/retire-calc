<template>
  <div class="calculator">
    <h3>{{title}}</h3>
    <span>Hi {{targetIncome}}</span>
    <br />
    <br />
    <dollar-input label="Target Income" :dollarValue.sync="targetIncome"></dollar-input>
  </div>
</template>

<script>
  import DollarInput from './DollarInput'
  export default {
    name: 'calculator',
    components: {DollarInput},
    data: function () {
      return {
        title: 'hi',
        targetIncome: 1.00
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
