<template>
  <button @click='handleClick' class="t-button" :class="[`t-button--${type}`,
  `t-button--${size}`,
  {'is-plain':plain},
  {'is-round': round},
  {'is-circle': circle},
  {'is-disabled': disabled}]"
  :disabled='disabled'>
  <i :class="icon" v-if='icon'></i>
  <!-- $slots组件中间的内容，通过$slots.default判断组件之间 有没有内容从而知道要不渲染span -->
  <span v-if='$slots.default'><slot></slot></span>
  </button>
</template>

<script>
/*
  （+）相邻兄弟元素：选择某元素后面相邻的兄弟元素，只会匹配第一个，父类是相同的
  （~）后续兄弟元素：选择某元素后面所有同级兄弟元素
*/
export default {
  name: 't-button',
  props: {
    type: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      dafault: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    remove: {
      type: Function,
      default: () => {
        return false
      }
    },
    size: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang='scss' scoped>
// button按钮基本样式
.t-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.t-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.t-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.t-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.t-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.t-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
// plain
.t-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.t-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.t-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.t-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.t-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.t-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.t-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形按钮
.t-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 字体图标后面的文本
// [class*=test-icon-] 代表包含test-icon-的类名 如test-icon-delte,test-icon-star
.t-button [class*=test-icon-]+span {
    margin-left: 5px;
}
// 禁用
.t-button.is-disabled,
.t-button.is-disabled:focus,
.t-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.t-button.is-disabled,
.t-button.is-disabled:focus,
.t-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.t-button--primary.is-disabled,
.t-button--primary.is-disabled:active,
.t-button--primary.is-disabled:focus,
.t-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.t-button--success.is-disabled,
.t-button--success.is-disabled:active,
.t-button--success.is-disabled:focus,
.t-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.t-button--info.is-disabled,
.t-button--info.is-disabled:active,
.t-button--info.is-disabled:focus,
.t-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.t-button--warning.is-disabled,
.t-button--warning.is-disabled:active,
.t-button--warning.is-disabled:focus,
.t-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.t-button--danger.is-disabled,
.t-button--danger.is-disabled:active,
.t-button--danger.is-disabled:focus,
.t-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}

// 按钮大小
.t-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px
}

.t-button--mini,
.t-button--small {
    font-size: 12px;
    border-radius: 3px
}

.t-button--medium.is-round {
    padding: 10px 20px
}

.t-button--medium.is-circle {
    padding: 10px
}

.t-button--small,
.t-button--small.is-round {
    padding: 9px 15px
}

.t-button--small.is-circle {
    padding: 9px
}

.t-button--mini,
.t-button--mini.is-round {
    padding: 7px 15px
}

.t-button--mini.is-circle {
    padding: 7px
}
</style>
