import { App } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElTabPane,
  ElTabs,
  ElLoading,
  ElMessage
} from 'element-plus'

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElTabPane,
  ElTabs
]
export const registerComponents: (app: App) => void = (app) => {
  for (const component of components) {
    app.component(component.name, component)
  }
}
