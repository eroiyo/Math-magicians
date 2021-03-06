import operate from '../../logic/operate';

describe('Testing oparations', () => {
  it('Should return the Addition', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });
  it('Should return the Substraction', () => {
    const result = operate(5, 3, '-');
    expect(result).toBe('2');
  });
  it('Should return the Multiplication', () => {
    const result = operate(5, 3, 'x');
    expect(result).toBe('15');
  });
  it('Should return the Division', () => {
    const result = operate(15, 3, '÷');
    expect(result).toBe('5');
  });
  it('Should return the Modulation', () => {
    const result = operate(10, 3, '%');
    expect(result).toBe('1');
  });
  it('Should give a 0 error if given a wrong operator', () => {
    expect(() => {
      operate(10, 3, 'g');
    }).toThrow("Unknown operation 'g'");
  });
  it('Should throw an error if given a wrong number', () => {
    expect(() => {
      operate('h', 3, '+');
    }).toThrow('[big.js] Invalid number');
  });
});
