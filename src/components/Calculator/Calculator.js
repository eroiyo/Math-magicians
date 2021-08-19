import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Screen from './Screen';
import calculate from '../../logic/calculate';

const Calculator = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0', next: null, operation: null,
    };
  }

  handleClick = (buttonName) => {
    let total = {};
    if(this.state.total === 'Error'){
      this.state.total = '0';
    }
    switch (buttonName) {
      case 'AC':
        total = {
          total: 0,
          next: null,
          operation: null,
        };
        break;
      default:
        total = calculate(this.state, buttonName);
        break;
    }
    this.setState(total);
  };

  render() {
    const theState = this.state;
    return (
      <div className="calculator">
        <Screen total={!theState.next ? theState.total : theState.next} />
        <Keyboard onButtonClick={this.handleClick} />
      </div>
    );
  }
};

Calculator.displayName = 'Calculator';

export default Calculator;
