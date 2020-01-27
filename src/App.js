import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import './styles/App.css';
import BodyList from './components/Body_Parts/BodyList';
import BodyDetails from './components/Body_Parts/BodyDetails';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/bodylist' component={BodyList} />
          <Route path='/bodylist/:id' component={BodyDetails} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
