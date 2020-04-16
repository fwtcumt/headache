import React from 'react';
import Qs from 'qs';
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

    if (!searchWord) return;

    console.log(searchWord);
    this.changeContent('loading');
    setTimeout(() => {
      this.changeContent('result');
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
