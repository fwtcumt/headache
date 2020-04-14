import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {}

  render() {

    return (
      <div>
        <h2>List</h2>
        <Link to="/detail">To Detail</Link>
      </div>
    );
  }
}

export default Home;
