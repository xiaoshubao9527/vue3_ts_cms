<template>
  <div class="nh-form">
    <!-- 顶部插槽 -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <!-- 表单搜索 -->
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <!-- input || input=password -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :style="{ width: '100%' }"
                  :placeholder="item.placeholder"
                  :model-value="modelValue[item.field]"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  @update:modelValue="
                    handleUpdateModelValue($event, item.field)
                  "
                ></el-input>
              </template>
              <!-- select -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :style="{ width: '100%' }"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="
                    handleUpdateModelValue($event, item.field)
                  "
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                    >{{ option.label }}</el-option
                  >
                </el-select>
              </template>
              <!-- datepicker -->
              <template v-else-if="item.type === 'datePicker'">
                <el-date-picker
                  type="daterange"
                  :style="{ width: '100%' }"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="
                    handleUpdateModelValue($event, item.field)
                  "
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!-- 底部插槽 -->
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { IFormItemType } from '../index'

export default defineComponent({
  name: 'nh-form',
  props: {
    formItems: {
      type: Array as PropType<IFormItemType[]>,
      required: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({})
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 8,
        sm: 12,
        xs: 24
      })
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const newFormData = ref({ ...props.modelValue })

    // watch(
    //   newFormData,
    //   (newValue) => {
    //     emit('update:modelValue', newValue)
    //   },
    //   { deep: true }
    // )

    const handleUpdateModelValue = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      handleUpdateModelValue
    }
  }
})
</script>

<style scoped>
.nh-form {
  padding-top: 20px;
}
</style>
