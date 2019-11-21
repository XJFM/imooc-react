import React from 'react'

import styles from './msgItem.module.scss'

function MsgItemMe(props) {
  return (
    <div className={`${styles.item} ${styles.itemMe}`}>
      <div className={styles.msg}>
        <div className={styles.msgText}>
          <div className={styles.box}>{props.msgInfo}</div>
        </div>
      </div>
      <img className={styles.img} src={props.userInfo.portraitUri ? props.userInfo.portraitUri : require('../assets/images/default-icon.png')} alt=""/>
    </div>
  )
}

export default MsgItemMe