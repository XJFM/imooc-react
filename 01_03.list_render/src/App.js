import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    const tabMenu = [{
      title: '常用联系人',
      tag: ''
    }, {
      title: '好友',
      tag: ''
    }, {
      title: '群组',
      tag: ''
    }]
    // map箭头函数 不能加花括号 只能是单行
    const tabMenuLi = tabMenu.map((item, index) =>
      <li key={item.title}>
        {item.title}
      </li>
    );
    return (
      <ul className="tab">
        { tabMenuLi }
      </ul>
    )
  }
}

export default App;
