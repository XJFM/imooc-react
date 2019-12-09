import React from 'react'

import Login from './login'
import Register from './register'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="container-login-register">
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </div>
    )
  }
}

export default App