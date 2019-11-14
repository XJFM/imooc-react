import React from 'react'

import styles from './msgItem.module.scss'

function MsgItemYou(props) {
  return (
    <div className={`${styles.item} ${styles.itemYou}`}>
      <img className={styles.img} src={props.msgInfo.img ? props.magInfo.img : require('../assets/images/default-icon.png')} alt=""/>
      <div className={styles.msg}>
        <div className={styles.msgText}>
          <div className={styles.box}>{props.msgInfo.text}</div>
        </div>
      </div>
    </div>
  )
}

export default MsgItemYou