import React from 'react';
import { Link } from 'react-router-dom';
import logo_search from './images/logo_search.png';
import './index.less';

class HotWord extends React.Component {
  state = {}

  render() {

    return (
      <div className="page-root page-hot">
        <header className="header">
          <img src={logo_search} alt=""/>
        </header>
        <Link className="searchbox" to="/search">搜你想看</Link>
        <div className="hot-list">
          <div className="hot-tit">每分钟更新一次</div>
          <Link className="hot-item" to="/search?key=祝钒刚因涉毒被捕">
            <span className="rank top">1</span>
            <div className="word line1">
              祝钒刚因涉毒被捕
              <span className="tag hot">热</span>
            </div>
            <span className="num">450.0万</span>
          </Link>
          <Link className="hot-item">
            <span className="rank top">2</span>
            <div className="word line1">
              祝钒刚因涉毒被捕
              <span className="tag hot">热</span>
            </div>
            <span className="num">450.0万</span>
          </Link>
          <Link className="hot-item">
            <span className="rank top">3</span>
            <div className="word line1">
              祝钒刚因涉毒被捕
              <span className="tag new">新</span>
            </div>
            <span className="num">450.0万</span>
          </Link>
          <Link className="hot-item">
            <span className="rank">4</span>
            <div className="word line1">祝钒刚因涉毒被捕</div>
            <span className="num">450.0万</span>
          </Link>
          <Link className="hot-item">
            <span className="rank">5</span>
            <div className="word line1">祝钒刚因涉毒被捕</div>
            <span className="num">450.0万</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default HotWord;
