import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      phone: '',
      username: '',
      password: '',
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()

    alert(`手机号：${this.state.phone} 昵称：${this.state.username} 密码：${this.state.password}`)
  }
  render() {
    return (
      <div className="container-login container-register">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <span className="input-tip">
              手机号：
            </span>
            <input type="text" value={this.state.phone} name="phone" onChange={this.handleChange}/>
          </div>
          <div className="row">
            <span className="input-tip">
              昵&nbsp;&nbsp;&nbsp;&nbsp;称：
            </span>
              <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
          </div>
          <div className="row">
            <span className="input-tip">
              密&nbsp;&nbsp;&nbsp;&nbsp;码：
            </span>
              <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
          </div>
          <div className="row tc">
            <input type="submit" className="btn btn-login" value="注册"/>
          </div>
        </form>
        <div className="user-redirect">
          <Link to="/">已有账号？直接登录</Link>
        </div>
      </div>
    )
  }

}

export default Register;
