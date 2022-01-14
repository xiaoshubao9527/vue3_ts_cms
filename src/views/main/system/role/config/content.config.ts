export const nhTableConfig = {
  showSelectColumns: true,
  showIndexColumns: true,
  propsList: [
    {
      prop: 'name',
      label: '角色名',
      width: '100'
    },
    {
      prop: 'intro',
      label: '角色介绍',
      width: '200'
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
