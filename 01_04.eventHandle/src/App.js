import React from 'react'
import "./App.css"

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      val: 0
    }
  }

  handleClick (type) {
    // 在React中，若直接改变 state 会触发警报。因此借助 value 值来实现。
    let value = this.state.val
    this.setState({val: type ? ++value : --value})
  }

  render () {
    return (
      <div className="App">
        <input type="button" value="-" onClick={this.handleClick.bind(this, 0)} />
        <input type="text" value={this.state.val} disabled/>
        <input type="button" value="+" onClick={this.handleClick.bind(this, 1)} />
      </div>
    )
  }
}

export default App;
