import React from 'react';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import FeedSmallPic from './components/feedsmallpic';
import FeedThreePic from './components/feedthreepic';
import FeedBigPic from './components/feedbigpic';
import './index.less';

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
          <FeedSmallPic />
          <FeedSmallPic />
          <FeedThreePic />
          <FeedSmallPic />
          <FeedSmallPic />
          <FeedBigPic />
          <FeedSmallPic />
          <FeedSmallPic />
        </div>
      </div>
    );
  }
}

export default Home;
