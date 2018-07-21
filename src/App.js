import React, { Component } from 'react';
import {Icon} from 'antd'
import './App.css';

class App extends Component {
  render() {
     // <div className="uu"><a className="qq"  href="javascript:history.back(`-${this.state.num}`)"><Icon type="left"/></a></div>
    return (
      <div className="App">
      {this.props.children}
      </div>
    );
  }
}

export default App;
