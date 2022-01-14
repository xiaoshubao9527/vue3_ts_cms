import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  password: string
}

interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type StoreType = IRootState & IRootWithModule
