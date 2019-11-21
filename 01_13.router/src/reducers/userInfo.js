function userInfo(state = { user: {} }, action) {
  switch (action.type) {
    case 'CUR_USER':
      return action.user
    default:
      return state
  }
}
export default userInfo
