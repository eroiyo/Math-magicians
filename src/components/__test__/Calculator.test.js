import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator/Calculator';

describe('The Calculator is working', () => {
  it('the Calculator renders correctly', () => {
    const tree = renderer.create(<Calculator />);

    expect(tree).toMatchSnapshot();
  });

  it('click on a button calls the calculate function', () => {
    const calculator = render(<Calculator />);
    const fivebutton = calculator.getByTestId('5');
    fireEvent.click(fivebutton);
    const trueScreen = calculator.getByTestId('screen');
    expect(trueScreen.textContent).toBe('5');
  });
});
