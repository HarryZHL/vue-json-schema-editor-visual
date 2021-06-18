## Usage

```js
import JsonSchemaEditor from 'fls-json-schema-editor';

Vue.use(JsonSchemaEditor);
```

## API

### Attributes

|         参数         | 说明                                  |   类型    | 默认值  |
| :------------------: | ------------------------------------- | :-------: | :-----: |
|       `schema`       | json schema 对象                      | `Object`  |    -    |
|      `show-raw`      | 是否显示 RAW 弹窗，可查看 json schema | `Boolean` | `false` |
|      `is-mock`       | 是否支持 mock （WIP）                 | `Boolean` | `false` |
| `show-default-value` | 是否展示默认值输入框                  | `Boolean` | `false` |

### Events

|    事件名称     | 说明                        |       回调参数        |
| :-------------: | --------------------------- | :-------------------: |
| `schema-change` | schema 发生变化时的回调函数 | 新的 json schema 对象 |

### Method

|    方法名称     | 说明                        |       返回参数        |
| :-------------: | --------------------------- | :-------------------: |
| `getRequiredItems` | 获取所有required参数 | required参数集合 |