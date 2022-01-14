import { INhForm } from '@/base-ui/form'

export const nhFormConfig: INhForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'createAt',
      type: 'datePicker',
      label: '时间',
      otherOptions: {
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间'
      }
    }
  ]
}
