import React from 'react'

import {connect} from 'react-redux'
import {personInfo} from '../actions'

import {friendAll, groupAll, userInfo} from '../API/data'

import styles from './left.module.scss'
import PanelList from '../components/panelList'

// import API from '../API/index'

function formatData(arr) {
  return arr.filter(v => v.status === 20).map(item => {
    return {
      id: item.user.id,
      img: item.user.portraiUri,
      name: item.user.nickname,
      origin: item
    }
  })
}
function formatGroupData(arr) {
  return arr.map(item => {
    return {
      id: item.group.id,
      img: item.group.portraitUri,
      name: item.group.name,
      origin: item
    }
  })
}

class LeftPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      selectTab: 1,
      sessionsList: [
        // {id: 1, img: 'https://app.yunxin.163.com/webdemo/im/images/normal.png', name: 'web开发讨论组', time: '13:34', msg: '[langren加入群]'},
        // {id: 2, img: 'https://app.yunxin.163.com/webdemo/im/images/normal.png', name: 'web开发讨论组', time: '13:34', msg: '[langren加入群]'},
        // {id: 3, img: 'https://app.yunxin.163.com/webdemo/im/images/normal.png', name: 'web开发讨论组', time: '13:34', msg: '[langren加入群]'},
      ],
      groupsList: [],
      friendsList: [],
      showAddFriendModal: false,
      showAddGroupModal: false,
      showEditUser: false
    }
  }

  componentDidMount() {
    // this.onFriendAll()
    // this.getAllGroup()
    // this.getUserInfo()
    this.setState({
      userInfo: userInfo.result,
      friendsList: formatData(friendAll.result),
      groupsList: formatGroupData(groupAll.result)
    })
    this.props.onPersonal(userInfo.result)
  }

  getUserInfo = () => {
    // API.get(`/user/${sessionStorage.userId}`).then(res => {
      this.setState({
        userInfo: userInfo.result
      })
      // this.props.onPersonal(res.result)
    // })
  }

  switchTab = (event, type) => {
    this.setState({
      selectTab: type
    })
    // if (type === 2) {
    //   this.onFriendAll()
    // }
    event.preventDefault()
  }
  // 添加好友
  handleAddFriend = () => {
    this.setState({
      showAddFriendModal: true
    })
  }
  closeAddFriendModal = () => {
    this.setState({showAddFriendModal: false})
  }
  onFriendAll = () => {
    // API.get('/friendship/all').then(res => {
    this.setState({
      friendsList: formatData(friendAll.result)
    })
    // })
  }

  // 群相关
  closeAddGroupModal = () => {
    this.setState({showAddGroupModal: false})
  }
  getAllGroup = () => {
    // API.get('/user/groups').then(res => {
    this.setState({
      groupsList: formatGroupData(groupAll.result)
    })
    // })
  }

  handleTeamsItemClick = (id) => {
    // 创建群
    if (id === 1) {
      this.setState({showAddGroupModal: true})
    }
    
  }
  // 编辑个人信息
  handleShowEditUser = () => {
    this.setState({
      showEditUser: true
    })
  }
  closeEditUser = () => {
    this.setState({
      showEditUser: false
    })
  }
  
  render() {
    // const {userInfo, sessionsList, friendsList, teamsList} = this.props;
    return (
      <div className={styles.leftPanel}>
        <div className={styles.title}>
          <img src={this.state.userInfo.portraitUri ? this.state.userInfo.portraitUri : require('../assets/images/default-icon.png')} alt="" width="56" height="56" className="radius-circle avatar"/>
          <span className={styles.userName}>{this.state.userInfo.nickname}</span>
          <span><i onClick={this.handleShowEditUser} className={`${styles.cursor} ${'fa fa-pencil'}`}></i></span>
        </div>
        <div className={styles.switchPanel}>
          <a href="javascript(0):;" onClick={(event) => {this.switchTab(event, 1)}}>
            <i className={`${this.state.selectTab === 1 ? 'blue' : 'gray'} ${'fa fa-user-circle'}`}></i>
            <span className={`${this.state.selectTab === 1 ? styles.trangle : ''}`}></span>

          </a>
          <a href="javascript(0):;" onClick={(event) => {this.switchTab(event, 2)}}>
          <i className={`${this.state.selectTab === 2 ? 'blue' : 'gray'} ${'fa fa-user'}`}></i>
            <span className={`${this.state.selectTab === 2 ? styles.trangle : ''}`}></span>
          </a>
          <a href="javascript(0):;" onClick={(event) => {this.switchTab(event, 3)}}>
          <i className={`${this.state.selectTab === 3 ? 'blue' : 'gray'} ${'fa fa-users'}`}></i>
            <span className={`${this.state.selectTab === 3 ? styles.trangle : ''}`}></span>
          </a>
        </div>
        {this.state.selectTab === 1 && <div className={`${styles.item}`}>
          <PanelList list={this.state.sessionsList}/>
        </div>}
        {this.state.selectTab === 2 && <div className={`${styles.item}`}>
          <PanelList list={this.state.friendsList}/>
        </div>}
        {this.state.selectTab === 3 && <div className={`${styles.item}`}>
          <PanelList list={this.state.groupsList}/>
        </div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    personInfo: state.personInfo.person
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onPersonal: (user) => dispatch((personInfo(user)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);