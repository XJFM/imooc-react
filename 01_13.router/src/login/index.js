import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

// 这里，我们使用非受控组件来处理表单数据。

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    alert(`昵称：${this.refs.username.value} 密码：${this.refs.password.value}`)
    e.preventDefault()
  }

  render() {
    return (
      <div className={styles['container-login']}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.row}>
            <span className={styles.icon}>
              <i className={`${styles.fa} ${'fa fa-user'}`}></i>
            </span>
            <input type="text" ref="username"/>
          </div>
          <div className={styles.row}>
            <span className={styles.icon}>
              <i className={`${styles.fa} ${'fa fa-lock'}`}></i>
            </span>
            <input type="password" ref="password"/>
          </div>
          <div className={styles.row}>
            <button type="submit" className={`${styles.btn} ${styles['btn-login']}`} onClick={this.handleSubmit}>登录</button>
          </div>
        </form>
        <div className={styles['user-redirect']}>
          <Link to="/register">注册</Link>
        </div>
      </div>
    )
  }
}


export default Login