import React from 'react'
import './App.css'
import { unstable_renderSubtreeIntoContainer, unmountComponentAtNode } from 'react-dom'

class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }

    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }

  componentDidMount() {
    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)

    this.renderPortal()
  }

  renderPortal() {
    unstable_renderSubtreeIntoContainer(
      this, //代表当前组件
      <>
        <div className="dialog">
          这是一个 dialog
        </div>
      </>, // 放入传送门的 JSX
      this.node // 传送至另一端的 DOM node
    )
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.node);
    window.document.body.removeChild(this.node);
  }

  render() {
    // render null 表示什么都不渲染
    return null
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
