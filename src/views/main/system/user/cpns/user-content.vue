<template>
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column
          align="center"
          type="selection"
        ></el-table-column>
        <el-table-column
          type="index"
          align="center"
          label="序号"
          width="60px"
        ></el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="用户名"
          width="120px"
        />
        <el-table-column
          prop="realname"
          align="center"
          label="真实姓名"
        />
        <el-table-column
          prop="cellphone"
          align="center"
          label="手机号码"
        />
        <el-table-column
          prop="enable"
          align="center"
          label="状态"
          width="100px"
        >
          <template #default="scope">
            <el-button
              size="small"
              :type="scope.row.enable ? 'primary' : 'danger'"
              plain
            >
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        >
        <el-table-column
          prop="createAt"
          align="center"
          width="210px"
          label="创建时间"
        >
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="updateAt"
          align="center"
          width="210px"
          label="更新时间"
        >
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template #default="scope">
            <el-button
              icon="Edit"
              text
              type="primary"
              @click="handleEditClick(scope.row.id)"
              >编辑
            </el-button>
            <el-button
              icon="Delete"
              text
              type="danger"
              @click="handleDeleteClick(scope.row.id)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        small="small"
        layout="total, sizes, prev, pager, next, jumper"
        :total="usersTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import userSystemStore from '@/stores/main/system'
import { formatUTC } from '@/utils/format'

const systemStore = userSystemStore()

// 分页逻辑
const currentPage = ref(1)
const pageSize = ref(5)
fetchUsersList()

const { usersList, usersTotalCount } = storeToRefs(systemStore)

const handleSizeChange = () => {
  fetchUsersList()
}
const handleCurrentChange = () => {
  fetchUsersList()
}

const handleDeleteClick = (id: string) => {
  console.log('click delete', id)
}

const handleEditClick = (id: string) => {
  console.log('click edit', id)
}

// 封装多次发送请求
function fetchUsersList(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  const queryInfo = { ...pageInfo, ...formData }
  systemStore.getUsersListAction(queryInfo)
}

defineExpose({ fetchUsersList })
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;

    .title {
      font-size: 24px;
    }
  }

  .table {
    :deep(.el-table__cell) {
      padding: 12px 0;
    }

    .el-button {
      margin-left: 0;
      padding: 5px 18px;
    }
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
</style>
