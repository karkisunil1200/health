import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h5>Welcome to the Home page!</h5>
      <div>
        <Link to='/bodylist'>
          <button>Get Organs</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
