import React from 'react'
import styles from './panelItem.module.scss'

import {connect} from 'react-redux'
import {curUser} from '../actions'

function PanelItem(props) {
  const handleClick = () => {
    props.onItemClick(props.item.id)
    if (props.item.origin) {
      onCurItemClick(props.item)
    }
  }
  const {onCurItemClick} = props

  return (
    <li className={`${styles.panel_item} ${props.activeId === props.item.id ? styles.active : ''}`} onClick={handleClick}>
      <div className={styles.panel_avatar}>
        <img className={styles.panel_image} src={props.item.img ? props.item.img : require('../assets/images/default-icon.png')} alt=""/>
      </div>
      <div className={styles.panel_text}>
        <span>{props.item.name}</span>
        <b>{props.item.time}</b>
      </div>
    </li>
  )
}
function mapStateToProps(state) {
  return {
    currentUserInfo: state.userInfo
    // showModal: state.showUserInfo
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onCurItemClick: (item) => dispatch((curUser(item))),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PanelItem)
