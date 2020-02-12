<template>
  <div class="t-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-form',
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style>

</style>
