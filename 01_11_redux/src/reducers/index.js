import { combineReducers } from 'redux'
import userInfo from './userInfo'
import showUserInfo from './showUserInfo'
import msgsInfo from './msgsInfo'
import personInfo from './personInfo'

export default combineReducers({
  userInfo,
  showUserInfo,
  msgsInfo,
  personInfo
})
