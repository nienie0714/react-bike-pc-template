import React from 'react';
import Child from './Child';
import { Button } from 'antd';
import './index.less';
import 'antd/dist/antd.css';

export default class Life extends React.Component {
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //         count: 0
  //     }
  // }

  state = {
    count: 0
  };

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    // return <div style={{padding:50}}>
    return (
      <div className="content">
        <p>React生命周期介绍</p>
        <Button onClick={this.handleAdd}>Antd点击一下</Button>
        <button onClick={this.handleAdd}>点击一下</button>
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div>
    );
  }
}
