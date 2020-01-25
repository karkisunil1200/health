import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BodyList from './components/Body_Parts/BodyList';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Route path='/' component={BodyList} />
      </div>
    </Router>
  );
};
export default App;
