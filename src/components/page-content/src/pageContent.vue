<template>
  <div class="page-content">
    <nh-table
      :listData="dataList"
      :listDataCount="dataListCount"
      v-model:pageInfo="pageInfo"
      v-bind="nhTableConfig"
      @handleClickCreate="handleClickCreate"
    >
      <template #status="scoped">
        <el-button
          plain
          size="small"
          :type="scoped.row.enable ? 'success' : 'danger'"
          >{{ scoped.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scoped">
        {{ $filter.formateUTCString(scoped.row.createAt) }}
      </template>
      <template #updateAt="scoped">
        {{ $filter.formateUTCString(scoped.row.updateAt) }}
      </template>
      <template #options>
        <div>
          <el-button plain size="small" type="warning" v-if="isUpdate"
            >修改</el-button
          >
          <el-button plain size="small" type="danger" v-if="isDelete"
            >删除</el-button
          >
        </div>
      </template>
      <!-- <template #image="scoped">
        <slot name="image" :row="scoped.row"></slot>
      </template> -->
      <template v-for="item in extraSlots" #[item]="scoped" :key="item">
        <slot :name="item" :row="scoped.row"></slot>
      </template>
    </nh-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'

import { usePagePermission } from '@/hooks/use-page-permission'

import NhTable from '@/base-ui/table/index'

export default defineComponent({
  name: 'page-content',
  props: {
    propName: {
      type: String,
      required: true
    },
    nhTableConfig: {
      type: Object,
      required: true
    },
    extraSlots: {
      type: Array,
      default: () => []
    }
  },
  components: {
    NhTable
  },
  setup(props) {
    // 1.获取tabel的data和count
    const store = useStore()
    const dataList = computed(() =>
      store.getters['system/getDataList'](props.propName)
    )
    const dataListCount = computed(() =>
      store.getters['system/getDataListCount'](props.propName)
    )
    const pageInfo = ref({
      currentPage: 0,
      pageSize: 10
    })
    // 2.监听分页page
    watch(pageInfo, () => getListData())

    // 3.获取按钮权限
    // 增
    const isCreate = usePagePermission(
      props.propName,
      'create',
      store.state.login.permissions
    )
    // 删
    const isDelete = usePagePermission(
      props.propName,
      'delete',
      store.state.login.permissions
    )
    // 修
    const isUpdate = usePagePermission(
      props.propName,
      'update',
      store.state.login.permissions
    )
    // 查
    const isQuery = usePagePermission(
      props.propName,
      'query',
      store.state.login.permissions
    )

    // 4.请求页面表格数据
    const getListData = (data: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        propName: props.propName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...data
        }
      })
    }
    getListData()

    // 点击新增按钮
    const handleClickCreate = () => {
      if (!isCreate) return
      console.log('这是增新按钮')
    }

    return {
      dataList,
      dataListCount,
      pageInfo,
      getListData,
      isDelete,
      isUpdate,
      isQuery,
      handleClickCreate
    }
  }
})
</script>

<style scoped>
.form-btn {
  text-align: right;
}
</style>
