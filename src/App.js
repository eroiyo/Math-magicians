import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CalPage from './components/CalPage';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Quote from './components/Quote';

const App = () => (
  <Router>
    <div className="App">
      <div className="App-body">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/calculator">
              <CalPage />
            </Route>
            <Route exact path="/quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

App.displayName = 'App';

export default App;
