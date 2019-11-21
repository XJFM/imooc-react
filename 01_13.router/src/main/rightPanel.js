import React from 'react'
import {connect} from 'react-redux'
import {msgsInfo} from '../actions'
import MsgItemMe from '../components/msgItemMe'
import MsgItemYou from '../components/msgItemYou'
import MsgTime from '../components/msgTime'

import styles from './right.module.scss'

class RightPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputMsg: ''
    }
  }
  handleInputChange = (e) => {
    this.setState({
      inputMsg: e.target.value
    })
  }
  sendMeg = () => {
    let msgInfo = {
      id: this.props.currentUserInfo.id,
      msg: this.state.inputMsg
    }
    this.props.onMsgSend(msgInfo)
    // state有变化是才会重新render
    document.getElementById('msgText').value = ''
    this.setState({
      inputMsg: ''
    })
  }
  render() {
    const {currentUserInfo, curMsgInfo, personInfo} = this.props
    console.log(personInfo)
    const data = {img: '', text: '12slakfdjlkajsf laskdjflaskdjflaskdjflaksjdflask312312'}
    return (
      <div className={`${styles.rightPanel} ${'box-sizing'} ${currentUserInfo.name ? '' : 'hide'}`}>
        <div className={styles.title}>
          <img src={currentUserInfo.img ? currentUserInfo.img : require('../assets/images/default-icon.png')} alt=""/>
          <span>{currentUserInfo.name}</span>
        </div>
        <div className={`${styles.chatContent} ${'box-sizing'}`}>
          <MsgTime time="11:52"/>
          <MsgItemYou msgInfo={data}/>
          {curMsgInfo[currentUserInfo.id] && curMsgInfo[currentUserInfo.id].map((msg, index) => 
            <MsgItemMe key={index} userInfo={personInfo} msgInfo={msg}/>
          )}
        </div>
        <div className={`${styles.chatEditor} ${'box-sizing'}`}>
          <textarea id="msgText" className={styles.msgTextarea} rows="1" maxLength="500" onChange={this.handleInputChange}></textarea>
          <button className={styles.sendBtn} onClick={this.sendMeg}>发送</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentUserInfo: state.userInfo,
    curMsgInfo: state.msgsInfo,
    personInfo: state.personInfo.person
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onMsgSend: (msgInfo) => dispatch((msgsInfo(msgInfo)))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightPanel)