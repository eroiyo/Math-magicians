import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';

describe('App', () => {
  it('the app renders correctly', () => {
    const tree = renderer.create(<App />);

    expect(tree).toMatchSnapshot();
  });
});