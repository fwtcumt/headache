import React from 'react';
import FeedLink from './feedlink';

class FeedBigPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { data } = this.props;
    const pic = data.pics[0];
    const isAd = data.isAd;
    const isTop = data.isTop;

    return (
      <FeedLink className="feed feed-bigpic" to="/p">
        <div className="feed-tit line3">{data.title}</div>
        {pic && <div className="feed-pic">
          <img src={pic} alt=""/>
        </div>}
        <div className="feed-info">
          {isAd && <span className="fixtag">广告</span>}
          {isTop && <span className="fixtag fixtop">置顶</span>}
          {data.info}
          {isAd && <div className="close" onClick={this.handleClose} />}
        </div>
      </FeedLink>
    );
  }
}

export default FeedBigPic;
