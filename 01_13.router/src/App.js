import React from 'react'

import Login from './login'
import Register from './register'
import LeftPanel from './main/leftPanel'
import RightPanel from './main/rightPanel'
import styles from  './App.module.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={`${styles.mainWrapper} ${'box-sizing'}`}>
          <LeftPanel>
          </LeftPanel>
          <RightPanel></RightPanel>
        </div>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <Router>
      <div className={styles['container-login-register']}>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
          </Switch>
      </div>
      <Route exact path="/main" component={Main}></Route>
      </Router>



)
  }




}

export default App