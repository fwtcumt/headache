import React from 'react';
import Qs from 'qs';
import { getStore } from 'utils/createStore';
import GuessWord from './components/guessword';
import AssociateWord from './components/associateword';
import Resultword from './components/resultword';
import './index.less';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: 'guess', // 搜索内容类型：guess associate loading result
      searchWord: Qs.parse(props.location.search.slice(1)).key || '',
      searchResult: []
    }
  }

  componentDidMount() {
    this.handleSearch();
  }

  // 切换内容类型
  changeContent = (type) => {
    this.setState({ contentType: type });
  }

  // 清空输入框
  handleClearInput = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ searchWord: '' });
    this.changeContent('guess');
  }

  // 输入框内容改变
  handleInputChange = e => {
    const value = e.target.value;
    this.setState({ searchWord: value });
    
    if (value) {
      this.changeContent('associate');
    } else {
      this.changeContent('guess');
    }
  }

  // input的enter事件
  handleEnterPress = (e) => {
    const evt = window.event || e;
    if (evt.keyCode === 13) {
      this.handleSearch();
    }
  }

  // 点击搜索按钮
  handleSearchBtnClick = () => {
    const { contentType, searchWord } = this.state;

    if (contentType === 'loading') return;
    if (!searchWord) {
      return this.props.history.goBack();
    }
    
    this.handleSearch();
  }

  // 选择搜索词
  handleSelectGuess = (word) => {
    this.setState({ searchWord: word }, () => {
      this.handleSearch();
    });
  }

  // 执行搜索请求
  handleSearch = () => {
    const { searchWord } = this.state;
    const placePic = getStore('placePic');

    if (!searchWord) return;

    this.changeContent('loading');
    setTimeout(() => {
      const randomResult = Math.floor(Math.random() * 3); // 1/3的概率让你失败
      if (randomResult < 1) {
        return this.changeContent('result');
      }

      this.setState({
        searchResult: [
          {
            id: '6816866417774690824',
            title: `发现<span class="lighting">${searchWord}</span>和朱一龙的恋情进行的并没有那么顺利，其实大家也不必过分担心啦`,
            publishTime: '1分钟前',
            commentNum: '3.0万',
            feedType: 'smallpic',
            pics: [placePic.smallPic],
            author: {
              name: '八卦精',
              avatar: placePic.avatarPic,
              label: '娱乐资讯创作者',
              vip: true
            },
            isHot: true,
          },
          {
            id: '6816548336091267588',
            title: `疫情结束我最想做的事就是去玩<span class="lighting">${searchWord}</span>，网友：也太过分了！`,
            publishTime: '2分钟前',
            commentNum: '1701',
            feedType: 'smallpic',
            pics: [placePic.smallPic],
            author: {
              name: '蔡徐坤',
              avatar: placePic.avatarPic,
              label: '优质篮球舞蹈教练',
              vip: true
            },
          },
          {
            id: '6816048339091267588',
            title: `你想要的<span class="lighting">${searchWord}</span>都在这里。突然感觉就被骗了，呜呜~~~~`,
            publishTime: '刚刚',
            commentNum: 0,
            feedType: 'smallpic',
            pics: [placePic.smallPic],
            author: {
              name: '今日头疼',
              avatar: placePic.avatarPic,
              label: '头疼官方账号',
              vip: true,
            },
            adLink: 'https://www.toutiao.com',
            isAd: true
          }
        ]
      }, () => {
        this.changeContent('result');
      });
    }, 1000);
  }

  // 渲染内容
  renderContent = () => {
    const { contentType, searchWord, searchResult } = this.state;
    const content = {
      loading: (
        <div className="loading-content">正在搜索，请稍后...</div>
      ),
      guess: (
        <GuessWord onSelectWord={this.handleSelectGuess} />
      ),
      associate: (
        <AssociateWord word={searchWord} onSelectWord={this.handleSelectGuess} />
      ),
      result: (
        <Resultword word={searchWord} result={searchResult} />
      )
    };
    return content[contentType];
  }

  render() {
    const { contentType, searchWord } = this.state;

    return (
      <div className="page-root page-search">
        <header className="header">
          <div className="searchbox">
            <input
              autoFocus
              type="text"
              className="input"
              placeholder="请输入搜索内容"
              disabled={contentType === 'loading'}
              value={searchWord}
              onChange={this.handleInputChange}
              onKeyDown={this.handleEnterPress}
            />
            <span className={contentType === 'loading' ? 'searchbtn loading' : 'searchbtn'} onClick={this.handleSearchBtnClick}>{contentType === 'loading' ? '' : searchWord ? '搜索' : '取消'}</span>
            <span className={searchWord && contentType !== 'loading' ? 'clear show' : 'clear'} onClick={this.handleClearInput} />
          </div>
        </header>
        <div className="body">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Search;
