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
    value1: {
      // 输入属性的输入框类型
      type: 'code',
      // 显示名称
      displayName: '我是属性1',
      validation: {
        schema: {
          type: 'array',
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
  events: { onClick: { displayName: '点击事件' } },
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
  // 暴露的值，用于调用
  exposedVariables: { value5: '我是value5' },
  // 定义默认值
  definition: {
    others: {
      showOnDesktop: { value: '{{true}}' },
      showOnMobile: { value: '{{false}}' },
    },
    properties: {
      value1: {
        value:
          "{{[ \n\t\t{ title: '主页'}, \n\t\t{ title: '展示' }, \n\t\t{ title: '设置'} \n ]}}",
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