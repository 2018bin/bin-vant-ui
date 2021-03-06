# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

```js
import { createApp } from 'vue';
import { Button } from 'bin-vant-ui';

const app = createApp();
app.use(Button);
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。

```html
<bin-button type="primary">主要按钮</bin-button>
<bin-button type="success">成功按钮</bin-button>
<bin-button type="default">默认按钮</bin-button>
<bin-button type="warning">警告按钮</bin-button>
<bin-button type="danger">危险按钮</bin-button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<bin-button plain type="primary">朴素按钮</bin-button>
<bin-button plain type="primary">朴素按钮</bin-button>
```

### 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

```html
<bin-button plain hairline type="primary">细边框按钮</bin-button>
<bin-button plain hairline type="primary">细边框按钮</bin-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<bin-button disabled type="primary">禁用状态</bin-button>
<bin-button disabled type="primary">禁用状态</bin-button>
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loading-text` 设置加载状态下的文字。

```html
<bin-button loading type="primary" />
<bin-button loading type="primary" loading-type="spinner" />
<bin-button loading type="primary" loading-text="加载中..." />
```

### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```html
<bin-button square type="primary">方形按钮</bin-button>
<bin-button round type="primary">圆形按钮</bin-button>
```

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```html
<bin-button icon="plus" type="primary" />
<bin-button icon="plus" type="primary">按钮</bin-button>
<bin-button icon="https://img01.yzcdn.cn/vant/user-active.png" type="primary">
  按钮
</bin-button>
```

### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。

```html
<bin-button type="primary" size="large">大号按钮</bin-button>
<bin-button type="primary" size="normal">普通按钮</bin-button>
<bin-button type="primary" size="small">小型按钮</bin-button>
<bin-button type="primary" size="mini">迷你按钮</bin-button>
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

```html
<bin-button type="primary" block>块级元素</bin-button>
```

### 页面导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```html
<bin-button type="primary" url="/vant/mobile.html">URL 跳转</bin-button>
<bin-button type="primary" to="index">路由跳转</bin-button>
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```html
<bin-button color="#7232dd">单色按钮</bin-button>
<bin-button color="#7232dd" plain>单色按钮</bin-button>
<bin-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</bin-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | _string_ | `normal` |
| text | 按钮文字 | _string_ | - |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| icon-prefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `bin-icon` |
| icon-position | 图标展示位置，可选值为 `right` | _string_ | `left` |
| tag | 按钮根节点的 HTML 标签 | _string_ | `button` |
| native-type | 原生 button 标签的 type 属性 | _string_ | `button` |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| hairline | 是否使用 0.5px 边框 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loading-text | 加载状态提示文字 | _string_ | - |
| loading-type | [加载图标类型](#/zh-CN/loading)，可选值为 `spinner` | _string_ | `circular` |
| loading-size | 加载图标大小 | _string_ | `20px` |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | - |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: Event_      |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 按钮内容       |
| loading | 自定义加载图标 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                             | 默认值               | 描述 |
| -------------------------------- | -------------------- | ---- |
| @button-mini-height              | `24px`               | -    |
| @button-mini-font-size           | `@font-size-xs`      | -    |
| @button-small-height             | `32px`               | -    |
| @button-small-font-size          | `@font-size-sm`      | -    |
| @button-normal-font-size         | `@font-size-md`      | -    |
| @button-large-height             | `50px`               | -    |
| @button-default-height           | `44px`               | -    |
| @button-default-line-height      | `1.2`                | -    |
| @button-default-font-size        | `@font-size-lg`      | -    |
| @button-default-color            | `@text-color`        | -    |
| @button-default-background-color | `@white`             | -    |
| @button-default-border-color     | `@border-color`      | -    |
| @button-primary-color            | `@white`             | -    |
| @button-primary-background-color | `@blue`              | -    |
| @button-primary-border-color     | `@blue`              | -    |
| @button-success-color            | `@white`             | -    |
| @button-success-background-color | `@green`             | -    |
| @button-success-border-color     | `@green`             | -    |
| @button-danger-color             | `@white`             | -    |
| @button-danger-background-color  | `@red`               | -    |
| @button-danger-border-color      | `@red`               | -    |
| @button-warning-color            | `@white`             | -    |
| @button-warning-background-color | `@orange`            | -    |
| @button-warning-border-color     | `@orange`            | -    |
| @button-border-width             | `@border-width-base` | -    |
| @button-border-radius            | `@border-radius-sm`  | -    |
| @button-round-border-radius      | `@border-radius-max` | -    |
| @button-plain-background-color   | `@white`             | -    |
| @button-disabled-opacity         | `@disabled-opacity`  | -    |
