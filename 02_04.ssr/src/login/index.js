import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    alert(`昵称：${this.refs.username.value} 密码：${this.refs.password.value}`)
    this.setState({
      redirect: true
    })
    e.preventDefault()
  }
  render() {
    return (
      <div className="container-login">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <span className="icon">
              <i className="fa fa-user'"></i>
            </span>
            <input type="text" ref="username"/>
          </div>
          <div className="row">
            <span className="icon">
              <i className="fa fa-lock"></i>
              <input type="password" ref="password"/>
            </span>
          </div>
          <div className="row">
            <input type="submit" className="btn btn-login" value="登录" />
          </div>
        </form>
        <div className="user-redirect">
          <Link to="/register">注册</Link>
        </div>
      </div>
    )
  }
}

export default Login
