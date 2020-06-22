import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: (count) => {
        return ++count; },
      decrement(count) {
        return --count; }
    };
  };

  render() {
    return (
      <div className='container'>
        <div className='navbar'>Counter.js</div>
        <div className='counter'>
          <h1>{this.state.count}</h1>
          <button type='button'>Increment</button>
          <button type='button'>Decrement</button>
        </div>
      </div>
    );
  };
};





export default Counter;
