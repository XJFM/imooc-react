import React from 'react'
import { verify, submitVerify, Rules } from './config'
import './index.scss'

// 这里，我们使用受控组件来处理表单数据。

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      phone: '',
      username: '',
      password: '',
      sex: 'male',
      hobby: [],
      city: 'guangzhou'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckBoxChange = (e) => {
    let hobby = [...this.state.hobby]
    if (hobby.includes(e.target.value)) {
      hobby.splice(hobby.indexOf(e.target.value), 1)
    } else {
      hobby.push(e.target.value)
    }
    this.setState({
      [e.target.name]: hobby
    })
  }

  handleSelectChange = (e) => {
    this.setState({
     city: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    /* 提交校验 */
    const verifyResult = submitVerify(this.state)
    if (verifyResult.error) {
      alert(verifyResult.message)
      return
    }

    alert(`手机号：${this.state.phone} 昵称：${this.state.username} 密码：${this.state.password}`)
  }

  validator = {
    onBlur (e) {
      const rules = Rules[e.target.name]
      const value = e.target.value
      /* 失去焦点校验 */
      const verifyResult = verify(value, rules)
      if (verifyResult.error) {
        alert(verifyResult.message)
      }
    }
  }

  render() {
    return (
      <div className="container-login container-register">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <span className="input-tip">
              <i>*</i>手机号：
            </span>
            <input {...this.validator} type="text" value={this.state.phone} name="phone" onChange={this.handleChange}/>
          </div>
          <div className="row">
            <span className="input-tip">
              <i>*</i>昵&nbsp;&nbsp;&nbsp;&nbsp;称：
            </span>
            <input {...this.validator} type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
          </div>
          <div className="row">
            <span className="input-tip">
              <i>*</i>密&nbsp;&nbsp;&nbsp;&nbsp;码：
            </span>
            <input {...this.validator} type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
          </div>
          <div className="row other">
            <span className="input-tip">
              性&nbsp;&nbsp;&nbsp;&nbsp;别：
            </span>
            <input type="radio" name="sex" value="male" checked={this.state.sex === 'male'} onChange={this.handleChange}/>男&nbsp;&nbsp;
            <input type="radio" name="sex" value="female" checked={this.state.sex === 'female'} onChange={this.handleChange}/>女
          </div>
          <div className="row other">
            <span className="input-tip">
              爱&nbsp;&nbsp;&nbsp;&nbsp;好：
            </span>
            <input type="checkbox" name="hobby" value="basketball" checked={this.state.hobby.includes('basketball')} onChange={this.handleCheckBoxChange}/>篮球&nbsp;&nbsp;
            <input type="checkbox" name="hobby" value="football" checked={this.state.hobby.includes('football')} onChange={this.handleCheckBoxChange}/>足球&nbsp;&nbsp;
            <input type="checkbox" name="hobby" value="others" checked={this.state.hobby.includes('others')} onChange={this.handleCheckBoxChange}/>其他
          </div>
          <div className="row other">
            <span className="input-tip">
              城&nbsp;&nbsp;&nbsp;&nbsp;市：
            </span>
            <select value={this.state.city} onChange={this.handleSelectChange} placeholder="请选择城市">
              <option value="beijing">北京</option>
              <option value="shanghai">上海</option>
              <option value="guangzhou">广州</option>
            </select>
          </div>
          <div className="row tc">
            <button type="submit" className="btn btn-login">注册</button>
          </div>
        </form>
        <div className="user-redirect" onClick={this.props.handleClick}>已有账号？直接登录</div>
      </div>
    )
  }
}

export default Register;
