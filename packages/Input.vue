<template>
  <div class="t-input" :class="{'t-input--suffix': showSuffix }" :style="style">
    <!-- 如果传递了show-password才判断要不要显示密码 -->
    <input
      autocomplete="off"
      :type="passwordVisible?(passwordVisible?'text':'password'):type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="t-input__inner"
      :class="{'is-disabled':disabled}"
      :name="name"
      :value="value"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span class="t-input__suffix" v-if='showSuffix'>
      <i class="t-input__icon test-icon-circle-close" v-if='clearable && value' @click='clear'></i>
      <i class="t-input__icon test-icon-view" :class="{'test-icon-view-active': passwordVisible}" v-if='showPassword' @click='handlePassword'></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 't-input',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      defaut: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    },
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    style () {
      return {
        width: this.width
      }
    },
    showSuffix () {
      return this.clearable || this.showPassword
    }
  }
}
</script>
<style lang='scss' scoped>
.t-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .t-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.t-input--suffix {
    .t-input__inner {
      padding-right: 30px;
    }
    .t-input__suffix {
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all 0.3s;
      z-index: 900;
      i {
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      // 密码显示给图标添加的类
      .test-icon-view-active {
        color: rgb(34,161,255)
      }
    }
  }
</style>
