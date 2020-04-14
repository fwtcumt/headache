import React from 'react';
import FeedLink from './feedlink';
import pic from '../images/feed.jpg';

class FeedSmallPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <FeedLink className="feed feed-smallpic" href="https://www.toutiao.com">
        <div className="feed-l">
          <div className="feed-tit line2">福建常务副省长张志南落马，系今年首虎被查当晚省委通报，可谓雷厉风行。</div>
          <div className="feed-info">
            <span className="fixtag fixtop">置顶</span>
            中国经济网 评论 322 41分钟前
          </div>
        </div>
        <div className="feed-r">
          <img src={pic} alt=""/>
        </div>
      </FeedLink>
    );
  }
}

export default FeedSmallPic;
