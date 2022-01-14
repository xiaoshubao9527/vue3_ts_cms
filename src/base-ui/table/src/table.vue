<template>
  <div class="nh-table">
    <div class="header">
      <slot name="header">
        <h2>{{ title }}</h2>
        <el-button type="primary" @click="handleClickCreateBtn">新增</el-button>
      </slot>
    </div>
    <el-table
      :data="listData"
      style="width: 100%"
      border
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumns"
        type="selection"
        align="center"
        width="100px"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndexColumns"
        type="index"
        align="center"
        width="100px"
        label="索引"
      >
      </el-table-column>
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column
          show-overflow-tooltip
          align="center"
          :label="item.label"
          :min-width="item.width"
          :prop="item.prop"
          :fixed="item.fixed"
        >
          <template #default="scoped">
            <slot :name="item.slotName" :row="scoped.row">
              {{ scoped.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <div class="table-page" v-if="showPagenation">
          <el-pagination
            :currentPage="pageInfo.currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageInfo.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="listDataCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'nh-table',
  props: {
    title: {
      type: String,
      default: ''
    },
    showPagenation: {
      type: Boolean,
      default: () => true
    },
    listData: {
      // table总数据
      type: Array,
      required: true
    },
    listDataCount: {
      // 分页的total
      type: Number,
      default: 0
    },
    propsList: {
      // table的列
      type: Array,
      required: true
    },
    pageInfo: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    showSelectColumns: {
      // 是否显示列的多选
      type: Boolean,
      default: false
    },
    showIndexColumns: {
      // 是否显示索引
      type: Boolean,
      default: false
    },
    // 显示下拉树形配置
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['selectionChange', 'update:pageInfo', 'handleClickCreate'],
  setup(props, { emit }) {
    // checkbox多选事件
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    const handleSizeChange = (pageSize: number) => {
      emit('update:pageInfo', { ...props.pageInfo, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:pageInfo', { ...props.pageInfo, currentPage })
    }
    const handleClickCreateBtn = () => {
      emit('handleClickCreate')
    }
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange,
      handleClickCreateBtn
    }
  }
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 20px;
}
.nh-table {
  margin-top: 30px;
  border-top: 20px solid #f5f5f5;
}
.form-btn {
  text-align: right;
}
.table-page {
  text-align: right;
  margin-top: 20px;
}
</style>
