import nhRequest from '../index'

import { ILoginRequest } from '@/store/login/types'
import { ILoginInfo } from './types'
import { IResponse } from '../types'

enum loginUlr {
  loginInfoUrl = '/login',
  userInfoUrl = '/users',
  userMenu = '/role'
}

export function requestLoginInfo(loginInfo: ILoginRequest) {
  return nhRequest.post<IResponse<ILoginInfo>>({
    url: loginUlr.loginInfoUrl,
    data: loginInfo
  })
}

export function requestUserInfoById(id: number) {
  return nhRequest.get<IResponse>({
    url: loginUlr.userInfoUrl + '/' + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return nhRequest.get<IResponse>({
    url: loginUlr.userMenu + '/' + id + '/menu'
  })
}
