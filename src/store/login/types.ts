export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}

export interface ILoginRequest {
  name: string
  password: string
}
