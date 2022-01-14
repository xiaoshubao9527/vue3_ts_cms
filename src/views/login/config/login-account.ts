export const accountFormRules = {
  name: [
    {
      required: true,
      message: '请输入账号',
      trigger: ['blur', 'change']
    },
    {
      pattern: /^[a-z0-9]{5,8}$/i,
      message: '账号长度为5～8位',
      trigger: ['blur', 'change']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: ['blur', 'change']
    },
    {
      pattern: /^[a-z0-9]{5,8}$/i,
      message: '密码长度为5～8位',
      trigger: ['blur', 'change']
    }
  ]
}
