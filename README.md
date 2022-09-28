# 半圆进度条

## 📦 Install
```bash
npm i semi-circle-progress
```
## 📎 use
```bash
import SemiCircleProgress from "semi-circle-progress"
```

## 组件参数：
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | svg的宽 | `number` | 400 |
| heigt | svg的高 | `number` | 200 |
| config | 进度条配置 | `configItem\|configItem[]` | `-` |
#### configItem
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 圆心的位置 | `{ x: number, y: number }` | - |
| radius | 半径 | `number` | 50 |
| percent | 进度条百分比0～1 | `number` | 0.5 |
| strokeWidth | 进度条宽度 | `number` | 14 |
| strokeLinecap | [进度条样式](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap) | `butt\|square\|round` | round |
| strokeBackgroundColor | 进度条背景色支持渐变色 |`string\|{ offset: string;color: string;}[]`| `#f4f4f4` |
| strokeBarColor | 同strokeBackgroundColor |`string\|{ offset: string;color: string;}[]`|`[{ offset: '0%', color: '#FF7529' },{ offset: '5%', color: '#FFAC47' },{ offset: '100%', color: '#FF7529' }]`|