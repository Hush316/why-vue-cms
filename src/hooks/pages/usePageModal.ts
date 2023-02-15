import type PageModal from '@/components/page-modal/page-modal.vue'
import { ref } from 'vue'

type EditCB = (data: any) => void

function usePageModal(editCallback?: EditCB) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  const handleCreateClick = () => {
    modalRef.value?.setModalVisible('create')
  }
  const handleEditClick = (row: any) => {
    console.log(row.menuList)
    modalRef.value?.setModalVisible('edit', row)
    if (editCallback) {
      editCallback(row)
    }
  }
  return {
    modalRef,
    handleCreateClick,
    handleEditClick,
  }
}

export default usePageModal
