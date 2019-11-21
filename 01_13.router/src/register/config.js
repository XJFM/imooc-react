export const Rules = {
  phone: [
    { require: true, message: '手机号不能为空' },
    { regular: /^1[2-9][0-9]{9}$/, message: '手机号格式不正确' }
  ],
  username: [
    { require: true, message: '昵称不能为空' },
    { min: 2, max: 20, message: '昵称长度不能小于2位，并且不能超过20位' },
  ],
  password: [
    { require: true, message: '密码不能为空' },
    { regular: /^\w*$/, message: '密码格式不正确，只能输入字母、数字、下划线' },
    { min: 6, max: 20, message: '密码长度不能小于6位，并且不能超过20位' },
  ]
}

export function verify (value, rules) {
  let verifyResult = { error: true, message: '填写必填项' }
  for (const rule of rules) {
    /* 校验的几种方式
     * 针对 require | regular | min | max 做了处理
     * 如果有其他的规则，同样可以在这里添加 */
    const errorVerify = (rule.require && value === '') ||
                        (rule.regular && !rule.regular.test(value)) ||
                        (rule.min && value.length < rule.min) ||
                        (rule.max && value.length > rule.max)
    // 校验错误，则返回error及message，并跳出循环，不继续执行循环
    if (errorVerify) {
      verifyResult = { error: true, message: rule.message }
      break
    }
    // 校验成功，将 error 设置为 false
    verifyResult = { error: false, message: '' }
  }
  return verifyResult
}

/* 提交校验 */
export function submitVerify (state) {
  let verifyResult = {}
  /* 从Rules中取key值 */
  const keyArray = Object.keys(Rules)
  /* 这里通过循环对 Rules 中的每个值进行了遍历，
   * 并在每次遍历的过程中，都使用 verify() 函数进行验证处理 */
  for (const key of keyArray) {
    const rules = Rules[key]
    /* 单次处理和我们在失去焦点时处理方式一样 */
    verifyResult = verify(state[key], rules)
    /* 如果发现填写的有错误项，直接退出循环 */
    if (verifyResult.error) break
  }
  return verifyResult
}