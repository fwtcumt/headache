import React from 'react';
import { getStore } from 'utils/createStore';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: []
    }
  }

  componentDidMount() {
    this.getMessageList();
  }

  getMessageList = () => {
    const avatarUrl = getStore('placePic').avatarPic;
    const messageList = [
      {
        id: '1',
        originMessage: '你这个纯用来哄不懂事的甲方😭',
        messageTime: '22:20',
        messageType: 'reply',
        replyInfo: '跟他聊一下邓亚萍',
        user: {
          name: '用户4046678566934',
          avatar: avatarUrl,
          isVip: false
        }
      },
      {
        id: '2',
        originMessage: '你这个纯用来哄不懂事的甲方😭',
        messageTime: '21:58',
        messageType: 'like',
        otherLike: 2,
        user: {
          name: '流泪风云',
          avatar: avatarUrl
        }
      },
      {
        id: '3',
        originMessage: '你这个纯用来哄不懂事的甲方😭',
        messageTime: '04-19',
        messageType: 'reply',
        replyInfo: '预算1000的甲方不会懂事的😂',
        user: {
          name: '豆本逗',
          avatar: avatarUrl,
          label: '信息技术公司项目经理 优质职场创作者',
          isVip: true
        }
      },
      {
        id: '4',
        originMessage: '你这个纯用来哄不懂事的甲方😭',
        messageTime: '04-19',
        messageType: 'reply',
        replyInfo: '能说1000预算，做个搜索引擎的，你觉得他懂事？',
        user: {
          name: '黄大大真大',
          avatar: avatarUrl,
        }
      },
      {
        id: '5',
        originMessage: '@戆巴子他大爷2468，你不要跑，三斤新鲜冒气的💩已为你准备好，开吃吧',
        messageTime: '04-11',
        messageType: 'like',
        otherLike: '379万',
        user: {
          name: '鸿儿哥哥',
          avatar: avatarUrl,
          label: '优质科技领域创作者',
          isVip: true
        }
      },
      {
        id: '6',
        originMessage: '我非常头疼，我要中奖！！！',
        messageTime: '04-10',
        messageType: 'reply',
        replyInfo: '恭喜你，您获得4月8日抽奖的特等奖，奖励三头蒙牛纯天然奶牛。请于3日内自行提取，过期视为自动放弃领奖资格。',
        user: {
          name: '头疼抽奖',
          avatar: avatarUrl,
          label: '今日头疼官方抽奖平台',
          isVip: true
        }
      },
      {
        id: '7',
        originMessage: '我非常头疼，我要中奖！！！',
        messageTime: '04-10',
        messageType: 'reply',
        replyInfo: '劳资从来就不信能中奖，你如果中了我立即吃翔3斤！',
        user: {
          name: '戆巴子他大爷2468',
          avatar: avatarUrl,
        }
      },
      {
        id: '8',
        originMessage: '我非常头疼，我要中奖！！！',
        messageTime: '04-11',
        messageType: 'like',
        otherLike: '14',
        user: {
          name: '纽扣系反了',
          avatar: avatarUrl
        }
      },
    ];

    this.setState({ messageList });
  }

  render() {
    return (
      <div className="message-box">
        <header className="header">
          我的消息盒子
          <span className="back" onClick={this.props.onBack} />
        </header>
        <div className="message-list">
          {this.state.messageList.map(item => (
            <div className="message-item" key={item.id}>
              <div className="item-left">
                <div className="user-avatar">
                  <img src={item.user.avatar} alt=""/>
                  {item.user.isVip && <span className="vip" />}
                </div>
              </div>
              <div className="item-meddle">
                <div className="user-name">{item.user.name}</div>
                <div className="user-label line1">{item.user.label}&nbsp;</div>
                <div className="user-message">
                  {item.messageType === 'like' && <span role="img" aria-label="">👍</span>}
                  {item.messageType === 'reply' && item.replyInfo}
                </div>
                <div className="user-time">{item.messageTime}</div>
                {item.messageType === 'like' && item.otherLike && <div className="other-like">还有{item.otherLike}人点赞→</div>}
              </div>
              <div className="item-right">
                <div>{item.originMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MessageBox;
