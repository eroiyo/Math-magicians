import React, { PureComponent } from 'react';
import Keyboard from './Keyboard';
import Screen from './Screen'

const Calculator = class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: '0', next: null, operation: null, };
  }

  render() {
    return (
      <div className="calculator">
        <Screen />
        <Keyboard />
      </div>
    );
  }
};

Calculator.displayName = 'Calculator';

export default Calculator;
