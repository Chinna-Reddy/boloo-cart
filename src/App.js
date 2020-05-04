import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

import { ProductListing, Cart } from './components';
import NavBar from './common/navBar/navBar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' component={ProductListing} exact/>
          <Route path='/cart' component={Cart} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
