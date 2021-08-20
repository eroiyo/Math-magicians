import React, { useState } from 'react';
import Keyboard from './Keyboard';
import Screen from './Screen';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const normal ={
    total: '0',
    next: null,
    operation: null,
  };
  const [data, setData] = useState({ normal });

  const handleClick = (buttonName) => {
    let total = {}
    if (data.total === 'Error') {
      total = Object.assign(data,normal)
    } else {
      total = Object.assign(data,calculate(data, buttonName))
  }
  setData({ ...data, ...total });
  console.log(data);
};

const { total, next } = data;

return (
  <div className="calculator">
    <Screen total={!next ? total : next} />
    <Keyboard onButtonClick={handleClick} />
  </div>
);
};

Calculator.displayName = 'Calculator';

export default Calculator;
