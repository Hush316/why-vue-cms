import type { SearchConfigType } from '@/enums/commponents.config'
const searchConfig: SearchConfigType = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '部门名称',
      placeholder: '请输入查询的部门名称',
      initialValue: '',
    },
    {
      type: 'input',
      prop: 'leader',
      label: '部门领导',
      placeholder: '请输入查询的部门领导',
      initialValue: '',
    },
    {
      type: 'select',
      prop: 'enable',
      label: '选择状态',
      placeholder: '请选择状态',
      options: [
        { label: '启用', value: 0 },
        {
          label: '禁用',
          value: 1,
        },
      ],
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间',
      initialValue: '',
    },
  ],
}

export default searchConfig
