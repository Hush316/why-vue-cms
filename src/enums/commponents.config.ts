export interface FormItemType {
  type: 'input' | 'select' | 'date-picker'
  prop?: string
  label?: string
  placeholder?: string
  initialValue?: any
  options?: any[]
}
export interface SearchConfigType {
  formItems: FormItemType[]
  labelWidth?: string
}
