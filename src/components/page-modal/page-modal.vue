<template>
  <div class="modal">
    <el-dialog
      v-model="centerDialogVisible"
      :title="
        isEdit ? modalConfig.header.editTitle : modalConfig.header.newTitle
      "
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="100px">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                ></el-date-picker>
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.prop]"
                  type="daterange"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option
                      :label="option.label"
                      :value="option.value"
                    ></el-option>
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import userSystemStore from '@/stores/main/system'
import modalConfig from '@/views/main/system/department/config/modal.config'

interface IProps {
  modalConfig: {
    pageName: string
    header: {
      newTitle: string
      editTitle: string
    }
    formItems: any[]
  }
}

const props = defineProps<IProps>()

const initialData: any = {}
for (const item of props.modalConfig.formItems) {
  initialData[item.prop] = item.initialValue ?? ''
}
const centerDialogVisible = ref(false)
let formData = reactive(initialData)
const isEdit = ref(false)
const editData = ref<any>()
const systemStore = userSystemStore()

function setModalVisible(type: 'edit' | 'create', row?: any) {
  centerDialogVisible.value = true
  if (type === 'edit') {
    isEdit.value = true
    editData.value = row
    for (const key in row) {
      formData[key] = row[key]
    }
  } else {
    isEdit.value = false
    editData.value = null
    for (const key in formData) {
      const item = modalConfig.formItems.find((item) => item.prop === key)
      formData[key] = item ? item.initialValue : ''
    }
  }
}

const handleConfirmClick = () => {
  centerDialogVisible.value = false
  if (isEdit.value && editData.value) {
    systemStore.editPageUserAcion(
      modalConfig.pageName,
      editData.value.id,
      formData,
    )
  } else {
    systemStore.createPageUserAcion(modalConfig.pageName, formData)
  }
}

defineExpose({
  setModalVisible,
})
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 40px;
}

.form {
  padding: 0 20px;
}
</style>
