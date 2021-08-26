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
  it('Should return the Substraction', () => {
    const result = operate(5, 3, '-');
    expect(result).toBe('2');
  });
  it('Should return the Substraction', () => {
    const result = operate(5, 3, '-');
    expect(result).toBe('2');
  });
});
