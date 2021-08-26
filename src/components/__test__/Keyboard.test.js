import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Keyboard from '../Calculator/Keyboard';

describe('The Keyboard is working', () => {
  it('the Keyboard renders correctly', () => {
    const tree = renderer.create(<Keyboard />);

    expect(tree).toMatchSnapshot();
  });

  it('click on a button calls the function', () => {
    let alterable = '0';
    const alterate = () => {
      alterable = '5';
    };
    const keyboard = render(<Keyboard onClick={alterate} />);
    const fivebutton = keyboard.getByTestId('5');
    fireEvent.click(fivebutton);
    expect(alterable).toBe('5');
  });
});
