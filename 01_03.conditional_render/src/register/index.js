import React from 'react'
import './index.scss'

function Register(props) {
  return (
    <div className="container-login container-register">
      <form>
        <div className="row">
          <span className="input-tip">
            手机号：
          </span>
          <input type="text"/>
        </div>
        <div className="row">
          <span className="input-tip">
            昵&nbsp;&nbsp;&nbsp;&nbsp;称：
          </span>
            <input type="text"/>
        </div>
        <div className="row">
          <span className="input-tip">
            密&nbsp;&nbsp;&nbsp;&nbsp;码：
          </span>
            <input type="password"/>
        </div>
        <div className="row tc">
          <input type="submit" className="btn btn-login" value="注册"/>
        </div>
      </form>
      <div className="user-redirect" onClick={props.handleClick}>已有账号？直接登录</div>
    </div>
  )
}

export default Register;
