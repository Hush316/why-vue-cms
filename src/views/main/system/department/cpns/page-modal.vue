<template>
  <div class="modal">
    <el-dialog
      v-model="centerDialogVisible"
      :title="isEdit ? '编辑用户' : '新建用户'"
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="100px">
          <el-form-item label="部门名称" prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输入部门名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="部门领导" prop="leader">
            <el-input
              v-model="formData.leader"
              placeholder="请输入部门领导"
            ></el-input>
          </el-form-item>
          <el-form-item label="上级部门" prop="parentId">
            <el-select
              v-model="formData.parentId"
              placeholder="请输入上级部门"
              style="width: 100%"
            >
              <template v-for="item in entireDepartments" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
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
import useMainStore from '@/stores/main'
import { storeToRefs } from 'pinia'
import userSystemStore from '@/stores/main/system'

const centerDialogVisible = ref(false)
let formData = reactive<any>({
  name: '',
  leader: '',
  parentId: '',
})
const isEdit = ref(false)
const editData = ref<any>()
const mainStore = useMainStore()
const { entireDepartments } = storeToRefs(mainStore)
const systemStore = userSystemStore()

function setModalVisible(type: 'edit' | 'create', row?: any) {
  centerDialogVisible.value = true
  if (type === 'edit') {
    isEdit.value = true
    editData.value = row
    console.log(editData.value)
    for (const key in row) {
      formData[key] = row[key]
    }
  } else {
    isEdit.value = false
    editData.value = null
    for (const key in formData) {
      formData[key] = ''
    }
  }
}

const handleConfirmClick = () => {
  centerDialogVisible.value = false
  if (isEdit.value && editData.value) {
    systemStore.editPageUserAcion('department', editData.value.id, formData)
  } else {
    systemStore.createPageUserAcion('department', formData)
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
