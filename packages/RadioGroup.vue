<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 't-radio-group',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>
<style lang='scss'>
</style>
