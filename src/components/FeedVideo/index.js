import React from 'react';
import SmartLink from '../SmartLink';

/**
 * @param {object} data 大图模板对象
 * @param {string} data.id 信息流id
 * @param {string} data.title 标题
 * @param {string} data.publishTime 发布时间
 * @param {number} data.commentNum 评论数
 * @param {string} data.feedType 信息流模板类型
 * @param {array} data.pics 图片数组
 * @param {string} data.adLink 广告链接
 * @param {boolean} data.isAd 是不是广告
 * @param {boolean} data.isTop 是不是置顶
 * @param {boolean} data.isHot 是不是热门
 * @param {boolean} data.showHead 是否显示头像
 * @param {object} author 作者对象
 * @param {string} author.id 作者id
 * @param {string} author.name 作者名称
 * @param {string} author.avatar 作者头像
 * @param {string} author.label 作者标签
 * @param {boolean} author.vip 作者是否是vip
 * @param {boolean} author.friend 是否关注了作者
 * @param {function} onFriend 关注或者取关 (isFriend) => {}
 * @param {function} onRemove 移除广告
**/
class FeedVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  preventClick = e => {
    e.stopPropagation();
    e.preventDefault();
  }

  handleRemove = e => {
    this.props.onRemove && this.props.onRemove();
  }

  handleFriend = e => {
    this.props.onFriend && this.props.onFriend(this.props.data.author.friend);
  }

  render() {
    const { data } = this.props;
    const { title, publishTime, commentNum, pics, duration, author, isAd, isTop, isHot, adLink, showHead } = data;
    const pic = pics[0];
    const { name, avatar, label, vip, friend } = author;
    const linkUrl = {
      href: isAd && adLink,
      to: !isAd && `/p/${data.id}`
    };

    return (
      <SmartLink className="feed feed-video" {...linkUrl}>
        {showHead && <div className="feed-hd" onClick={this.preventClick}>
          <div className="author-avatar">
            <img src={avatar} alt=""/>
            {vip && <span className="vip" />}
          </div>
          <div className="author-info">
            <div className="name">{name}</div>
            <div className="label">{label}</div>
          </div>
          <div className="author-friend">
            <span
              className={friend ? 'friend' : 'unfriend'}
              onClick={this.handleFriend}
            >{friend ? '已关注' : '关注'}</span>
          </div>
        </div>}
        <div className="feed-pic">
          <img src={pic} alt=""/>
          <div className="feed-tit">
            <div className="line2">{title}</div>
          </div>
          <span className="videoplay" />
          <span className="videotime">{duration}</span>
        </div>
        <div className="feed-info" onClick={this.preventClick}>
          <div className="info-l">
            {isAd && <span className="pretag">广告</span>}
            {isTop && <span className="pretag red">置顶</span>}
            {isHot && <span className="pretag red">热门</span>}
            {!showHead && <span>{name}</span>}
            {!isAd && <span>评论 {commentNum}</span>}
            <span>{publishTime}</span>
          </div>
          <div className="info-r">
            {isAd && <span className="pretag close" onClick={this.handleRemove} />}
          </div>
        </div>
      </SmartLink>
    );
  }
}

export default FeedVideo;
