import React from 'react';
import { Link } from 'react-router-dom';
import logo_search from './images/logo_search.png';
import './index.less';

const hotWords = [
  {
    word: '祝钒刚因涉毒被捕',
    search: '1008.0万',
    isHot: true,
    isNew: true
  },
  {
    word: '新冠肺炎疫苗啥时候出来啊',
    search: '599.0万',
    isHot: true
  },
  {
    word: '今年我国航天发射连续失败两次',
    search: '106.4万',
    isNew: true
  },
  {
    word: '特朗普甩锅',
    search: '44.5万',
  },
  {
    word: '美国确诊人数创新高',
    search: '35.7万',
  }
];

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
          {hotWords.map((item, i) => (
            <Link key={item.word} className="hot-item" to={`/search?key=${item.word}`}>
              <span className={i < 3 ? 'rank top' : 'rank'}>{i + 1}</span>
              <div className="word line1">
                {item.word}
                {item.isHot && <span className="tag hot">热</span>}
                {item.isNew && <span className="tag new">新</span>}
              </div>
              <span className="num">{item.search}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default HotWord;
