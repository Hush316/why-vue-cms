const searchConfig = {
  labelWidth: '100px',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入查询的角色名称',
      initialValue: '啊啊啊',
    },
    {
      type: 'input',
      prop: 'leader',
      label: '权限介绍',
      placeholder: '请输入查询的权限介绍',
      initialValue: '',
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
