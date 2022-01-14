export const nhTableConfig = {
  showSelectColumns: false,
  showIndexColumns: false,
  showPagenation: false,
  propsList: [
    {
      prop: 'name',
      label: '菜单名称',
      width: '100'
    },
    {
      prop: 'url',
      label: '菜单url',
      width: '100'
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
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: { children: 'children' }
  }
}
