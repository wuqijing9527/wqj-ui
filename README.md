### 一、wqj-ui组件使用手册

#### 1、下载

```js
yarn add wqj-ui(推荐) 或者 npm i wqj-ui
```

#### 2、引入

在main.js引入js和css

```js
import WQJ from 'wqj-ui'
import 'wqj-ui/dist/wqj-ui.css'
Vue.use(WQJ)
```

#### 3、使用 在App.vue使用

```html
<template>
	<div id='app'>
        <t-button type='success'>按钮</t-button>
        <t-button type='primary'>按钮</t-button>
   		<t-button type='warning'>按钮</t-button>
        <t-button type='danger'>按钮</t-button>
        <t-button type='info'>按钮</t-button>
    </div>
</template>
```

### 二、组件介绍

#### 1、button组件

（1）参数支持

| 参数名   | 参数描述                                              | 参数类型 | 默认值 |
| -------- | ----------------------------------------------------- | -------- | ------ |
| type     | 按钮类型(primary / success / warning / danger / info) | string   | 无     |
| plain    | 是否是朴素按钮                                        | boolean  | false  |
| round    | 是否是圆角按钮                                        | boolean  | false  |
| circle   | 是否是圆形按钮                                        | boolean  | false  |
| disabled | 是否禁用按钮                                          | boolean  | false  |
| size     | 图标大小（medium/small/mini）                         | string   | 无     |
| icon     | 图标类名                                              | string   | 2无    |

（2）icon支持的图标类名

test-icon-circle-close、test-icon-view、test-icon-close、test-icon-message、test-icon-edit、test-icon-Star、test-icon-delete、test-icon-search、test-icon-check

```html
<t-button type='success' plain>按钮</t-button>
<t-button type='danger' round>按钮</t-button>
<t-button type='warning' circle>按钮</t-button>
<t-button type='info' disabled>按钮</t-button>
<t-button icon='test-icon-view'>按钮</t-button>
```

（3）事件支持

| 事件名称 | 事件描述 | 回调参数 |
| -------- | -------- | -------- |
| click    | 点击事件 | 事件对象 |



```html
<t-buttton type='success' @click='handleClick'></t-buttton>
```

```js
export default {
    methods: {
        handleClik () {
            console.log('我被点击了!')
        }
    }
}
```

#### 2、dialog组件

（1）参数支持

| 参数名                | 参数描述                           | 参数类型 | 默认值 |
| --------------------- | ---------------------------------- | -------- | ------ |
| title                 | 对话框标题                         | string   | 提示   |
| width                 | 对话框宽度                         | string   | 50%    |
| top                   | 对话框与顶部的距离                 | string   | 15vh   |
| visible               | 是否显示dialog（支持sync修饰符）   | boolean  | false  |
| show-close            | 是否显示关闭按钮                   | boolean  | false  |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog | boolean  | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog   | boolean  | true   |

（2）插槽支持

| 插槽名称 | 插槽描述           |
| -------- | ------------------ |
| default  | dialog的内容       |
| title    | dialog的标题       |
| footer   | dialog的底部操作区 |

（3）使用示例

```html
<t-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close='false'
    >
      <span>这是一段信息</span>
      <span slot='title'>这是wqj-ui</span>
      <span slot="footer" class="dialog-footer">
        <t-button @click="dialogVisible = false">取 消</t-button>
        <t-button type="primary" @click="dialogVisible = false">确 定</t-button>
      </span>
</t-dialog>
```

```js
export default {
    data () {
        return {
            dialogVisble: true
        }
    }
}
```

#### 3、input组件

（1）参数支持

| 参数名称      | 参数描述                     | 参数类型 | 默认值 |
| ------------- | ---------------------------- | -------- | ------ |
| v-model       | 双向绑定                     | 无       | 无     |
| placeholder   | 占位符                       | string   | 无     |
| width         | input框宽度                  | string   | 无     |
| type          | input框类型（text/password） | string   | text   |
| disabled      | 是否禁用文本框               | string   | false  |
| name          | input框name属性              | string   | 无     |
| value         | input框value属性             | string   | 无     |
| clearable     | 是否显示清空按钮             | boolean  | false  |
| show-password | 是否显示密码                 | boolean  | false  |

（2）事件支持

| 事件名称 | 事件描述       |
| -------- | -------------- |
| blur     | 失去焦点事件   |
| focus    | 获取的焦点事件 |
| input    | 表单输入事件   |
| change   | 内容改变事件   |

（3）使用示例

```html
<t-input placeholder='请输入用户名...' clearable></t-input>
<t-input placeholder='请输入密码...' type='password' show-password>

```

#### 4、switch组件

（1）参数支持

| 参数名称      | 参数描述             | 参数类型 | 默认值 |
| ------------- | -------------------- | -------- | ------ |
| v-model       | 双向绑定             | 无       | 无     |
| name          | name属性             | string   | text   |
| activeColor   | 自定义的激活的颜色   | string   | 无     |
| inactiveColor | 自定义的不激活的颜色 | string   | 无     |

（2）事件支持

| 事件名称 | 事件描述                        | 回调参数     |
| -------- | ------------------------------- | ------------ |
| input    | switch 状态发生变化时的回调函数 | 最新的状态值 |

（3）使用示例

```html
<t-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    @input='fn'>
</t-switch>

```

```js
export default {
    data () {
        return {
            value: true
        }
    },
    methods: {
        fn (value) {
            console.log(value)
        }
    }
}

```

#### 5、radio组件

（1）参数支持

| 参数名称 | 参数描述         | 参数类型              | 默认值 |
| -------- | ---------------- | --------------------- | ------ |
| v-model  | 双向数据绑定     | 无                    | 无     |
| value    | 表格绑定         | 无                    | null   |
| label    | 单选框的value值  | string/number/boolean | 无     |
| name     | 单选框的name属性 | string                | 无     |

（2）使用示例

```html
<t-radio label='备选项1' v-model='checked'></t-radio>
<t-radio label='备选项2' v-model='checked'></t-radio>
<t-radio label='备选项3' v-model='checked'></t-radio>

```

```js
export default {
    data () {
        return {
            checked: '备选项3'
        }
    }
}

```

#### 6、radio-group组件

（1）使用说明

使用t-radio-group组件包裹t-radio组件，这样就不需要给每个t-radio设置v-model

（2）使用示例

```html
<t-radio-group v-model='checked'>
	<t-radio label='备选项1'></t-radio>
    <t-radio label='备选项2'></t-radio>
    <t-radio label='备选项3'></t-radio>
</t-radio-group>

```

```js
export default {
    data () {
        return {
            checked: '备选项3'
        }
    }
}

```

#### 7、checkbox组件

（1）参数支持

| 参数名称 | 参数描述           | 参数类型 | 默认值 |
| -------- | ------------------ | -------- | ------ |
| v-model  | 双向数据绑定       | 无       | 无     |
| value    | 绑定的值           | string   | 无     |
| name     | 多选框的name属性   | string   | 无     |
| label    | 多选框选中状态的值 | string   | 无     |

（2）使用示例

```html
<t-checkbox v-model='checkbox' label='备选项1'></t-checkbox>

```

```js
export default {
    data () {
        return {
            checkbox: true
        }
    }
}

```

#### 8、checkbox-group组件

（1）使用说明

使用t-checkbox-group包裹t-checkbox选中多个框

（1）参数支持

| 参数名称 | 参数描述 | 参数类型 | 默认值 |
| -------- | -------- | -------- | ------ |
| v-model  | 绑定的值 | 数组     | 无     |

（2）使用示例

```html
<t-checkbox-group v-model='checkboxArr'>
	<t-checkbox label='备选项1'></t-checkbox>
    <t-checkbox label='备选项2'></t-checkbox>
    <t-checkbox label='备选项3'></t-checkbox>
</t-checkbox-group>

```

```js
export default {
    data () {
        return {
            checkboxArr: ['备选项1','备选项2']
        }
    }
}

```

#### 9、form组件

（1）使用说明

用来包裹表单组件的

（2）参数支持

| 参数名称   | 参数描述         | 参数类型 | 默认值 |
| ---------- | ---------------- | -------- | ------ |
| model      | 表单数据对象     | object   | {}     |
| labelWidth | 表单域标签的宽度 | string   | 80px   |

（3）使用示例

```html
<t-form :model='form' :label-width='60px'>
    <t-form-item label='用户名'>
        <t-input v-model='form.username' placeholder='请输入用户名...'></t-input>
    </t-form-item>
     <t-form-item label='密码'>
        <t-input v-model='form.password' type='password' placeholder='请输入密码...'></t-input>
    </t-form-item>
</t-form>

```

```js
export default {
    data () {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    }
}

```

#### 10、form-item组件

（1）使用说明

用来包裹表单组件的

（2）参数说明

| 参数名称 | 参数描述 | 参数类型 | 默认值 |
| -------- | -------- | -------- | ------ |
| label    | 标签文本 | string   | 无     |

（3）使用示例

```html
<t-form :model='form' :label-width='60px'>
    <t-form-item label='用户名'>
        <t-input v-model='form.username' placeholder='请输入用户名...'></t-input>
    </t-form-item>
     <t-form-item label='密码'>
        <t-input v-model='form.password' type='password' placeholder='请输入密码...'></t-input>
    </t-form-item>
</t-form>

```

```js
export default {
    data () {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    }
}

```

