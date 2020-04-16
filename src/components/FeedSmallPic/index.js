import React from 'react';
import SmartLink from '../SmartLink';

/**
 * @param {string} data 小图模板对象
 * @param {string} data.id 信息流id
 * @param {string} data.title 信息流标题
 * @param {string} data.info 信息流额外信息
 * @param {array} data.pics 图片数组，必须一张图
 * @param {string} data.adLink 广告链接
 * @param {boolean} data.isAd 是不是广告
 * @param {boolean} data.isTop 是不是置顶
 * @param {boolean} data.isHot 是不是热门
**/
class FeedSmallPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleRemove = e => {
    e.stopPropagation();
    e.preventDefault();
    this.props.onRemove && this.props.onRemove();
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
      <SmartLink className="feed feed-smallpic" {...linkUrl}>
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
              {isAd && <div className="pretag close" onClick={this.handleRemove} />}
            </div>
          </div>
        </div>
        <div className="feed-r">
          <img src={pic} alt=""/>
        </div>
      </SmartLink>
    );
  }
}

export default FeedSmallPic;
