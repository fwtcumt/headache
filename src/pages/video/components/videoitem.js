import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    }
  }

  handlePlay = () => {
    this.setState({ play: true });
    setTimeout(() => {
      this.player.play();
    }, 100);
  }

  render() {
    const { data } = this.props;
    const { title, commentNum, likeNum, pics, duration, author } = data;
    const pic = pics[0];
    const { name, avatar, label, vip, friend } = author;
    const { play } = this.state;

    return (
      <div className="video-item">
        <div className="video-hd">
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
              onClick={this.props.onFriend}
            >{friend ? '已关注' : '关注'}</span>
          </div>
        </div>
        <div className="video-content">
          {!play && <>
            <img className="poster" src={pic} alt=""/>
            <div className="video-title line2">{title}</div>
            <span className="playbtn" onClick={this.handlePlay} />
            <span className="videotime">{duration}</span>
          </>}
          <video
            className={play ? 'video play' : 'video'}
            preload="preload"
            controls="controls"
            src="https://videos.36krcdn.com/20200417/v2_1587108843566_video_mp4_v3"
            ref={el => this.player = el}
          ></video>
        </div>
        <div className="video-info">
          <span className="share">分享</span>
          <span className="collect">收藏</span>
          <span className="comment">{commentNum}</span>
          <span className="like" onClick={this.props.onLike}>{likeNum}</span>
        </div>
      </div>
    );
  }
}

export default VideoItem;
