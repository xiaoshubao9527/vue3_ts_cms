export const nhTableConfig = {
  showSelectColumns: true,
  showIndexColumns: true,
  propsList: [
    {
      prop: 'name',
      label: '商品名称',
      width: '100'
    },
    {
      prop: 'oldPrice',
      label: '旧的价格',
      width: '100',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '新的价格',
      width: '100'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      width: '100',
      slotName: 'image'
    },
    {
      prop: 'status',
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
