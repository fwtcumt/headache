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
    const { isAd, isTop, isHot, adLink } = data;
    const linkUrl = {
      href: isAd ? adLink : '',
      to: isAd ? '' : `/p/${data.id}`
    };

    return (
      <FeedLink className="feed feed-threepic" {...linkUrl}>
        <div className="feed-tit line3">{data.title}</div>
        {pics.length > 0 && <div className="feed-pic">
          {pics.map(pic => <img key={pic} src={pic} alt=""/>)}
        </div>}
        <div className="feed-info">
          <div className="info-l">
            {isAd && <span className="pretag">广告</span>}
            {isTop && <span className="pretag red">置顶</span>}
            {isHot && <span className="pretag red">热</span>}
            {data.info}
          </div>
          <div className="info-r">
            {isAd && <div className="pretag close" onClick={this.handleClose} />}
          </div>
        </div>
      </FeedLink>
    );
  }
}

export default FeedThreePic;
