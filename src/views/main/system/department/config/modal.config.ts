import type { ModalConfigType } from '@/components/page-modal/type'
const config = {
  pageName: 'department',
  header: {
    newTitle: '新建部门',
    editTitle: '编辑部门',
  },
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '部门名称',
      placeholder: '请输入部门名称',
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
      prop: 'parentId',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: [],
    },
  ],
}

const modalConfig: ModalConfigType = config

export default modalConfig
