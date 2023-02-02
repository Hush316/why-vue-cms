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
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              v-model="formData.realname"
              placeholder="请输入用户真实姓名"
            ></el-input>
          </el-form-item>
          <el-form-item v-if="!isEdit" label="密码" prop="password">
            <el-input
              v-model="formData.password"
              show-password
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="cellphone">
            <el-input
              v-model="formData.cellphone"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select
              v-model="formData.roleId"
              placeholder="请输入用户角色"
              style="width: 100%"
            >
              <template v-for="item in entireRoles" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select
              v-model="formData.departmentId"
              placeholder="请输入用户角色"
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
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: '',
})
const isEdit = ref(false)
const editData = ref<any>()
const mainStore = useMainStore()
const { entireDepartments, entireRoles } = storeToRefs(mainStore)
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
    systemStore.editUserAction(editData.value.id, formData)
  } else {
    systemStore.createUserAction(formData)
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
