<template>
 <transition name='t'>
  <div class="t-dialog__wrapper" v-show='visible' @click.self='handleClose'>
    <div class="t-dialog" :style="style">
      <div class="t-dialog__header">
        <!-- 组件使用的时候没有传入内容，就渲染span，传了内容就把slot给替换掉 -->
        <slot name='title'>
          <span class="t-dialog__title">{{title}}</span>
        </slot>
        <button class="t-dialog__headerbtn" @click='handleClose' v-if="showClose">
          <i class="test-icon-close"></i>
        </button>
      </div>
      <div class="t-dialog__body">
        <!-- 身体部分 给个默认插槽 -->
        <slot name='default'>
          <span>这是一条信息</span>
        </slot>
      </div>
      <div class="t-dialog__footer">
        <!-- 底部给个footer插槽 -->
        <slot name='footer'>
          <t-button>取消</t-button>
          <t-button type="primary">确定</t-button>
        </slot>
      </div>
    </div>
  </div>
 </transition>
</template>
<script>
export default {
  name: 't-dialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style () {
      return {
        width: this.width,
        marginTop: this.top
      }
    }
  },
  created () {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 27 && this.closeOnPressEscape) {
        this.$emit('update:visible', false)
      }
    })
  },
  methods: {
    handleClose () {
      if (this.closeOnClickModal) {
        this.$emit('update:visible', false)
      }
    }
  }
}
</script>
<style lang='scss' scoped>
/*
  scoped: 1、会给当前组件所有的元素添加一个随机属性，但是slot标签中的元素不会添加
  2、会给所有的选择器添加一个属性选择器

  // 注意一般定义组件的使用不会使用 scoped,定义组件时取得类名都加了前缀
 */
.t-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .t-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .t-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .t-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      // 深度选择器 less是/deep/ scss是::v-deep css是>>>
      ::v-deep .t-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
@keyframes dong {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opactiy:1;
    transform: translateY(0px);
  }
}
.t-enter-active {
  animation: dong 0.5s;
}
.t-leave-active {
  animation: dong 0.5s reverse;
}
</style>
