import React from 'react';
import FeedLink from './feedlink';

class FeedThreePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClose = e => {
    e.stopPropagation();
    e.preventDefault();
    
  }

  render() {
    const { data } = this.props;
    const pics = data.pics;
    const isAd = data.isAd;
    const isTop = data.isTop;

    return (
      <FeedLink className="feed feed-threepic" to="/list">
        <div className="feed-tit line3">{data.title}</div>
        {pics.length > 0 && <div className="feed-pic">
          {pics.map(pic => <img key={pic} src={pic} alt=""/>)}
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

export default FeedThreePic;
