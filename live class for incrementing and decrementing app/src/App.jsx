import { Component, useState } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <div className='main'>
        <button onClick={() => this.setState({ num: this.state.num + 1 })} className='plus'>
          +
        </button>
        <button onClick={() => this.setState({ num: this.state.num - 1 })} className='minus'>
          -
        </button>
        <button onClick={() =>  this.setState({ num: 0})} className='reset'>RESET</button></div>
      </div>
    );
  }
}

export default App;
