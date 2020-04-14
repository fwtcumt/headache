import React from 'react';
import FeedLink from './feedlink';
import pic from '../images/feedbig.jpg';

class FeedBigPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <FeedLink className="feed feed-bigpic" to="/list">
        <div className="feed-tit line3">福建常务副省长张志南落马，系今年首虎被查当晚省委通报</div>
        <div className="feed-pic">
          <img src={pic} alt=""/>
        </div>
        <div className="feed-info">
          中国经济网 评论 322 41分钟前
        </div>
      </FeedLink>
    );
  }
}

export default FeedBigPic;
