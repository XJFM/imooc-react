import React from 'react'

import styles from './index.module.scss'

function Login(props) {
  return (
    <div className={styles['container-login']}>
      <form>
        <div className={styles.row}>
          <span className={styles.icon}>
            <i className={`${styles.fa} ${'fa fa-user'}`}></i>
          </span>
          <input type="text"/>
        </div>
        <div className={styles.row}>
          <span className={styles.icon}>
            <i className={`${styles.fa} ${'fa fa-lock'}`}></i>
            <input type="password"/>
          </span>
        </div>
        <div className={styles.row}>
          <input type="submit" className={`${styles.btn} ${styles['btn-login']}`} value="登录"/>
        </div>
      </form>
      <div className={styles['user-redirect']} onClick={props.handleClick}>注册</div>
    </div>
  )
}

export default Login
