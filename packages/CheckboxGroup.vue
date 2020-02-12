<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 't-checkbox-group',
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>
<style lang='scss'>
</style>
