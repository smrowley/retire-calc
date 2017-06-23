var app = new Vue({
  el: '#app',
  data: {
    withdrawalPercentage: 4,
    targetIncome: 10000,
    targetNestEgg: 0
  },
  methods: {
    updateTargetNestEgg: function() {
      this.targetNestEgg = this.targetIncome * (1 / (this.withdrawalPercentage * .01));
    },
    updateWithdrawalPercentage: function(e) {
      this.withdrawalPercentage = e.target.value;
      this.updateTargetNestEgg();
    }
  }
});
