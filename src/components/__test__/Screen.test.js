import React from 'react';
import Screen from '../Calculator/Screen';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

describe ("The screen display data from the props", ()=>{
    it('the screen renders correctly', () => {
        const tree = renderer.create(<Screen />);
    
        expect(tree).toMatchSnapshot();
      });

    it('trying with 5', ()=> {
      const screen = render(<Screen total = "5" />);
      const trueScreen =  screen.getByTestId('screen')
      expect(trueScreen.textContent).toBe('5');
    })
})