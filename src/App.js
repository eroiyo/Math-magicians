import React, { PureComponent } from 'react';
import './App.css';
import Calculator from './components/Calculator';

const App = class extends PureComponent {
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

App.displayName = 'App';

export default App;
