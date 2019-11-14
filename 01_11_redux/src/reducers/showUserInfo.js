function showUserInfo(state = {show: false, id: null}, action) {
  console.log(state)
  switch (action.type) {
    case 'SHOW_USERINFO':
      return {show: !state.show, id: action.id}
    default:
      return state
  }
}
export default showUserInfo
