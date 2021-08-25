import React, { PureComponent, } from 'react';
import './App.css';
import CalPage from './components/CalPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Welcome from './components/Welcome';
import Quote from './components/Quote';

const App = () => {
    return (
      <Router>
        <div className="App">
          <div className="App-body">
            <Header />
            <div class="content">
              <Switch>
                <Route exact path="/">
                  <Welcome />
                </Route>
                <Route exact path="/calculator">
                  <CalPage />
                </Route>
                <Route exact path="/quote">
                  <Quote/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
};

App.displayName = 'App';

export default App;