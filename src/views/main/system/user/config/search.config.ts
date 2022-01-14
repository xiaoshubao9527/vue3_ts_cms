import { INhForm } from '@/base-ui/form'

export const nhFormConfig: INhForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号'
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
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 20px' },
  colLayout: { span: 8 }
}
