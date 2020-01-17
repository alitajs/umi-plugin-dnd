# umi-plugin-dnd

[![NPM version](https://img.shields.io/npm/v/umi-plugin-dnd.svg?style=flat)](https://npmjs.org/package/umi-plugin-dnd)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-dnd.svg?style=flat)](https://npmjs.org/package/umi-plugin-dnd)

react-dnd

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-dnd', options],
  ],
}
```

## Options

TODO

## LICENSE

MIT

## API

### Drag

将允许被拖动的节点，用 `Drag` 包裹

#### data

* 参数类型：`any`
* 描述：在拖动事件响应的时候可以取到它,你可以写满足你判断的任意数据
* 是否必须: 是
* 默认值：无

#### type

* 参数类型：`String`
* 描述：描述拖放组件的类型，只有同类型的组件才会互相响应
* 是否必须: 是
* 默认值：'dragBox'

#### icon

* 参数类型：`image`
* 描述：添加被拖动时的预览图片，在移动端无效
* 是否必须: 否
* 默认值：无

### Drop

将允许被放置的节点，用 `Drop` 包裹

#### onDrop

* 参数类型：`func`
* 描述：被放置时响应的函数
* 是否必须: 是
* 默认值：无

#### data

* 参数类型：`any`
* 描述：在拖动事件响应的时候可以取到它,你可以写满足你判断的任意数据
* 是否必须: 是
* 默认值：无

#### type

* 参数类型：`String`
* 描述：描述拖放组件的类型，只有同类型的组件才会互相响应
* 是否必须: 是
* 默认值：'dragBox'

#### style

* 参数类型：`Style`
* 描述：组件的默认样式
* 是否必须: 否
* 默认值：无

#### canDropStyle

* 参数类型：`Style`
* 描述：组件的允许被放置时的样式，是一个中间状态
* 是否必须: 否
* 默认值：无

#### onOverStyle

* 参数类型：`Style`
* 描述：组件的允许将被放置时的样式，是一个hover状态
* 是否必须: 否
* 默认值：`{ border: '1px dashed black',}`
