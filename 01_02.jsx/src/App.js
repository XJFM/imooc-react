import React from 'react';
import './App.less';

class App extends React.Component {
  state = {
    info: 'xxx2'
  }
  inputChange () {

  }
  
  addHandle () {

  }
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <input className="App-input" value={this.state.info} onChange={this.inputChange} />
        </div>
      </div>
    )
  }
}

export default App;
