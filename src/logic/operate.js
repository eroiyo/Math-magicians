import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  
  const one = new Big(numberOne);
  const two = new Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    if (two.toString() === '0') {
      return 'Error';
    }
    return one.div(two).toString();
  }
  if (operation === '%') {
    return one.mod(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
