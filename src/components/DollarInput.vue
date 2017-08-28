<template>
  <div class="dollarInput">
    <div class="col-md-3">
      <span>{{label}}:</span>
    </div>
    <div class="col-md-9">
      <input type="text" v-model="dollarValue" @input="updateValue"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dollar-input',
    props: {
      dollarValue: {
        type: Number,
        required: true,
        default: 0.00
      },
      label: {
        type: String,
        required: true,
        default: 'Dollar Value'
      }
    },
    data: function () {
      return {}
    },
    methods: {
      updateValue: function () {
        this.$emit('update:dollarValue', this.dollarValue)
      }
    },
    computed: {

    }
  }
</script>

<styles scoped>

</styles>
