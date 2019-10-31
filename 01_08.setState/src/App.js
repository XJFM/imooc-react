import React from "react"
import './App.css'

// setState 在 合成事件、生命周期、原生事件和 setTimeout 四种场景中的使用
class App extends React.Component {
  state = {
    synthetic: 'old synthetic value',
    lifeCycle: 'old life cycle value',
    native: 'old native value',
    timeout: 'old timeout value'
  }

  componentDidMount() {
    document.getElementById('native').addEventListener('click', this.handleNative)
    this.setState({
      lifeCycle: 'new life cycle value'
    })
    console.log('this.state.lifeCycle', this.state.lifeCycle) // old life cycle value
  }

  handleSynthetic = () => {
    this.setState({
      synthetic: 'new synthetic value'
    })
    console.log('this.state.synthetic', this.state.synthetic) // old synthetic value
  }

  handleNative = () => {
    this.setState({
      native: 'new native value'
    })
    console.log('this.state.native', this.state.native) // new native value
  }

  handleTimeout = () => {
    setTimeout(() => {
      this.setState({
        timeout: 'new timeout value'
      })
      console.log('this.state.timeout', this.state.timeout) // new timeout value
      this.setState({
        timeout: 'new new timeout value'
      })
      console.log('this.state.timeout', this.state.timeout) // new new timeout value
    }, 100)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleSynthetic}>合成事件：{this.state.synthetic}</button>
        <button id="native">原生事件：{this.state.native}</button>
        <button onClick={this.handleTimeout}>setTimeout：{this.state.timeout}</button>
      </div>
    )
  }
}

export default App