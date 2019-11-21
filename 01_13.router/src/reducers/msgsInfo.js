function msgsInfo(state = {}, action) {
  switch (action.type) {
    case 'ADD_MSG':
      // state.push(action.msgInfo)
      state[action.msgInfo.id] = state[action.msgInfo.id] ? state[action.msgInfo.id] : []
      state[action.msgInfo.id].push(action.msgInfo.msg)
      return state
    default:
      return state
  }
}
export default msgsInfo
