import nhRequest from '../../index'

import { IResponse } from '../../types'

export function getPageList(payload: any) {
  return nhRequest.post<IResponse>({
    url: payload.pageUrl,
    data: payload.queryInfo
  })
}
