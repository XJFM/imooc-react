import React from 'react'

import Login from './login'
import Rejister from './register'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }
  handleClick = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  render() {
    return (
      <div className="container-login-register">
        { this.state.isLogin ? <Login handleClick={this.handleClick}/> : <Rejister handleClick={this.handleClick}/>}
      </div>
    )
  }
}

export default App;