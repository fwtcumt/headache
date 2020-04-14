import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {}

  render() {

    return (
      <div>
        <h2>Detail</h2>
        <Link to="/">To Home</Link>
      </div>
    );
  }
}

export default Home;
