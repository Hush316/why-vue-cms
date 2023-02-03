import type PageModal from '@/components/page-modal/page-modal.vue'
import { ref } from 'vue'

function usePageModal() {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  const handleCreateClick = () => {
    modalRef.value?.setModalVisible('create')
  }
  const handleEditClick = (row: any) => {
    modalRef.value?.setModalVisible('edit', row)
  }
  return {
    modalRef,
    handleCreateClick,
    handleEditClick,
  }
}

export default usePageModal
