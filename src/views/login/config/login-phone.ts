export const phoneFormRules = {
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: ['blur', 'change']
    },
    {
      pattern: /^1[3-9]\d{9}$/i,
      message: '请输入正确的手机号',
      trigger: ['blur', 'change']
    }
  ],
  code: [
    {
      required: true,
      message: '请输入手机验证码',
      trigger: ['blur', 'change']
    },
    {
      pattern: /^[a-z0-9]{4}$/i,
      message: '手机验证码长度为4位',
      trigger: ['blur', 'change']
    }
  ]
}
