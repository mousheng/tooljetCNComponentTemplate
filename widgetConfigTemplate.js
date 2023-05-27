x = {
  // 组件名称
  name: '{tempName}',
  // 组件显示名称
  displayName: '新组件名称',
  // 组件描述
  description: '组件描述',
  // 调用的组件名
  component: '{tempName}',
  // 默认组件大小
  defaultSize: {
    width: 15,
    height: 250,
  },
  // 默认子组件
  defaultChildren: [
  ],
  // 其他选项,设置显示在桌面系统或移动平台
  others: {
    showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
    showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
  },
  // 主属性
  properties: {
    // 属性名,传入组件的属性名
    datas: {
      // 输入属性的输入框类型，/code/toggle/color/number/select等
      type: 'code',
      // 显示名称
      displayName: '我是属性1',
      validation: {
        schema: {
          // string/array/number
          type: 'array',
          // 指定子元素类型范围
          // element: { type: 'union', schemas: [{ type: 'string' }, { type: 'object' }] }
        },
      },
    },
    value2: {
      type: 'toggle',
      displayName: '我是boolean值',
      validation: {
        schema: {
          type: 'boolean',
        },
      },
    },
    value3: {
      type: 'number',
      displayName: '我是数字属性',
      validation: {
        schema: {
          type: 'number',
        },
      },
    },
    value4: {
      type: 'select',
      displayName: '我是选择属性',
      options: [
        { name: '选项1', value: '1' },
        { name: '选项2', value: '2' },
      ],
      validation: {
        schema: { type: 'string' },
      },
    },
  },
  // 事件列表 /onClick/onCheck/onSearch/onChange/onSelect/onHover/onFocus/onBlur
  events: { 
    onClick: { displayName: '点击事件' },
  },
  styles: {
    color: {
      type: 'color',
      displayName: '颜色',
      validation: {
        schema: { type: 'string' },
      },
    },
    visibility: {
      type: 'toggle',
      displayName: 'Visibility',
      validation: {
        schema: {
          type: 'boolean',
        },
      },
    },
    disabledState: {
      type: 'toggle',
      displayName: '禁用',
      validation: {
        schema: {
          type: 'boolean',
        },
      },
    },
  },
  // 动作列表，需在组件中注册接受动作
  actions: [
    {
      handle: 'callme',
      displayName: '其他组件调用我',
      // 参数
      params: [
        {
          handle: 'num',
          displayName: '参数',
          defaultValue: '1',
        },
      ],
    },
  ],
  // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
  exposedVariables: {
    value5: '设置暴露默认值'
  },
  // 定义新建组件时的默认值
  definition: {
    others: {
      showOnDesktop: { value: '{{true}}' },
      showOnMobile: { value: '{{false}}' },
    },
    properties: {
      datas: {
        value:`{{[
{ title: '主页'},
{ title: '展示' },
{ title: '设置'}
]}}`,
      },
      value2: { value: true },
      value3: { value: 100 },
      value4: { value: '1' },
    },
    events: [],
    styles: {
      color: { value: '#CFD1F3' },
      visibility: { value: '{{true}}' },
      disabledState: { value: '{{false}}' },
    },
  },
}