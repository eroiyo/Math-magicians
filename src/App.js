import './App.css';
import Calculator from './components/Calculator';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  /* eslint-enable */
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;