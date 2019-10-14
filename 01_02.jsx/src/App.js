import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    standingTime: 0
  }
  timeChange () {
    setInterval(() => {
      const current = this.state.standingTime + 1
      this.setState({ standingTime: current })
    }, 1000)
  }
  convertTheTime (time) {
    if (time < 60) {
      return `${time}秒`
    } else if (time < 60 * 60) {
      return `${Math.floor(time/60)}分${time%60}秒`
    } else {
      return `你停留时间超过一小时，请刷新重新计时`
    }
  }
  componentDidMount () {
    this.timeChange()
  }
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <p>
            你在本页面停留时间：
            <b>
              { this.convertTheTime(this.state.standingTime) }
            </b>
          </p>
        </div>
      </div>
    )
  }
}

export default App;
