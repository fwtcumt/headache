import React from 'react';
import { Link } from 'react-router-dom';
import logo_search from './images/logo_search.png';
import './index.less';

const hotWords = [
  {
    word: '纽约州长说防疫物资都来自中国',
    search: '483万',
    isHot: true,
  },
  {
    word: '淘宝天猫总裁蒋凡因传言致歉',
    search: '466万',
    isHot: true
  },
  {
    word: '入境泪崩的留学生做志愿者',
    search: '450万',
  },
  {
    word: '印度确诊病例20天涨近20倍',
    search: '434万',
  },
  {
    word: '大使痛批个别人闯关回国',
    search: '404万',
    isNew: true
  },
  {
    word: '武汉疫情等级降至低风险',
    search: '363万',
  },
  {
    word: '扬州被联合国授予世界美食之都新',
    search: '293万',
    isNew: true
  },
  {
    word: '京津冀区域健康状态互认',
    search: '290万',
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
