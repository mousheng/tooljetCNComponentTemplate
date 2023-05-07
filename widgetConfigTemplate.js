x={
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
      width: 30,
      height: 300,
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
            element: {
              type: 'object',
              object: {
                id: {
                  type: 'union',
                  schemas: [{ type: 'string' }, { type: 'number' }],
                },
              },
            },
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
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'callme',
        displayName: '其他组件调用我',
        // 参数
        params: [
          {
            handle: 'id',
            displayName: '参数',
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
            "{{[ \n\t\t{ title: '主页', id: '0' }, \n\t\t{ title: '展示', id: '1' }, \n\t\t{ title: '设置', id: '2' } \n ]}}",
        },
        value2: { value: true },
        value3: { value: 100 },
      },
      events: [],
      styles: {
        color: { value: '#000' },
        visibility: { value: '{{true}}' },
      },
    },
  },