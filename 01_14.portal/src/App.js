import React from 'react'
import './App.css'
import { createPortal } from 'react-dom'

/* 定义传送门显示端的 DOM 元素 */
const createDiv = () => {
    const divElement = document.createElement('div')
    document.body.appendChild(divElement)
    return divElement
}

class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
    
    /* 定义传送门显示端的 DOM 元素 */
    this.node = createDiv()
  }
  componentWillUnmount() {
    document.body.removeChild(this.node)
  }
  render () {
    return createPortal(
      <>
        <div className="dialog">
          这是一个 dialog
        </div>
      </>,  // 放入传送门的 JSX
      this.node // 传送至另一端的 DOM node
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <div className="container">
        <div className="container-right">
          <button className="container-button" onClick={this.handleClick}>
            {this.state.visible ? '隐藏' : '显示'}
          </button>
          {this.state.visible && <Dialog />}
        </div>
      </div>
    )
  }
}

export default App;
