import React from 'react';
import { connect, getStore, setStore } from 'utils/createStore';
import './index.less';

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.homeNavType = getStore('homeNavType');
    this.state = {}
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  handleSwitchChannel = (id, include) => {
    const defaults = getStore('defaults');
    const homeNavType = this.homeNavType;
    const { channelList, dispatch } = this.props;
    const newChannelList = channelList.map(item => {
      return { ...item, include: item.id === id ? include : item.include };
    });
    
    setStore({ homeNavType: !include && id === homeNavType ? defaults.homeNavType : homeNavType });
    dispatch({ channelList: newChannelList });
  }

  render() {
    const { channelList } = this.props;
    const includeChannels = channelList.filter(v => v.include);
    const excludeChannels = channelList.filter(v => !v.include);

    return (
      <div className="page-root page-channel">
        <header className="header">
          频道管理
          <span className="back" onClick={this.handleGoBack} />
        </header>
        <div className="channel-title">点击删除以下频道</div>
        <div className="channel-list">
          {includeChannels.map(item => (
            <div key={item.id} className="item">
              <span
                className={item.id === 1 ? 'channel disabled' : 'channel'}
                onClick={item.id === 1 ? null : () => this.handleSwitchChannel(item.id, false)}
              >{item.name}</span>
            </div>
          ))}
        </div>
        <div className="channel-title">点击添加以下频道</div>
        <div className="channel-list">
          {excludeChannels.map(item => (
            <div key={item.id} className="item">
              <span
                className="channel"
                onClick={() => this.handleSwitchChannel(item.id, true)}
              >{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(['channelList'], Channel);
