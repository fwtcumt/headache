import React from 'react';
import FeedLink from './feedlink';

class FeedSmallPic extends React.Component {
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
      <FeedLink className="feed feed-smallpic" href="/p">
        <div className="feed-l">
          <div className="feed-tit line2">{data.title}</div>
          <div className="feed-info">
            {isAd && <span className="fixtag">广告</span>}
            {isTop && <span className="fixtag fixtop">置顶</span>}
            {data.info}
            {isAd && <div className="close" onClick={this.handleClose} />}
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
