/* eslint-disable linebreak-style */

import calculate from '../../logic/calculate';

let input = {};
describe('Calculator test', () => {
  it('testing the sum operation', () => {
    input = {
      total: 34, // this is the input format
      next: 18, // current save value
      operation: '+', // the operation
    };
    const result = calculate(input, '=');
    expect(result).toMatchSnapshot({
      total: '52',
      next: null,
      operation: null,
    });
  });

  it('test the result of +/-', () => {
    input = {
      total: 5,
      next: 9,
      operation: '-',
    };

    const result = calculate(input, '+/-');

    expect(result).toMatchSnapshot({
      next: '-9',
    });
  });
  it('testing the substration operation', () => {
    input = {
      total: 34,
      next: 18,
      operation: '-',
    };
    const result = calculate(input, '=');
    expect(result).toMatchSnapshot({
      total: '16',
      next: null,
      operation: null,
    });
  });
  it('testing the division operation', () => {
    input = {
      total: 4,
      next: 2,
      operation: '÷',
    };
    const result = calculate(input, '=');
    expect(result).toMatchSnapshot({
      total: '2',
      next: null,
      operation: null,
    });
  });
  it('testing the multiplication operation', () => {
    input = {
      total: 4,
      next: 2,
      operation: 'x',
    };
    const result = calculate(input, '=');
    expect(result).toMatchSnapshot({
      total: '8',
      next: null,
      operation: null,
    });
  });
  it('testing the multiplication operation', () => {
    input = {
      total: 5,
      next: 5,
      operation: '%',
    };
    const result = calculate(input, '=');
    expect(result).toMatchSnapshot({
      total: '0',
      next: null,
      operation: null,
    });
  });
  it('testing the AC Button', () => {
    input = {
      total: 52356346235233,
      next: 55744574723465,
      operation: '+',
    };
    const result = calculate(input, 'AC');
    expect(result).toMatchSnapshot({
      total: '0',
      next: null,
      operation: null,
    });
  });
});
