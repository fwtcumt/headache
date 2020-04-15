import React from 'react';
import FeedLink from './feedlink';

class FeedSmallPic extends React.Component {
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
    const pic = data.pics[0];
    const { isAd, isTop, isHot, adLink } = data;
    const linkUrl = {
      href: isAd ? adLink : '',
      to: isAd ? '' : `/p/${data.id}`
    };

    return (
      <FeedLink className="feed feed-smallpic" {...linkUrl}>
        <div className="feed-l">
          <div className="feed-tit line2">{data.title}</div>
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
        </div>
        <div className="feed-r">
          <img src={pic} alt=""/>
        </div>
      </FeedLink>
    );
  }
}

export default FeedSmallPic;
