import React from 'react';
import { Link } from 'react-router-dom';
import VideoItem from './components/videoitem';
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
        title: '数字货币落地，对我们的生活有什么影响？',
        duration: '04:49',
        pics: [placePic.videoPic],
        commentNum: 233,
        likeNum: 6815,
        author: {
          name: '烦立停',
          avatar: placePic.avatarPic,
          label: '优质视频作者',
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

  handleLike = () => {
    const { videoDetail } = this.state;
    videoDetail.likeNum ++;
    this.setState({ videoDetail });
  }

  render() {
    const { videoDetail } = this.state;

    return (
      <div className="page-root page-video">
        <header className="header">
          <span className="back" onClick={this.handleGoBack} />
          <span>视频详情</span>
          <Link className="search" to="/hot" />
        </header>
        <div className="video-list">
          <VideoItem
            data={videoDetail}
            onFriend={this.handleFriend}
            onLike={this.handleLike}
          />
          <VideoItem
            data={videoDetail}
            onFriend={this.handleFriend}
            onLike={this.handleLike}
          />
          <VideoItem
            data={videoDetail}
            onFriend={this.handleFriend}
            onLike={this.handleLike}
          />
        </div>
      </div>
    );
  }
}

export default Video;
