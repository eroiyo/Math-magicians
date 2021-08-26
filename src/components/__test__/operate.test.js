import operate from '../../logic/operate';

discribe('Testing oparations', () => {
  it('Should return the Addition', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe(5);
  });
});
