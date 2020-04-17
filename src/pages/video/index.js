import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const placePic = {
  videoPic: 'https://placekitten.com/375/210',
  avatarPic: 'https://placekitten.com/100/100'
};

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDetail: {
        id: '6815537455467332103',
        title: '拿回一大袋葱，好奇的各种闻舔咬。',
        commentNum: 233,
        duration: '01:29',
        pics: [placePic.videoPic],
        author: {
          name: '秀外慧中2008',
          avatar: placePic.avatarPic,
          label: '优质生活信息创作者',
          vip: true,
          friend: false
        },
      },
      play: false
    }
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  handleFriend = () => {
    const { videoDetail } = this.state;
    videoDetail.author.friend = !videoDetail.author.friend;
    this.setState({ videoDetail });
  }

  handlePlay = () => {
    this.setState({ play: true });
    setTimeout(() => {
      this.player.play();
    }, 100);
  }

  render() {
    const { videoDetail, play } = this.state;
    const { title, commentNum, pics, duration, author } = videoDetail;
    const pic = pics[0];
    const { name, avatar, label, vip, friend } = author;

    return (
      <div className="page-root page-video">
        <header className="header">
          <span className="back" onClick={this.handleGoBack} />
          <span>视频详情</span>
          <Link className="search" to="/hot" />
        </header>

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
                onClick={this.handleFriend}
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
            <span className="like">6815</span>
          </div>
        </div>

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
                onClick={this.handleFriend}
              >{friend ? '已关注' : '关注'}</span>
            </div>
          </div>
          <div className="video-content">
            <img className="poster" src={pic} alt=""/>
            <div className="video-title line2">{title}</div>
            <span className="playbtn" />
            <span className="videotime">{duration}</span>
          </div>
          <div className="video-info">
            <span className="share">分享</span>
            <span className="collect">收藏</span>
            <span className="comment">{commentNum}</span>
            <span className="like">6815</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
