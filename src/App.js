import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

const App = class extends Component {
  render() {
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
