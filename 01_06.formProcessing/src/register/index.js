import React from 'react'
import './index.scss'

// 这里，我们使用受控组件来处理表单数据。

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      phone: '',
      username: '',
      password: ''
    }
  }

  handleChange(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleSubmit(e) {
    alert(`手机号：${this.state.phone} 昵称：${this.state.username} 密码：${this.state.password}`)
    e.preventDefault()
  }

  render() {
    return (
      <div className="container-login container-register">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <span className="input-tip">
              手机号：
            </span>
            <input type="text" value={this.state.phone} onChange={(event) => this.handleChange('phone', event)}/>
          </div>
          <div className="row">
            <span className="input-tip">
              昵&nbsp;&nbsp;&nbsp;&nbsp;称：
            </span>
              <input type="text" value={this.state.username} onChange={(event) => this.handleChange('username', event)}/>
          </div>
          <div className="row">
            <span className="input-tip">
              密&nbsp;&nbsp;&nbsp;&nbsp;码：
            </span>
              <input type="password" value={this.state.password} onChange={(event) => this.handleChange('password', event)}/>
          </div>
          <div className="row tc">
            <input type="submit" className="btn btn-login" value="注册"/>
          </div>
        </form>
        <div className="user-redirect" onClick={this.props.handleClick}>已有账号？直接登录</div>
      </div>
    )
  }
}

export default Register;
