import React from 'react';

import LeftPanel from './main/leftPanel'
import RightPanel from './main/rightPanel'

import styles from  './App.module.scss';

class App extends React.Component {
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

export default App