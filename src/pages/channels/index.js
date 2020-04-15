import React from 'react';
import './index.less';

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      includeChannels: [
        { id: 1, name: '推荐' }, { id: 2, name: '热点' }, { id: 3, name: '社会' }, { id: 4, name: '娱乐' },
        { id: 5, name: '科技' }, { id: 6, name: '汽车' }, { id: 7, name: '体育' }, { id: 8, name: '财经' },
        { id: 9, name: '军事' }, { id: 10, name: '时尚' }, { id: 11, name: '游戏' }, { id: 12, name: '国际' }
      ],
      excludeChannels: [
        { id: 13, name: '旅游' }, { id: 14, name: '历史' }, { id: 15, name: '探索' }, { id: 16, name: '美食' },
        { id: 17, name: '育儿' }, { id: 18, name: '养生' }, { id: 19, name: '故事' }, { id: 20, name: '美文' }
      ]
    }
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  handleAddChannel = (i) => {
    const { includeChannels, excludeChannels } = this.state;
    includeChannels.push(excludeChannels.splice(i, 1)[0]);
    this.setState({ includeChannels });
  }

  handleDeleteChannel = (i) => {
    const { includeChannels, excludeChannels } = this.state;
    excludeChannels.push(includeChannels.splice(i, 1)[0]);
    this.setState({ excludeChannels });
  }

  render() {
    const { includeChannels, excludeChannels } = this.state;

    return (
      <div className="page-root page-channel">
        <header className="header">
          频道管理
          <span className="back" onClick={this.handleGoBack} />
        </header>
        <div className="channel-title">点击删除以下频道</div>
        <div className="channel-list">
          {includeChannels.map((item, i) => (
            <div key={item.id} className="item">
              <span
                className={item.id === 1 ? 'channel disabled' : 'channel'}
                onClick={item.id === 1 ? null : () => this.handleDeleteChannel(i)}
              >{item.name}</span>
            </div>
          ))}
        </div>
        <div className="channel-title">点击添加以下频道</div>
        <div className="channel-list">
          {excludeChannels.map((item, i) => (
            <div key={item.id} className="item">
              <span
                className="channel"
                onClick={() => this.handleAddChannel(i)}
              >{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Channel;
