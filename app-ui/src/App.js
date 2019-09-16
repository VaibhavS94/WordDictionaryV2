import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import './App.css';

function App() {
  return (
    
      <Router>
          <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/home" exact={true} component={Home}/>
              <Route path="/search" exact={true} component={Search}/>
          </Switch>
      </Router>
   );
  
}

export default App;
