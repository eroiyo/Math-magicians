import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Screen from './Screen'
import calculate from '../../logic/calculate'

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

const Calculator = class extends Component {
  constructor(props) {
    super(props);
    this.state = { total: '0', next: null, operation: null, total: '0' };
  }

  handleClick = (buttonName) => {
    let total = {};
    switch (buttonName) {
      case 'AC':
        total = {
          total: 0,
          next: null,
          operation: null,
        };
        break
      default:
        total = calculate(this.state, buttonName)
        break;
    }
    this.setState(total)

  };

  render() {
    return (
      <div className="calculator">
        <Screen total={!this.state.next ? this.state.total : this.state.next} />
        <Keyboard onButtonClick={this.handleClick} />
      </div>
    );
  }
};

Calculator.displayName = 'Calculator';

export default Calculator;
