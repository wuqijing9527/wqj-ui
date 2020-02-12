
import Button from './Button.vue'
import Dialog from './Dialog.vue'
import Input from './Input.vue'
import Checkbox from './Checkbox.vue'
import Radio from './Radio.vue'
import RadioGroup from './RadioGroup.vue'
import Switch from './Switch'
import CheckboxGroup from './CheckboxGroup.vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'
import './fonts/iconfont.css'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
