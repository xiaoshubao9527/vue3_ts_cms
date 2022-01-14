import { App } from 'vue'
// import { registerComponents } from './register-component'
import registerGlobalConfig from './register-global-config'

export const registerApp: (app: App) => void = (app) => {
  // registerComponents(app)
  registerGlobalConfig(app)
}
