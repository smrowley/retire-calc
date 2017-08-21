<template>
  <div class="calculator">
    <h3>{{title}}</h3>
    <br />
    <br />
  <!--<div id="app" style="width: 50%; margin: 0 auto;">
    <div class="input-item">
      <div class="col-md-3">
        <span>Target Annual Income:</span>
      </div>
      <div class="col-md-9">
        <input type="text" v-model="targetIncome" @input="updateTargetNestEgg" />
      </div>
    </div>
    <div class="input-item">
      <div class="col-md-3">
        <span>Safe Withdrawal Rate:</span>
      </div>
      <div class="col-md-9">
        <input type="range" min=".5" max ="7" step=".25" value="4" @input="updateWithdrawalPercentage" /><span>{{withdrawalPercentage}}%</span>
      </div>
    </div>
    <div class="input-item">
      <div class="col-md-3">
        <span>Target Nest Egg:</span>
      </div>
      <div class="col-md-9">
        <input type="text" v-model="targetNestEgg"/>
      </div>
    </div>
    <div class="input-item">
      <div class="col-md-3">
        <span>Current Nest Egg:</span>
      </div>
      <div class="col-md-9">
        <input type="text" v-model="currentNestEgg"/>
      </div>
    </div>
    <div class="input-item">
      <div class="col-md-3">
        <span>Average Annual Return:</span>
      </div>
      <div class="col-md-9">
        <input type="range" min=".5" max ="7" step=".25" value="4" @input="updateAnnualReturn" /><span>{{averageAnnualReturn}}%</span>
      </div>
    </div>
  </div>-->
  </div>
</template>

<script>
export default {
  name: 'calculator',
  data: function () {
    return {
      title: 'Simple Retirement Calculator'
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
