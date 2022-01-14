import { App } from 'vue'
import dayjs from 'dayjs'

const DEFAULT_FORMATE = 'YYYY-MM-DD HH:mm:ss'

const registerGlobalConfig = (app: App) => {
  app.config.globalProperties.$filter = {
    formateUTCString: (utc: string, formate: string = DEFAULT_FORMATE) => {
      return dayjs(utc).format(formate)
    }
  }
}

export default registerGlobalConfig
