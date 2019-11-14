function personInfo(state = { user: {} }, action) {
  switch (action.type) {
    case 'PERSONAL':
      return action
    default:
      return state
  }
}
export default personInfo
