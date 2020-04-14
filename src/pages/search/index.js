import React from 'react';
import './index.less';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: ''
    }
  }

  handleClearInput = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ searchWord: '' });
  }

  handleInputChange = e => {
    this.setState({ searchWord: e.target.value });
  }

  handleSearch = () => {
    const { searchWord } = this.state;
    if (!searchWord) {
      return this.props.history.goBack();
    }
  }

  render() {
    const { searchWord } = this.state;

    return (
      <div className="page-root page-search">
        <header className="header">
          <div className="searchbox">
            <input
              autoFocus
              type="text"
              className="input"
              placeholder="请输入搜索内容"
              value={searchWord}
              onChange={this.handleInputChange}
            />
            <span className="searchbtn" onClick={this.handleSearch}>{searchWord ? '搜索' : '取消'}</span>
            <span className={searchWord ? 'clear show' : 'clear'} onClick={this.handleClearInput} />
          </div>
        </header>
        <div className="guess-tit">猜你想搜</div>
      </div>
    );
  }
}

export default Search;
