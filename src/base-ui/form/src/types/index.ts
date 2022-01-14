type FormItemType = 'input' | 'password' | 'select' | 'datePicker'

interface IOptions {
  label: string
  value: string
}
export interface IFormItemType {
  field: string
  type: FormItemType
  label: string
  rules?: any[]
  placeholder?: string
  // select的属性
  options?: IOptions[]
  // ohter options
  otherOptions?: any
}
export interface INhForm {
  formItems: IFormItemType[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
