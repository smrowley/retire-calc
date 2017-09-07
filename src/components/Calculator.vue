<template>
  <div class="calculator" style="padding: 20px">
    <v-app>
      <v-card>
        <v-card-text>
          <h5>{{title}}</h5>
          <br />
          <br />
          <v-text-field
            label="Target Income"
            v-model="targetIncome"
            hint="The annual income you would like in retirement."
            :rules="dollarInputRules">
          </v-text-field>
          {{safeWithdrawalPercentage}}%
          <v-slider
            v-model="safeWithdrawalSliderValue"
            :min="200"
            :max="700"
            :step="25"
            snap></v-slider>
          <v-text-field
            label="Target Nest Egg"
            v-model="targetNestEgg"
            hint="The nest egg required to support your target income."
            readonly>
          </v-text-field>
          <br/>
          <br/>
          <v-text-field
            label="Current Retirement Nest Egg"
            v-model="currentNestEgg"
            hint="Your current retirement nest egg."
            :rules="dollarInputRules">
          </v-text-field>
          {{averageAnnualReturnPercentage}}%
          <v-slider
            v-model="annualReturnSliderValue"
            :min="200"
            :max="1200"
            :step="25"
            snap></v-slider>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'calculator',
    data: function () {
      return {
        title: 'Simple Retirement Calculator',
        targetIncome: 20000,
        currentNestEgg: 10000,
        safeWithdrawalSliderValue: 400,
        annualReturnSliderValue: 700,
        dollarInputRules: [
          function (value) {
            var regex = /^\d+(?:\.\d{0,2})?$/
            return regex.test(value) || 'Must be a dollar amount.'
          }
        ]
      }
    },
    computed: {
      safeWithdrawalRate: function () {
        return this.safeWithdrawalSliderValue / 10000
      },
      averageAnnualReturn: function () {
        return this.annualReturnSliderValue / 10000
      },
      safeWithdrawalPercentage: function () {
        return (this.safeWithdrawalRate * 100).toFixed(2)
      },
      averageAnnualReturnPercentage: function () {
        return (this.averageAnnualReturn * 100).toFixed(2)
      },
      targetNestEgg: function () {
        return (this.targetIncome * (1 / this.safeWithdrawalRate)).toFixed(2)
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
