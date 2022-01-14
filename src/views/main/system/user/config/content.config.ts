export const nhTableConfig = {
  title: '用户列表',
  showSelectColumns: true,
  showIndexColumns: true,
  propsList: [
    {
      prop: 'name',
      label: '用户名',
      width: '100'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      width: '100'
    },
    {
      prop: 'cellphone',
      label: '电话号码',
      width: '200'
    },
    {
      prop: 'enable',
      label: '状态',
      width: '100',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      width: '180',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      width: '180',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      width: '180',
      slotName: 'options',
      fixed: 'right'
    }
  ]
}
