import { ref } from 'vue'

import PageContent from '@/components/page-content'

export default function () {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleReset = () => {
    pageContentRef.value?.getListData()
  }
  const handleSubmit = (data: any) => {
    pageContentRef.value?.getListData(data)
  }

  return {
    pageContentRef,
    handleReset,
    handleSubmit
  }
}
