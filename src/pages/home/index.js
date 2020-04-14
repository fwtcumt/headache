import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import './index.less';

import pic from './images/feed.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div className="page-root page-home">
        <Header />
        <Navbar />
        <div className="feedlist">
          <Link className="feed" to="/list">
            <div className="feed-l">123</div>
            <div className="feed-r">
              <img src={pic} alt=""/>
            </div>
          </Link>
          <Link className="feed" to="/list">
            sdsdd
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
