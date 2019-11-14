// 当前聊天对象
export const curUser = user => {
  return {
    type: 'CUR_USER',
    user
  }
}
// 显示好友信息
export const showUserInfo = (id) => {
  return {
    type: 'SHOW_USERINFO',
    id
  }
}
// 发送消息
export const msgsInfo = (msgInfo) => {
  return {
    type: 'ADD_MSG',
    msgInfo
  }
}
// 当前登录用户详情
export const personInfo = (person) => {
  return {
    type: 'PERSONAL',
    person
  }
}
