<template>
  <div class="t-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="t-switch__core" ref="core">
      <span class="t-switch__button"></span>
    </span>
    <input class="t-switch__input" type="checkbox" :name="name" :checked='value'/>
  </div>
</template>

<script>
export default {
  name: 't-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: ''
    },
    inactiveClass: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor()
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 在vue中数据更新之后，dom更新是异步的
      // nextTick() 不传递回调函数，返回的是一个promise对象
      await this.$nextTick()
      this.setColor()
    },
    // 设置按钮的颜色
    setColor () {
      // 只要有activeClass或者inactiveClass就应该设置颜色
      if (this.activeClass || this.inactiveClass) {
        const color = this.value ? this.activeClass : this.inactiveClass
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.t-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .t-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .t-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  // .t-switch__input {
  //   position: absolute;
  //   width: 0;
  //   height: 0;
  //   opacity: 0;
  //   margin: 0;
  // }
}
.t-switch.is-checked {
  .t-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .t-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
