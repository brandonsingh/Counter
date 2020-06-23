import React, {Component} from 'react';


const max = 20;
const min = 0;

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      check: true,
      text: "Single Step"
    };
  }


increment = () => {
  if(this.state.count === max) {
    alert('Cannot go above 20');
    this.setState({ count: max });
  }else if ((this.state.count === max-1 && this.state.check === false)){
    alert('Cannot go above 20');
    this.setState({ count: this.state.count });
  }else {   
    if (this.state.check === true) {
      this.setState( {
        count: this.state.count + 1
      });
    }else if (this.state.check === false) {
      this.setState( {
        count: this.state.count + 2
    });
   };
  };
};

decrement = () => {
  if(this.state.count === min) {
    alert('Cannot go below 0');
    this.setState({ count: min });
  }else if ((this.state.count === min+1 && this.state.check === false)){
    alert('Cannot go below 0');
    this.setState({ count: this.state.count });
  }else {    
     if (this.state.check === true) {
      this.setState( {
        count: this.state.count - 1
      });
    }else if (this.state.check === false) {
      this.setState( {
        count: this.state.count - 2
      }); 
    };
  };
};


toggle = () => {
  this.setState({ check: !this.state.check });
  if(this.state.check === true){
    this.setState({text: "Double Step"}) 
  }else if (this.state.check === false) {
    this.setState({text: "Single Step"})
  }
};

reset = () => {
    this.setState({ count: 0 })
};
  

  render() {
    return (
      <div className='container'>
        <div className='navbar'>Counter.js</div>
        <div className='counter'>
          <h1>{this.state.count}</h1>
          <button type='button' onClick={this.increment}>Increment</button>
          <button type='button' onClick={this.decrement}>Decrement</button>
          <button type='button' onClick={this.toggle}>{this.state.text}</button>
          <button type='button' onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  };
 };

export default Counter;
