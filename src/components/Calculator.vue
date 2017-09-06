<template>
  <div class="calculator">
    <v-card class="grey lighten-4 elevation-0">
      <h3>{{title}}</h3>
      <span>Hi {{targetIncome}}</span>
      <br />
      <br />
      <!--<dollar-input label="Target Income" :dollarValue.sync="targetIncome"></dollar-input>-->
      <v-text-field name="targetIncome" label="Target Income" id="targetIncome"></v-text-field>
    </v-card>
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
