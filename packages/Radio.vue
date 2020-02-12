<template>
  <label class="t-radio" :class="{'is-checked':label===model}">
    <span class="t-radio__input">
      <span class="t-radio__inner"></span>
      <input :name="name" :value='label' v-model='model' class="t-radio__original" type="radio" />
    </span>
    <span class="t-radio__label">
      <slot><span>{{label}}</span></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 't-radio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [Boolean, String, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: null
  },
  computed: {
    model: {
      get () {
        // 判断value是不是来自radio-group的
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang='scss' scoped>
.t-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .t-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .t-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .t-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .t-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.t-radio.is-checked {
  .t-radio__input {
    .t-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .t-radio__label {
    color: #409eff;
  }
}
</style>
