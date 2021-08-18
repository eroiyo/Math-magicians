import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

const App = () => {
  render()
  {
    return (
      <div className="App">
        <div className="App-body">
          <Calculator />
        </div>
      </div>
    );
  }
};

export default App;
