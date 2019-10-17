import React from 'react'

import styles from './index.module.scss'

// 这里，我们使用受控组件来处理表单数据
// 在一个受控组件中，表单数据是由 React 组件来管理的
// Function components cannot have refs 所以需要用 class方式创建组件

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
  }
  
  handleLoginClick(e) {
    console.log(this)
  }

  render() {
    return (
      <div className={styles['container-login']}>
        <form onSubmit={this.handleLoginClick}>
          <div className={styles.row}>
            <span className={styles.icon}>
              <i className={`${styles.fa} ${'fa fa-user'}`}></i>
            </span>
            <input type="text" ref="name"/>
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
        <div className={styles['user-redirect']} onClick={this.props.handleClick}>注册</div>
      </div>
    )
  }
}


export default Login